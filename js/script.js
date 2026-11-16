const cominSoon = document.getElementById("cominSoon");
if (cominSoon) {
    let offset = 700;
    let speed = 2;
    const maxSpeed = 10;
    let lastTime = performance.now();

    function scrollSingleImage(time) {
        const delta = (time - lastTime) / (1000 / 60);
        lastTime = time;
        speed = Math.min(speed, maxSpeed);
        offset -= speed * delta;

        if (offset <= -cominSoon.scrollWidth) {
            offset = 700;
        }

        cominSoon.style.transform = `translate3d(${offset}px, 0, 0)`;
        requestAnimationFrame(scrollSingleImage);
    }

    requestAnimationFrame(scrollSingleImage);
}

window.addEventListener("load", () => {
    const overlay = document.getElementById("fadeOverlay");
    setTimeout(() => overlay.classList.add("fade-out"), 50);
});

document.addEventListener("DOMContentLoaded", () => {
    const version = document.getElementById("versionNumber");
    if (version) {
        version.innerText = "All in good time...";
    }
});
