export function retry(
  fn,
  {
    retriesLeft = 15,
    interval = 1000,
    cb = () => console.log('maximum retries exceeded')
  }
) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch(err => {
        console.error(err);
        setTimeout(() => {
          if (retriesLeft === 1) {
            resolve(cb());
            return;
          }

          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}
