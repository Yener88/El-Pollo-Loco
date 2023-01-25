let world;
let canvas;


// canvas init 
init = () => {
    canvas = document.getElementById('canvas');
}

// this function is to start a game
startGame = () => {
    world = new World(canvas, level1);
    world.resumeGame();
    document.getElementById('startButton').classList.add('d-none');
    document.getElementById('stopButton').classList.remove('d-none');
    document.getElementById('startScreen').classList.add('d-none');
    document.getElementById('control-description').classList.remove('show-description');
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // screen.orientation.lock("landscape");
        document.querySelector('.game-container').requestFullscreen();
        document.querySelector('.game-container').webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        document.querySelector('.game-container').msRequestFullscreen();
        window.onbeforeunload = function () {
          screen.orientation.unlock();
          document.exitFullscreen();
          document.msExitFullscreen();
          document.webkitExitFullscreen();
        };
      }
      if (window.matchMedia("(max-width: 1000px)").matches) {
        // screen.orientation.lock("landscape");
        document.querySelector('.game-container').requestFullscreen();
        document.querySelector('.game-container').webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        document.querySelector('.game-container').msRequestFullscreen();
        document.querySelector('.game-container').mozRequestFullScreen();
        window.onbeforeunload = function () {
          screen.orientation.unlock();
          document.exitFullscreen();
          document.msExitFullscreen();
          document.webkitExitFullscreen();
          document.webkitExitFullscreen();
        };
      }
}

// this function shows the control description
showControlDescription = () => {
    let description = document.getElementById('control-description');
    if(!description.classList.contains('show-description')) {
        description.classList.add('show-description');
    } else {
        description.classList.remove('show-description');
    }
}

// stop game function
addEventListener('keydown', (event) => {
    let stopButton = document.getElementById('stopButton');
    if(event.code == 'Enter'){
        if(!stopButton.classList.contains('d-none')) {
            world.stopGame();
        } else {
            world.resumeGame();
        }
    };
})

/**
 *  this function check die orientation
 */
function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    }
    else {
        document.getElementById('canvas').style.height = `100%`;
    }
}