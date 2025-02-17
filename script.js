document.addEventListener("DOMContentLoaded", function () {
    // Initial animation for the intro scene
    gsap.from("#intro h1", { opacity: 0, y: -50, duration: 1 });
    gsap.from("#intro p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".start-btn", { scale: 0, duration: 1, delay: 1 });

    // Show the intro scene by default
    document.getElementById("intro").style.display = "flex";
    gsap.to("#intro", { opacity: 1, duration: 1 });
});

function startStory() {
    gsap.to("#intro", { opacity: 0, duration: 1, onComplete: () => {
        document.getElementById("intro").style.display = "none";
        showScene("planetScene");
    }});
}

function nextScene(sceneId) {
    gsap.to(".scene", { opacity: 0, duration: 1, onComplete: () => {
        document.querySelectorAll(".scene").forEach(scene => scene.style.display = "none");
        showScene(sceneId);
    }});
}

function showScene(sceneId) {
    const scene = document.getElementById(sceneId);
    scene.style.display = "flex";
    gsap.to(scene, { opacity: 1, duration: 1 });
    gsap.from(scene.querySelector("img"), { opacity: 0, scale: 0.5, duration: 1 });
}

function escapeBlackhole() {
    gsap.to("#blackholeScene img", { scale: 0, duration: 1.5, onComplete: () => {
        nextScene("ending");
    }});
}

function restartStory() {
    gsap.to(".scene", { opacity: 0, duration: 1, onComplete: () => {
        document.querySelectorAll(".scene").forEach(scene => scene.style.display = "none");
        document.getElementById("intro").style.display = "flex";
        gsap.to("#intro", { opacity: 1, duration: 1 });
    }});
}