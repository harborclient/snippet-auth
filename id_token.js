// CHANGE THIS - The response is expected to be json
// with an ID value. This variable is the key used to
// access that variable.
const idTokenKey = 'idToken';

const contentType =
  hc.response.headers['content-type'] ??
  hc.response.headers['Content-Type'] ??
  '';
if (!contentType.includes('application/json')) {
  throw new Error(`Expected JSON response, got: ${contentType || '(no Content-Type)'}`);
}

let response;
try {
  response = hc.response.json();
} catch {
  throw new Error('Response body is not valid JSON.');
}

if (response[idTokenKey] === undefined) {
  throw new Error(`ID token ${idTokenKey} not found in the response.`);
};
if (!response || typeof response !== 'object' || Array.isArray(response)) {
  throw new Error('Expected a JSON object in the response.');
}

hc.collection.auth.set({
  type: 'bearer',
  token: response[idTokenKey]
});