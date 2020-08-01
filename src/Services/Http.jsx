const doRequest = (url, method, body, headers) =>
  fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: headers || {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  });

const Http = {
  post: (url, body = undefined, headers = undefined) =>
    doRequest(url, "POST", body, headers),
  get: (url, headers = undefined) => doRequest(url, "GET", undefined, headers),
};

export default Http;
