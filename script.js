const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "505",
    name: "Monkeys",
    source: "https://github.com/dyprojectmusic/dyprojectmusic.github.io/raw/main/sound/505.mp3",
  },
  {
    title: "Runtuh",
    name: "Feby, Putri",
    source: "https://cf-media.sndcdn.com/13nlqMqQLted.128.mp3?Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiKjovL2NmLW1lZGlhLnNuZGNkbi5jb20vMTNubHFNcVFMdGVkLjEyOC5tcDMqIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzE0NjI4NDE3fX19XX0_&Signature=I2OK9fJcFog7Bibj4hHT3CsDtfJAJcg7VTylyGZ02BdNkmCwCrmI8l8oCLHFeXImANVwUBHPCeDGzvb0dR8IV1RzhgzwRTO-gk~AbrW383OC57pyLltHhFrNald7y1m4aejbXs1ZRkvLkEimyglb44KPFF~KJMAHpZ4C1-JInzb7~HPkL~8J3oWN0~FKZC8OHLmu-gKvyn~oudcCCXV-zuRL9U7Q3UEuX-n8I1Cqod57W~XpIBwAx5900Tk-GVG5RBQC3Hl7VHyhxP4odOeFlgr6l2P-OY~-LlF77KBlZDkCli3zXzn4se3yp1KTaUt-VxZKmZcZDot~lmtEuFdwZQ__&Key-Pair-Id=APKAI6TU7MMXM5DG6EPQ",
  },
  {
    title: "2 Days Into College",
    name: "aimee carty",
    source:
      "https://github.com/dyprojectmusic/dyprojectmusic.github.io/raw/main/sound/days.mp3",
  },
  {
    title: "Smack That",
    name: "AKON",
    source:
      "https://github.com/dyprojectmusic/dyprojectmusic.github.io/raw/main/sound/smack.mp3",
  },
  {
    title: "chicago freestyle",
    name: "Drake",
    source:
      "https://github.com/dyprojectmusic/dyprojectmusic.github.io/raw/main/sound/Drake.mp3",
  },
  {
    title: "whats the move",
    name: "Laroi",
    source:
      "https://github.com/dyprojectmusic/dyprojectmusic.github.io/blob/main/sound/laroi.mp3",
  },
  {
    title: "Delicate",
    name: "Taylor Swift",
    source:
      "https://github.com/ecemgo/mini-samples-great-tricks/raw/main/song-list/Taylor-Swift-Delicate.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

song.addEventListener("ended", function () {
  // Memainkan lagu berikutnya saat lagu selesai
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playSong();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
