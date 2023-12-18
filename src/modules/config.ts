import * as process from 'process';
const configs = () => ({
  NODE_ENV: process.env.NODE_ENV || 'development',
  GLOBAL: {
    PORT: process.env.PORT || 3000,
  },
  STRIPE_CONFIG: {
    apiKey: process.env.STRIPE_API_KEY,
    webhookConfig: {
      requestBodyProperty: 'rawBody',
      stripeSecrets: {
        account: process.env.STRIPE_WEBHOOK_SECRET,
      },
    },
  },
});
export default configs;
