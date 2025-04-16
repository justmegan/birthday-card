
const startScreen = document.getElementById('start-screen');
const countdownScreen = document.getElementById('countdown-screen');
const mainContent = document.getElementById('main-content');
const countdownNumber = document.getElementById('countdown-number');


const allowedPassword = "moodeng2025"; 

const userPassword = prompt("Insert your password: ");

if (userPassword !== allowedPassword) {
    document.body.innerHTML = "<h1>Denied Access 🚫</h1><p>Wrong password!</p>";
    throw new Error("Denied access: wrong password");
}

const romanticPhrases = [
    "I celebrate not just your birth,", 
    "but the way you make my world",
    "so much brighter.", 
    "Happy Birthday!"
];

let phraseIndex = 0;
let countdownInterval;

document.getElementById('start-button').addEventListener('click', () => {
    startScreen.style.display = 'none';
    countdownScreen.style.display = 'block';
    playMusic();
    startCountdown();
});


function startCountdown() {
    countdownInterval = setInterval(() => {
        countdownNumber.textContent = romanticPhrases[phraseIndex];
        if (phraseIndex === romanticPhrases.length) {
            clearInterval(countdownInterval);
            countdownScreen.style.display = 'none';
            mainContent.style.display = 'block';
        }

        phraseIndex++;
    }, 1800); 
}

// Music control functions
function playMusic() {
    const music = document.getElementById("background-music");
    const toggleButton = document.getElementById("toggle-music");

    music.play().catch(error => {
        console.error("Autoplay tidak diperbolehkan oleh browser:", error);
    });

    toggleButton.textContent = "⏸️ Pause Music";
}

function toggleMusic() {
    const music = document.getElementById("background-music");
    const toggleButton = document.getElementById("toggle-music");

    if (music.paused) {
        music.play();
        toggleButton.textContent = "⏸️ Pause Music";
    } else {
        music.pause();
        toggleButton.textContent = "▶️ Play Music";
    }
}


let photoIndex = 0;
const photos = document.querySelectorAll(".photo-container img");

function updatePhotos() {
    photos.forEach((photo, index) => {
        photo.style.display = (index === photoIndex || index === photoIndex + 1) ? "block" : "none";
    });
}

function nextPhoto() {
    if (photoIndex < photos.length - 2) {
        photoIndex++;
    }
    updatePhotos();
}

function prevPhoto() {
    if (photoIndex > 0) {
        photoIndex--;
    }
    updatePhotos();
}

updatePhotos();
