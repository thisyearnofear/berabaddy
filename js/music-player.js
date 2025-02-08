document.addEventListener("DOMContentLoaded", () => {
  const playerContainer = document.getElementById("music-player");
  const baseTrackUrl = "https://futuretape.xyz/search/karmavioletta";

  const loadRandomTrack = () => {
    const randomTrack = Math.floor(Math.random() * 6) + 1;
    const trackUrl = `${baseTrackUrl}?start=${randomTrack}&autoplay=1`;

    playerContainer.innerHTML = `
            <iframe
                src="${trackUrl}"
                width="100%"
                height="300"
                frameBorder="0"
                allow="autoplay; clipboard-write;"
                loading="lazy"
            ></iframe>
        `;
  };

  // Start minimized
  playerContainer.classList.add("minimized");

  // Toggle minimize/maximize on click
  playerContainer.addEventListener("click", () => {
    playerContainer.classList.toggle("minimized");
    playerContainer.classList.toggle("maximized");
  });

  loadRandomTrack();
});
