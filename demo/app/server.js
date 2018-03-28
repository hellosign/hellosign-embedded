const Hapi = require('hapi');
const hellosign = require('hellosign-sdk');
const path = require('path');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {

  await server.register([
    require('inert')
  ]);

  server.route({
    method: 'GET',
    path: '/{param*}',
    config: {
      handler: {
        directory: {
          path: path.join(__dirname, 'public')
        }
      }
    }
  });

  server.route({
    method: 'POST',
    path: '/createSignatureRequest',
    config: {
      handler: async (req, h) => {
        const { apiKey, clientId } = req.payload;

        const client = hellosign({
          key: apiKey,
          client_id: clientId
        });

        const data = await client.signatureRequest.createEmbedded({
          test_mode: 1,
          subject: 'NDA with Acme Co.',
          message: 'Please sign this NDA and then we can discuss more. Let me know if you have any questions.',
          signers: [
            {
              email_address: 'alice@example.com',
              name: 'Alice',
              order: 0,
            },
            {
              email_address: 'bob@example.com',
              name: 'Bob',
              order: 1,
            }
          ],
          cc_email_addresses: ['charlie@example.com', 'lawyer@example.com'],
          files: [__dirname + '/public/files/nda.docx']
        });

        const signatureId = data.signature_request.signatures[0].signature_id;
        const { embedded } = await client.embedded.getSignUrl(signatureId);

        return {
          success: true,
          data: {
            signUrl: embedded.sign_url
          }
        };
      }
    }
  });

  await server.start();

  console.log(`Server running at: ${server.info.uri}`);
};

init();
