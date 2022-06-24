// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import {NsLogLevel} from '../object-definitions/logger-object';

export const environment = {
  version: '0.1 - Alpha',
  refreshTimeout: 3000,
  httpTimeout: 5000,
  httpRefreshDelay: 2000,
  notificationRefreshTime: 300000,
  vpnMonitoringTime: 3000,
  httpRefreshTries: 3,
  production: false,
  mockData: false,
  testEmail: 'test@turbosoft-sydney.com',
  ipStackApiKey: 'b7ef14370e9ff723c64166ad3d7f8645',
  ipStackUrl: 'https://api.ipstack.com/',
  logger: {
    outputToConsole: true,
    outputToServer: false,
    logDelay: 500,
    level: NsLogLevel.max,
    outputTo: 'console',
  },
  url: {
    app: 'https://app.equishark.com',
    web: 'https://equishark.com',
    // web: 'http://localhost:4200',
    // vpn: 'heathsnoek.me',
    // vpn: 'ipsec.parentguard.cloud',
    base: 'https://api.equishark.com',
    // base: 'http://localhost:8001',
    // base: 'http://192.168.1.106:8002',
    query: '/query',
    auth0DeleteUser: '/auth0/delete-user',
    auth0ConfirmEmail: '/auth0/confirm-email',
    betaSignup: '/beta',
    signup: `/signup`,
    contact: '/contact'
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
