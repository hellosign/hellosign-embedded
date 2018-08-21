import HelloSign from './embedded';

const mockSignURL = 'https://app.hellosign.com/editor/embeddedSign?signature_id=abcdef0123456789abcdef0123456789';
const mockClientId = 'abcdef0123456789abcdef0123456789';

describe('HelloSign', () => {

  test('is defined', () => {
    expect(HelloSign).toBeDefined();
  });

  test('instantiates without errors', () => {
    expect(() => new HelloSign()).not.toThrow();
  });

  test('throws when instantiated without an object', () => {
    expect(() => new HelloSign(false)).toThrow(/must be an object/);
  });

  describe('client', () => {

    test('opens without crashing', () => {
      const client = new HelloSign();

      expect(() => {
        client.open(mockSignURL, {
          clientId: mockClientId,
        });
      }).not.toThrow();

      client.close();
    });
  });
});
