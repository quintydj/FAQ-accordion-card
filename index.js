const vragen1 = document.querySelector(".vragen1");
const vragen2 = document.querySelector(".vragen2");
const vragen3 = document.querySelector(".vragen3");
const vragen4 = document.querySelector(".vragen4");
const vragen5 = document.querySelector(".vragen5");

const vraag1 = document.querySelector(".vraag1");
const vraag2 = document.querySelector(".vraag2");
const vraag3 = document.querySelector(".vraag3");
const vraag4 = document.querySelector(".vraag4");
const vraag5 = document.querySelector(".vraag5");

const antwoord1 = document.querySelector(".antwoord1");
const antwoord2 = document.querySelector(".antwoord2");
const antwoord3 = document.querySelector(".antwoord3");
const antwoord4 = document.querySelector(".antwoord4");
const antwoord5 = document.querySelector(".antwoord5");

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");

window.onload = eersteVraag();

vragen1.addEventListener("click", eersteVraag);

function eersteVraag() {
  if (antwoord1.style.display === "none") {
    antwoord1.style.display = "block";
    img1.style.transform = "rotate(180deg)";
    vraag1.style.fontWeight = "900";
  } else {
    antwoord1.style.display = "none";
    img1.style.transform = "rotate(0deg)";
    vraag1.style.fontWeight = "300";
  }
}

window.onload = tweedeVraag();

vragen2.addEventListener("click", tweedeVraag);

function tweedeVraag() {
  if (antwoord2.style.display === "none") {
    antwoord2.style.display = "block";
    img2.style.transform = "rotate(180deg)";
    vraag2.style.fontWeight = "900";
  } else {
    antwoord2.style.display = "none";
    img2.style.transform = "rotate(0deg)";
    vraag2.style.fontWeight = "300";
  }
}

window.onload = derdeVraag();

vragen3.addEventListener("click", derdeVraag);

function derdeVraag() {
  if (antwoord3.style.display === "none") {
    antwoord3.style.display = "block";
    img3.style.transform = "rotate(180deg)";
    vraag3.style.fontWeight = "900";
  } else {
    antwoord3.style.display = "none";
    img3.style.transform = "rotate(0deg)";
    vraag3.style.fontWeight = "300";
  }
}

window.onload = vierdeVraag();

vragen4.addEventListener("click", vierdeVraag);

function vierdeVraag() {
  if (antwoord4.style.display === "none") {
    antwoord4.style.display = "block";
    img4.style.transform = "rotate(180deg)";
    vraag4.style.fontWeight = "900";
  } else {
    antwoord4.style.display = "none";
    img4.style.transform = "rotate(0deg)";
    vraag4.style.fontWeight = "300";
  }
}

window.onload = vijfdeVraag();

vragen5.addEventListener("click", vijfdeVraag);

function vijfdeVraag() {
  if (antwoord5.style.display === "none") {
    antwoord5.style.display = "block";
    img5.style.transform = "rotate(180deg)";
    vraag5.style.fontWeight = "900";
  } else {
    antwoord5.style.display = "none";
    img5.style.transform = "rotate(0deg)";
    vraag5.style.fontWeight = "300";
  }
}
