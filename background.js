// console.log('Service worker carregado');

// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log('Mensagem recebida:', request);
//   if (request.action === 'activateExtension') {
//     chrome.windows.create({"url": sender.tab.url, "incognito": true});
//   }
// });
console.log('Service worker carregado');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Mensagem recebida:', request);
  if (request.action === 'openIncognitoSearch') {
    chrome.windows.create({
      "url": `https://www.google.com/search?
        q=${encodeURIComponent(request.query)}`,
      "incognito": true
    });
  }
});
