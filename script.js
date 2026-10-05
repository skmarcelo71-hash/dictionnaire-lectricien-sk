
    const composants = [
  {
    nom: "💡 Lampe",
    description: "Produit de la lumière grâce à l'énergie électrique."
  },
  {
    nom: "🔘 Interrupteur",
    description: "Permet d'ouvrir ou de fermer un circuit électrique."
  },
  {
    nom: "🔌 Prise",
    description: "Permet de brancher un appareil électrique."
  },
  {
    nom: "⚡ Disjoncteur",
    description: "Protège le circuit électrique contre certains défauts."
  },
  {
    nom: "🔋 Batterie",
    description: "Stocke et fournit de l'énergie électrique."
  },
  {
    nom: "🔧 Résistance",
    description: "Limite le courant dans un circuit électrique."
  },
  {
    nom: "🔄 Relais",
    description: "Permet de commander un circuit électrique avec un autre circuit."
  },
  {
    nom: "📏 Multimètre",
    description: "Permet de mesurer la tension, le courant et la résistance."
  },
  {
    nom: "🔊 Buzzer",
    description: "Produit un signal sonore avec de l'énergie électrique."
  },
  {
    nom: "🔌 Transformateur",
    description: "Permet de modifier une tension électrique alternative."
  }
];

const liste = document.getElementById("liste-composants");
const recherche = document.getElementById("recherche");

function afficherComposants(listeComposants) {
  liste.innerHTML = "";

  if (listeComposants.length === 0) {
    liste.innerHTML = "<p>Aucun composant trouvé.</p>";
    return;
  }

  listeComposants.forEach(function(composant) {
    const carte = document.createElement("div");

    carte.className = "composant";

    carte.innerHTML = `
      <h3>${composant.nom}</h3>
      <p>${composant.description}</p>
    `;

    liste.appendChild(carte);
  });
}

afficherComposants(composants);

recherche.addEventListener("input", function() {
  const texte = recherche.value.toLowerCase();

  const resultats = composants.filter(function(composant) {
    return (
      composant.nom.toLowerCase().includes(texte) ||
      composant.description.toLowerCase().includes(texte)
    );
  });

  afficherComposants(resultats);
});

console.log("⚡ Dictionnaire Électricien SK est prêt !");