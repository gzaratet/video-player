function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

function handleBackward() {
  $video.currentTime -= 10;
}

function handleForward() {
  $video.currentTime += 10;
}

function handleLoaded() {
  $progress.max = $video.duration;
  // console.log('ha cargado el video', $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  // console.log('timeUpdate', $video.currentTime);
}

function handleInput() {
  $video.currentTime = $progress.value;
  // console.log($progress.value);
}

const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');
const $progress = document.querySelector('#progress');

$backward.addEventListener('click', handleBackward);
$play.addEventListener('click', handlePlay);
$pause.addEventListener('click', handlePause);
$forward.addEventListener('click', handleForward);
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
$progress.addEventListener('input', handleInput);
