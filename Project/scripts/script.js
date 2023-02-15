const songs = [
    "Bryan Mathys - Hard Miles.mp3",
    "Bryan Mathys - It's Not Hard to Get Lost.mp3",
    "Bryan Mathys - Wild Heart.mp3",
    "Rex Hobart &amp; the Misery Boys - I'll Never Sleep It Off.mp3",
    "Rex Hobart &amp; the Misery Boys - 'Til My Teardrops Turn To Gold.mp3",
    "Rex Hobart and Misery Boys - Good Ain't Gone.mp3",
    "The Volebeats - One I Love.mp3"
];

const player = document.getElementById("player");

function createSongList(){
    const list = document.createElement("ol");
    songs.forEach(song => {
        let item = document.createElement("li");
        //document.createTextNode(song);
        item.appendChild(document.createTextNode(song));
        list.appendChild(item);
    });
    return list;
}

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

const links = document.querySelectorAll("li");
for (const link of links) {
    link.addEventListener("click", setSong);
}

function setSong(e) {
    document.querySelector('#mainPhoto').classList.remove("pulse");
    const source = document.getElementById("source");
    source.src = "songs/"+ e.target.innerText;

    document.querySelector('#currentSong').innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();
    document.querySelector('#mainPhoto').classList.add('pulse');
}

function playAudio() {
    if (player.readyState) {
        player.play();
    }
}

function pauseAudio() {
    player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function(e) {
    const volume = e.target.value;
    player.volume = volume;
}

function updateProgress() {
    if (player.currentTime > 0 ) {
        const progressBar = document.getElementById('progress');
        progressBar.value = (player.currentTime / player.duration) * 100;
    }
     console.log(player.duration);
    
}