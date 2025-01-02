/**
 * config.ts
 * Airwallex Payments Demo. Created by Shirly.Chen
 * 
 * This file saves all configs of the demo
 */
const config = {
  airwallex: {
    // Airwallex uses an API key and Client ID to authenticate requests, keys are managed via the Airwallex Webapp.
    // Do not share your API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
    // Use your test keys for development and live keys for real charges in production.
    apiKey: process.env.AIRWALLEX_API_KEY || '7269ce9ede5f2c26b027936c90933df5b3ec2e06e497b8c9e427ca0312da37003d17a0b9856c1cb8bf79f70148c83888',
    clientId: process.env.AIRWALLEX_CLIENT_ID || 'GNXLzCiHQFiMpxLbV0cVcg',
    // Use airwallex test host for development and production host in your production.
    clientApiHost: process.env.AIRWALLEX_API || 'https://api.airwallex.com',
    clientPciApiHost: process.env.AIRWALLEX_PCI_API
  },
};
export default config;
