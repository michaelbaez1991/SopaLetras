function showFinishingModal() {
  const finishingModal = document.querySelector('.modal--finishing');
  const restartBtn = document.querySelector('.btn--restart');
  const cheerAudio = document.querySelector('.audio-final-cheer');

  finishingModal.classList.add('show');
  setTimeout(() => {
    playAudio(cheerAudio);
  }, 1000);

  restartBtn.addEventListener('click', function () {
    location.reload();
  })
}