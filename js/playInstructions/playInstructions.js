function playInstructions() {
  const audioInstructions = document.querySelector('.audio-instructions');
  const startBtn = document.querySelector('.j-play-instructions');
  const repeatInstructionsBtn = document.querySelector('.btn--repeat');
  const modal = document.querySelector('.modal');

  function playIntructionAudio(event) {
    event.preventDefault();
    modal.classList.remove('show');
    audioInstructions.load();
    audioInstructions.muted = false;
  }

  startBtn.addEventListener('click', playIntructionAudio);

  repeatInstructionsBtn.addEventListener('click', playIntructionAudio);
}
