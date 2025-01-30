const apiEndpoint = 'https://jd498qw9n7.execute-api.ap-southeast-2.amazonaws.com/';
const userPoolId = 'ap-southeast-2_Uz9nmDnL8';
const userPoolClientId = '3qkv2vd5s9glotvq4bmd2ba7bs';

const apiPath: string = '/api';

export const commonEnvironment = {
  apiBaseUrl: `${apiEndpoint}${apiPath}`,
  Cognito: {
    userPoolId,
    userPoolClientId,
  },
};
