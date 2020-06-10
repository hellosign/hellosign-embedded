/**
 * HelloSign Embedded class names.
 *
 * @enum {string}
 * @readonly
 */
const classNames = {
  BASE: 'x-hellosign-embedded',
  BASE_IN_MODAL: 'x-hellosign-embedded--in-modal',
  IFRAME: 'x-hellosign-embedded__iframe',
  MODAL_CLOSE: 'x-hellosign-embedded__modal-close',
  MODAL_CLOSE_BTN: 'x-hellosign-embedded__modal-close-button',
  MODAL_CONTENT: 'x-hellosign-embedded__modal-content',
  MODAL_SCREEN: 'x-hellosign-embedded__modal-screen',
};

/**
 * HelloSign Embedded events.
 *
 * @enum {string}
 * @readonly
 */
const events = {
  ERROR: 'error',
  SEND: 'send',
  CANCEL: 'cancel',
  CLOSE: 'close',
  CREATE_TEMPLATE: 'createTemplate',
  DECLINE: 'decline',
  FINISH: 'finish',
  MESSAGE: 'message',
  OPEN: 'open',
  READY: 'ready',
  REASSIGN: 'reassign',
  SIGN: 'sign',
};

/**
 * HelloSign Embedded iFrame properties.
 *
 * @enum {string}
 * @readonly
 */
const iframe = {
  NAME: 'x-hellosign-embedded',
};

/**
 * HelloSign Embedded supported locales.
 *
 * @enum {string}
 * @readonly
 */
const locales = {
  CS_CZ: 'cs_CZ', // Czech (Czech Republic)
  DA_DK: 'da_DK', // Danish (Denmark)
  DE_DE: 'de_DE', // German (Germany)
  EN_GB: 'en_GB', // English (Great Britain)
  EN_US: 'en_US', // English (United States)
  ES_LA: 'es_LA', // Spanish (Latin America)
  ES_ES: 'es_ES', // Spanish (Spain)
  ES_MX: 'es_MX', // Spanish (Mexico)
  FR_FR: 'fr_FR', // French (France)
  ID_ID: 'id_ID', // Indonesian (Indonesia)
  IT_IT: 'it_IT', // Italian (Italy)
  JA_JP: 'ja_JP', // Japanese (Japan)
  KO_KR: 'ko_KR', // Korean (Korea)
  MS_MY: 'ms_MY', // Malaysian (Malaysia)
  NB_NO: 'nb_NO', // Norwegian (Norway)
  NL_NL: 'nl_NL', // Dutch (Netherlands)
  PL_PL: 'pl_PL', // Polish (Poland)
  PT_BR: 'pt_BR', // Portuguese (Brazil)
  RU_RU: 'ru_RU', // Russian (Russia)
  SV_SE: 'sv_SE', // Swedish (Sweden)
  TH_TH: 'th_TH', // Thai (Thailand)
  UK_UA: 'uk_UA', // Ukrainian (Ukraine)
  ZH_CN: 'zh_CN', // Chinese (Simplified) (China)
  ZH_TW: 'zh_TW', // Chinese (Traditional) (China)
};

/**
 * HelloSign Embedded cross-origin window messages.
 *
 * @enum {string}
 * @readonly
 */
const messages = {
  APP_CONFIGURE: 'hellosign:configure',
  APP_ERROR: 'hellosign:error',
  APP_INITIALIZE: 'hellosign:initialize',
  APP_VERIFY_DOMAIN_REQUEST: 'hellosign:verifyDomainRequest',
  APP_VERIFY_DOMAIN_RESPONSE: 'hellosign:verifyDomainResponse',
  USER_CANCEL_REQUEST: 'hellosign:userCancelRequest',
  USER_CREATE_TEMPLATE: 'hellosign:userCreateTemplate',
  USER_DECLINE_REQUEST: 'hellosign:userDeclineRequest',
  USER_FINISH_REQUEST: 'hellosign:userFinishRequest',
  USER_REASSIGN_REQUEST: 'hellosign:userReassignRequest',
  USER_SEND_REQUEST: 'hellosign:userSendRequest',
  USER_SIGN_REQUEST: 'hellosign:userSignRequest',
};

export default {
  classNames,
  events,
  iframe,
  locales,
  messages,
};
