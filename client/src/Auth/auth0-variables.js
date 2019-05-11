require('dotenv').config()



export const AUTH_CONFIG = {
  domain: process.env.REACT_APP_DOMAIN || process.env.REACT_APP_DEV_DOMAIN,
  clientId: process.env.REACT_APP_CLIENT_ID || process.env.REACT_APP_DEV_CLIENT_ID,
  callbackUrl: process.env.REACT_APP_CALL_BACK_URL || process.env.REACT_APP_DEV_CALL_BACK_URL
}
