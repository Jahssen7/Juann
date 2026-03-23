const sky = document.querySelector('.night-sky');
const numStars = 100; // Number of stars to generate

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Random position
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 165}%`;
    
    // Random size
    const size = Math.random() * 3 + 0.5; // size between 0.5px and 3.5px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Randomize animation duration and delay
    star.style.animationDuration = `${Math.random() * 2 + 1}s`; // duration between 1s and 3s
    star.style.animationDelay = `${Math.random() * 2}s`; // delay between 0s and 2s

    sky.appendChild(star);
}

// Generate the stars
for (let i = 0; i < numStars; i++) {
    createStar();
}

const lagu = document.getElementById("lagu");
const ctrlIcon = document.getElementById("playPause");
const progress = document.getElementById("progress-bar");

lagu.onloadedmetadata = function() {
    progress.max = lagu.duration;
    progress.value = lagu.currentTime;
};

function playPause() {
    if (lagu.paused) {
        lagu.play();
        ctrlIcon.innerHTML = "⏸"; // Ganti jadi icon pause
    } else {
        lagu.pause();
        ctrlIcon.innerHTML = "▶"; // Ganti jadi icon play
    }
}

ctrlIcon.addEventListener("click", playPause);

// Update bar saat lagu jalan
if (lagu.play) {
    setInterval(() => {
        progress.value = lagu.currentTime;
    }, 500);
}

// Geser musik lewat bar
progress.onchange = function() {
    lagu.play();
    lagu.currentTime = progress.value;
    ctrlIcon.innerHTML = "⏸";
};