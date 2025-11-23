console.log("main.js loaded");

// Vent til DOM er klar
document.addEventListener("DOMContentLoaded", () => {
  // --- SVG + Knap elementer ---
  const nosebtn = document.querySelector("#nosebutton");
  const chinbtn = document.querySelector("#chinbotton");  // tjek om det skal være #chinbutton
  const cheekbtn = document.querySelector("#cheekbotton"); // tjek om det skal være #cheekbutton

  // SVG-områder
  const noseGraphic = document.querySelector("#Noose");
  const chinGraphic = document.querySelector("#Chin");
  const cheekGraphic = document.querySelector("#Right_cheek");

  // --- INFO FUNCTIONER ---
  function noseinfo() {
    const el = document.querySelector("#nose");
    if (el) el.textContent =
      "Næse: Lad være med at klø på næsen – det kan give infektioner og forværre akne.";
  }

  function chininfo() {
    const el = document.querySelector("#chininfo");
    if (el) el.textContent =
      "Hage: Undgå at røre området. Hold området rent og brug en mild rens.";
  }

  function cheekinfo() {
    const el = document.querySelector("#cheekinfo");
    if (el) el.textContent =
      " Kind: Brug produkter uden parfume og undgå at ligge på beskidte pudebetræk.";
  }

  // --- EVENT LISTENERS ---
  if (nosebtn) nosebtn.addEventListener("click", noseinfo);
  if (noseGraphic) noseGraphic.addEventListener("click", noseinfo);

  if (chinbtn) chinbtn.addEventListener("click", chininfo);
  if (chinGraphic) chinGraphic.addEventListener("click", chininfo);

  if (cheekbtn) cheekbtn.addEventListener("click", cheekinfo);
  if (cheekGraphic) cheekGraphic.addEventListener("click", cheekinfo);
});
