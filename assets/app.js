function togglePopup() {
    let popup = document.querySelector("#popup-overlay");
    popup.classList.toggle("open");
}

// Fonction pour observer les éléments
function observeElements() {
    const elementsToObserve = document.querySelectorAll('.projet_anim');
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe pour rendre l'élément visible
                entry.target.classList.add('visible');
            } else {
                // Retirer la classe pour cacher l'élément
                entry.target.classList.remove('visible');
            }
        });
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    elementsToObserve.forEach(element => observer.observe(element));
}

// Attacher les fonctions aux événements correspondants
document.addEventListener('DOMContentLoaded', observeElements);