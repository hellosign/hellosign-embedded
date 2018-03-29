import HelloSign from 'hellosign-embedded';

const configurationFormElement = document.getElementById('configuration-form');
const apiKeyElement = document.querySelector('[name="api-key"]');
const clientIdElement = document.querySelector('[name="client-id"]');
const redirectUrlElement = document.querySelector('[name="redirect-url"]');

/**
 * Initializes the dmeo app.
 *
 * @see saveConfig
 * @see createRequest
 */
function init() {
  configurationFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();

    // Close the existing request if there is one.
    HelloSign.close();

    saveConfig();
    createRequest();
  });
}

/**
 * Sends a request to the backend to create a new
 * signature request using the HelloSign NodeJS SDK with
 * the given API key and Client ID.
 *
 * @see handleCreateRequest
 */
function createRequest() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', (evt) => {
    const body = JSON.parse(xhr.responseText);

    if (body.success) {
      openRequest(body.data.signUrl);
    } else {
      alert('Something went wrong. Did you remember to enter your API Key and Client ID?');
    }
  });

  xhr.open('POST', '/createSignatureRequest', true);
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.send(
    JSON.stringify({
      clientId: clientIdElement.value,
      apiKey: apiKeyElement.value
    })
  );
}

/**
 * Initializes and opens the embedded signature request
 * with the signature URL provided by the backend.
 *
 * @param {string} signUrl
 */
function openRequest(signUrl) {
  HelloSign.init(clientIdElement.value);

  const options = {
    url: signUrl,
    allowCancel: true,
    debug: true,
    skipDomainVerification: true,
    uxVersion: 2,
    messageListener(evt) {
      console.log(evt);
    }
  };

  // Set the redirect URL, if defined by the user.
  if (redirectUrlElement.value.length) {
    options.redirectUrl = redirectUrlElement.value;
  }

  HelloSign.open(options);
}

/**
 * Saves the user's current config for ease of use.
 */
function saveConfig() {
  try {
    window.localStorage.setItem('config', (
      JSON.stringify({
        apiKey: apiKeyElement.value,
        clientId: clientIdElement.value,
        redirectUrl: redirectUrlElement.value
      })
    ));
  } catch (err) {
    // User may have private browsing enabled.
    // Fail silently.
  }
}

/**
 * Prepopulates configuration fields from local storage.
 */
function loadConfig() {
  try {
    const config = window.localStorage.getItem('config');

    if (config) {
      const { apiKey, clientId, redirectUrl } = JSON.parse(config);

      apiKeyElement.value = apiKey;
      clientIdElement.value = clientId;
      redirectUrlElement.value = redirectUrl;
    }
  } catch (err) {
    // User may have private browsing enabled.
    // Fail silently.
  }
}

loadConfig();
init();