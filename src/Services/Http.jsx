const Http = (url, method = "GET", body = null, headers = null) =>
  fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: headers || {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`${response.status}: ${response.statusText}`);
  });

export default Http;
