import settings from './settings';

describe('settings', () => {

  test('exports classNames', () => {
    expect(settings.classNames).toBeDefined();
  });

  test('exports events', () => {
    expect(settings.events).toBeDefined();
  });

  test('exports iframe', () => {
    expect(settings.iframe).toBeDefined();
  });

  test('exports locales', () => {
    expect(settings.locales).toBeDefined();
  });

  test('exports messages', () => {
    expect(settings.messages).toBeDefined();
  });
});
