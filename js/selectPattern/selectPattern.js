function selectPattern() {
  const imgBoxBorders = document.querySelectorAll(
    '.img-box__border'
  );
  const confetti = document.querySelector('.confetti');
  const audioSuccess = document.querySelector('.audio-success');
  const audioWrong = document.querySelector('.audio-wrong');
  const audioInstructions = document.querySelector('.audio-instructions');
  let correctBoxes = [];
  let rightClicked = 0;

  function stopAudios() {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
      audio.pause();
      audio.currentTime = 0;
    })
  }

  imgBoxBorders.forEach(box => {
    if (box.classList.contains('j-correct')) {
      correctBoxes.push(box);
    }
    box.addEventListener('click', function () {
      // audioInstructions.pause();
      stopAudios();

      if (this.classList.contains('j-correct')) {
        rightClicked++;
        this.classList.add('a-right');
        audioSuccess.play();
      } else {
        this.classList.add('a-wrong');
        audioWrong.play();
        this.addEventListener('animationend', function () {
          this.classList.remove('a-wrong');
        });
      }
      
      if (rightClicked === correctBoxes.length) {
        confetti.classList.add('show');
        showFinishingModal();
      }
    });
  });
}