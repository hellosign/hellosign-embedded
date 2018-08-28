import { safeHtml } from 'common-tags';

import settings from './settings';

const template = safeHtml`
  <div class="${settings.classNames.BASE}">
    <div class="${settings.classNames.MODAL_SCREEN}"></div>
    <div class="${settings.classNames.MODAL_CLOSE}">
      <button class="${settings.classNames.MODAL_CLOSE_BTN}" type="button" title="Close"></button>
    </div>
    <div class="${settings.classNames.MODAL_CONTENT}">
      <iframe class="${settings.classNames.IFRAME}" name="${settings.iframe.NAME}" src="" />
    </div>
  </div>
`;

export default template;
