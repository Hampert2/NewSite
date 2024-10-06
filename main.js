function wSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
}

document.querySelector(".button-2b").addEventListener('click', function () {
    wSound("sons/anime-ahh.mp3")
});


//sons ao clicar
const audio = new Audio('sons/anime-ahh.mp3');
audio.loop = true;

document.addEventListener('keydown', function (event) {
    if (event.key.length === 1) {
        audio.currentTime = 0;
        audio.play();
    }
    audio.loop = false;
});

//pop-up para informação
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('show-popup').addEventListener('click', function() {
//         document.getElementById('info-popup').style.display = 'block';
//     });

//     document.getElementById('close-popup').addEventListener('click', function() {
//         document.getElementById('info-popup').style.display = 'none';
//     });

//     document.getElementById('activate-extension').addEventListener('click', function() {
//         console.log('Botão clicado');
//         chrome.runtime.sendMessage({action: 'activateExtension'});
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-button').addEventListener('click', function() {
        const query = document.getElementById('search-query').value;
        if (query) {
            chrome.runtime.sendMessage({action: 'openIncognitoSearch', query: query});
        }
    });
});