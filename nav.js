// Sélection des boutons de navigation
const btnHome = document.getElementById("btnHome");
const btnProjets = document.getElementById("btnProjets");
const btnInfos = document.getElementById("btnInfos");
const btnContact = document.getElementById("btnContact");

// Sélection des div de chaque section
const sectionHome = document.getElementById("Home");
const sectionProjets = document.getElementById("Projets");
const sectionInfos = document.getElementById("Infos");
const sectionContact = document.getElementById("Contact");

// Fonctions pour afficher/cacher les sections
function showSection(section) {
  section.style.display = "block";
}

function hideSections() {
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.style.display = "none";
  });
}

// Écouteurs d'événements pour les clics sur les boutons de navigation
btnHome.addEventListener("click", function () {
  hideSections();
  showSection(sectionHome);
});

btnProjets.addEventListener("click", function () {
  hideSections();
  showSection(sectionProjets);
});

btnInfos.addEventListener("click", function () {
  hideSections();
  showSection(sectionInfos);
});

btnContact.addEventListener("click", function () {
  hideSections();
  showSection(sectionContact);
});

// Afficher la section Home par défaut
showSection(sectionHome);
// Définir une variable pour stocker les particules
let particles = [];

// Définir la fonction setup pour l'initialisation
function setup() {
  createCanvas(windowWidth, windowHeight); // Créer un canvas qui couvre toute la fenêtre
  background(0); // Définir l'arrière-plan noir

  // Initialiser une direction cohérente mais aléatoire pour le vent
  let windDirection = p5.Vector.random2D().mult(0.5);

  // Générer un grand nombre de particules avec la même direction de vent
  for (let i = 0; i < 500; i++) {
    particles.push(new Particle(windDirection));
  }
}

// Définir la fonction draw pour l'animation
function draw() {
  background(0); // Effacer l'arrière-plan à chaque frame

  // Dessiner et mettre à jour chaque particule
  particles.forEach((particle) => {
    particle.update();
    particle.display();
  });
}

// Définir la classe Particle pour représenter chaque particule
class Particle {
  constructor(windDirection) {
    // Initialiser la position aléatoire à l'intérieur du canvas
    this.pos = createVector(random(width), random(height));
    // Initialiser la vitesse avec la direction du vent
    this.vel = windDirection.copy();
  }

  // Mettre à jour la position de la particule
  update() {
    // Ajouter la vitesse à la position
    this.pos.add(this.vel);

    // Si la particule sort du canvas, la ramener à l'intérieur
    if (
      this.pos.x < 0 ||
      this.pos.x > width ||
      this.pos.y < 0 ||
      this.pos.y > height
    ) {
      this.pos.x = random(width);
      this.pos.y = random(height);
    }
  }

  // Dessiner la particule
  display() {
    // Dessiner un petit carré à la position actuelle
    noStroke();
    fill(255);
    square(this.pos.x, this.pos.y, 1); // Réduire la taille des particules
  }
}
