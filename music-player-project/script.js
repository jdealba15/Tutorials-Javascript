const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song Titles
const songs = ['hey', 'summer', 'ukulele'];

// Keep track of songs
let songIndex = 0;

// Initially load song details
loadSong(songs[songIndex]);

function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;
  }

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    audio.play();
  }

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    audio.pause();
  }

// The Element.classList is a read-only property that returns a live DOMTokenList collection of 
// the class attributes of the element.

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
} 

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
  
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });

function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length -1;
  }

  loadSong(songs[songIndex]);

  playSong();
}


function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);