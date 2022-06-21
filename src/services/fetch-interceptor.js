class FetchInterceptor {
  constructor() {
    this.env = window || global;

    this.fetch = this.env.fetch;
  }

  static hooks = ['onBeforeRequest', 'onRequestSuccess', 'onRequestFailure'];

  static register(hooks = {}) {
    if (this._instance) {
      return this._instance;
    }
    const interceptor = new this();
    for (let i = 0; i < this.hooks.length; i++) {
      const hook = this.hooks[i];
      if (typeof hooks[hook] === 'function') {
        interceptor[hook] = hooks[hook];
      }
    }
    interceptor.hijack();
    this._instance = interceptor;
    return interceptor;
  }

  unregister() {
    this.env.fetch = this.fetch;
    delete this.constructor._instance;
  }

  hijack() {
    const controller = new AbortController();
    const signal = controller.signal;
    this.env.fetch = (...a) => {
      let request;
      if (a[0] instanceof Request) {
        let object = {};
        [
          'cache',
          'context',
          'credentials',
          'destination',
          'headers',
          'integrity',
          'method',
          'mode',
          'redirect',
          'referrer',
          'referrerPolicy',
          'url',
          'body',
          'bodyUsed'
        ].forEach(prop => {
          if (prop in a[0]) {
            object[prop] = a[0][prop];
          }
        });
        object.signal = signal;
        const { url, ...options } = object;
        request = new Request(url, options);
      } else {
        const url = a[0];
        const options = {
          ...a[1],
          signal
        };
        request = new Request(url, options);
      }
      if (typeof this.onBeforeRequest === 'function') {
        this.onBeforeRequest(request, controller);
      }
      const promise = this.fetch.call(this.env, request);
      if (typeof this.onAfterRequest === 'function') {
        this.onAfterRequest(request, controller);
      }
      return promise
        .then(response => {
          if (response.ok) {
            if (typeof this.onRequestSuccess === 'function') {
              this.onRequestSuccess(response, request, controller);
            }
          } else {
            if (typeof this.onRequestFailure === 'function') {
              this.onRequestFailure(response, request, controller);
            }
          }
          return response;
        })
        .catch(error => {
          if (typeof this.onRequestFailure === 'function') {
            this.onRequestFailure(error, request, controller);
          }
          throw error;
        });
    };
  }
}

// ### Example global handling request
// ################################################
// const interceptor = FetchInterceptor.register({
//   onBeforeRequest(request, controller) {
//     // Hook before request
//   },
//   onRequestSuccess(response, request, controller) {
//     // Hook on response success
//   },
//   onRequestFailure(response, request, controller) {
//     // Hook on response failure
//   }
// });

export { FetchInterceptor };
