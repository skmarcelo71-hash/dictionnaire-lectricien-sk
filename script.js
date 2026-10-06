
    
const composants = [
  {
    nom: "Lampe",
    icon: "💡",
    description: "Produit de la lumière grâce à l'énergie électrique."
  },
  {
    nom: "Interrupteur",
    icon: "🔘",
    description: "Permet d'ouvrir ou de fermer un circuit électrique."
  },
  {
    nom: "Prise",
    icon: "🔌",
    description: "Permet de brancher un appareil électrique."
  },
  {
    nom: "Disjoncteur",
    icon: "⚡",
    description: "Protège le circuit électrique contre certains défauts."
  },
  {
    nom: "Batterie",
    icon: "🔋",
    description: "Stocke et fournit de l'énergie électrique."
  },
  {
    nom: "Résistance",
    icon: "🔧",
    description: "Limite le courant dans un circuit électrique."
  },
  {
    nom: "Relais",
    icon: "🔄",
    description: "Permet de commander un circuit avec un autre circuit."
  },
  {
    nom: "Multimètre",
    icon: "📏",
    description: "Mesure la tension, le courant et la résistance."
  },
  {
    nom: "Buzzer",
    icon: "🔊",
    description: "Produit un signal sonore avec de l'énergie électrique."
  },
  {
    nom: "Transformateur",
    icon: "🔌",
    description: "Permet de modifier une tension électrique alternative."
  },
  {
    nom: "Condensateur",
    icon: "⚙️",
    description: "Stocke temporairement de l'énergie électrique."
  },
  {
    nom: "Moteur électrique",
    icon: "🌀",
    description: "Transforme l'énergie électrique en mouvement."
  }
];

const liste = document.getElementById("liste-composants");
const recherche = document.getElementById("recherche");

function afficherComposants(elements) {
  liste.innerHTML = "";

  if (elements.length === 0) {
    liste.innerHTML =
      '<div class="empty">🔎 Aucun composant trouvé.<br>Essaie un autre mot.</div>';
    return;
  }

  elements.forEach(function(composant) {
    const carte = document.createElement("article");
    carte.className = "composant";

    carte.innerHTML = `
      <div class="icon">${composant.icon}</div>
      <h3>${composant.nom}</h3>
      <p>${composant.description}</p>
    `;

    liste.appendChild(carte);
  });
}

afficherComposants(composants);

recherche.addEventListener("input", function() {
  const texte = recherche.value.trim().toLowerCase();

  const resultats = composants.filter(function(composant) {
    return (
      composant.nom.toLowerCase().includes(texte) ||
      composant.description.toLowerCase().includes(texte)
    );
  });

  afficherComposants(resultats);
});