document.querySelector('.fullscreen').addEventListener('click', toggleFullScreen); //openfullscreen

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen(); //enter
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen(); //exit
      }
    }
  }
