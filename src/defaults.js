import settings from './settings';

export default {
  allowCancel: true,
  debug: false,
  locale: settings.locales.EN_US,
  skipDomainVerification: false,
  testMode: false,
  timeout: 30000, // 30 seconds
};
