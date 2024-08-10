var musicPlayer = document.getElementById("musicPlayer");
var playPauseBtn = document.getElementById("playPauseBtn");
var volumeControl = document.getElementById("volumeControl");
var progressBar = document.getElementById("progressBar");
var currentTimeDisplay = document.getElementById("currentTime");
var durationDisplay = document.getElementById("duration");
var audioSource = document.getElementById("audioSource");
var songList = document.getElementById("songList");


var songs = [
    { name: "01 Apaixonado Por Você", file: "./01 Apaixonado Por Você.mp3" },
    { name: "02 Agenda Rabiscada", file: "./02 Agenda Rabiscada.mp3" },
    { name: "03 Liguei Pra Dizer Que Te Amo", file: "./03 Liguei Pra Dizer Que Te Amo.mp3" },
    { name: "04 Baby", file: "./04 Baby.mp3" },
    { name: "05 Coração Vai Lá", file: "./05 Coração Vai Lá.mp3" },
    { name: "06 Hoje Eu Sei", file: "./06 Hoje Eu Sei.mp3" },
    { name: "07 Apenas Um Sorriso", file: "./07 Apenas Um Sorriso.mp3" },
    { name: "08 Ô De Casa, Ô De Fora.mp", file: "./08 Ô De Casa, Ô De Fora.mp3" },
    { name: "09 Laço Aberto", file: "./09 Laço Aberto.mp3" },
    { name: "10 Pagina De Amigos", file: "./10 Pagina De Amigos.mp3" },
    { name: "11 Larga Dele", file: "./11 Larga Dele.mp3" },
    { name: "12 Deus Me Livre", file: "./12 Deus Me Livre.mp3" },
    { name: "13 Amor Carrapicho", file: "./13 Amor Carrapicho.mp3" },
    { name: "14 Outra Mulher", file: "./14 Outra Mulher.mp3" },

];    

var currentIndex = 0;

// Inicialização com a primeira música
audioSource.src = songs[currentIndex].file;
musicPlayer.load();

function playPause() {
    if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseBtn.innerHTML = "Pause";
    } else {
    musicPlayer.pause();
    playPauseBtn.innerHTML = "Play";
    }
}

function setVolume() {
    musicPlayer.volume = volumeControl.value / 100;
}

function changeSong() {
    currentIndex = songList.selectedIndex;
    audioSource.src = songs[currentIndex].file;
    musicPlayer.load();
  playPause(); // Inicia automaticamente a nova música
}

function updateProgressBar() {
    var currentTime = musicPlayer.currentTime;
    var duration = musicPlayer.duration;

    var currentTimeMinutes = Math.floor(currentTime / 60);
    var currentTimeSeconds = Math.floor(currentTime % 60);
    currentTimeDisplay.innerHTML = currentTimeMinutes + ":" + (currentTimeSeconds < 10 ? "0" : "") + currentTimeSeconds;

    var durationMinutes = Math.floor(duration / 60);
    var durationSeconds = Math.floor(duration % 60);
    durationDisplay.innerHTML = durationMinutes + ":" + (durationSeconds < 10 ? "0" : "") + durationSeconds;

    var progress = (currentTime / duration) * 100;
    progressBar.value = progress;
};

function playNextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    audioSource.src = songs[currentIndex].file;
    musicPlayer.load();
    musicPlayer.play();
    playPauseBtn.innerHTML = "Pause";
    songList.selectedIndex = currentIndex;
}

musicPlayer.addEventListener("timeupdate", updateProgressBar);
musicPlayer.addEventListener("ended", playNextSong);
