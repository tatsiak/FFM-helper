chrome.webRequest.onHeadersReceived.addListener(
  function (details) {
    console.log('here')
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
    urls: ["*://*.fitformedev.nl/*"],
  },
  ["blocking", "responseHeaders", "extraHeaders"]
);
