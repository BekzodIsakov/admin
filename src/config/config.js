const stage = process.env.NODE_ENV;

const configs = {
  development: {
    apiUrl: 'https://api.student.najotedu.uz',
    landingUrl: 'https://landing.najotedu.uz',
    clientId: '0506aacd-8eaa-42bf-b3d0-9b45298a66ce'
  },
  production: {
    apiUrl: 'https://api.student.najottalim.uz',
    landingUrl: 'https://najottalim.uz',
    clientId: '0506aacd-8eaa-42bf-b3d0-9b45298a66ce'
  },
  test: {
    apiUrl: 'https://api.student.najottalim.uz',
    landingUrl: 'https://landing.najottalim.uz',
    clientId: '0506aacd-8eaa-42bf-b3d0-9b45298a66ce'
  }
};

export const config = configs[stage];
export const version = '1.0.0';
