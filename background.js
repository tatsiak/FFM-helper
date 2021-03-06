chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    const responseHeaders = details.responseHeaders;
    responseHeaders.map((header) => {
      if (header.name === "set-cookie") {
        header.value = header.value.replace(
          "samesite=lax",
          "SameSite=None; Secure"
        );
      }
      return header;
    });
    return { responseHeaders };
  },
  {
    urls: [
      "*://*.fitformedev.nl/*",
      "*://*.swan.market/*",
      "*://*.swan.local/*",
    ],
  },
  ["blocking", "responseHeaders", "extraHeaders"]
);
