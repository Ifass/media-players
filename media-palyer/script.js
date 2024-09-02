const video = document.querySelector('video')
const ProgressRange = document.querySelector('.progress-range');
const ProgressBar = document.querySelector('.progress-bar');
const playbtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-Icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elaps');
const duration = document.querySelector('.time-elapsed');
const Fullscreenbtn = document.querySelector('.fullscreen');

// Play & Pause ----------------------------------- //

function showPlayIcon(){
    playbtn.classList.replace('fa-pause' , 'fa-play')
    playbtn.setAttribute('title', 'play');
}

function togglePlay() {
    if (video.paused) {
        video.play();
        playbtn.classList.replace('fa-play' , 'fa-pause')
        playbtn.setAttribute('title', 'pause');
    } else{
        video.pause();
        showPlayIcon();    
    }

}

// on Video End , Show play button icon
video.addEventListener('ended', showPlayIcon);

// Progress Bar ---------------------------------- //

//Update progress bar as video plays
function updateProgress() {
   ProgressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
}

// Volume Controls --------------------------- //



// Change Playback Speed -------------------- //



// Fullscreen ------------------------------- //


// event Listners
playbtn.addEventListener('click' ,togglePlay);
video.addEventListener('click',togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
