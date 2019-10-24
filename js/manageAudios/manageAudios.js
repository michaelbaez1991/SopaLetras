function stopAudios() {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
}

function playAudio(audio) {
  audio.play();
}

function handleSoundEvent(elObject, typeEvent) {
  elObject.forEach(item => {
    item.element.addEventListener(typeEvent, function(event) {
      if (this === event.target) {
        stopAudios();
        playAudio(item.audio);
      }
    });
  });
}
