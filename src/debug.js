import debug from 'debug';

const info = debug(`${__PKG_NAME__}:info`);
const warn = debug(`${__PKG_NAME__}:warn`);
const error = debug(`${__PKG_NAME__}:error`);

info.log = console.log.bind(console); // eslint-disable-line no-console
warn.log = console.warn.bind(console); // eslint-disable-line no-console

export default {
  info,
  warn,
  error,
};
