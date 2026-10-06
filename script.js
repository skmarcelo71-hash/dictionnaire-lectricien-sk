const composants = [
  {
    nom: "Lampe",
    icon: "💡",
    symbole: "⊗",
    description: "Produit de la lumière grâce à l'énergie électrique.",
    role: "Éclaire une pièce ou un espace.",
    unite: "Watt (W)",
    exemple: "Lampe LED de 10 W"
  },
  {
    nom: "Interrupteur",
    icon: "🔘",
    symbole: "—/—",
    description: "Permet d'ouvrir ou de fermer un circuit électrique.",
    role: "Commande l'allumage ou l'arrêt d'un circuit.",
    unite: "Pas d'unité",
    exemple: "Interrupteur mural"
  },
  {
    nom: "Prise",
    icon: "🔌",
    symbole: "⏚",
    description: "Permet de brancher un appareil électrique.",
    role: "Fournit l'énergie électrique à un appareil.",
    unite: "Volt (V)",
    exemple: "Prise domestique 230 V"
  },
  {
    nom: "Disjoncteur",
    icon: "⚡",
    symbole: "—[ ]—",
    description: "Protège le circuit électrique contre certains défauts.",
    role: "Coupe automatiquement le courant en cas de problème.",
    unite: "Ampère (A)",
    exemple: "Disjoncteur 16 A"
  },
  {
    nom: "Batterie",
    icon: "🔋",
    symbole: "—| |—",
    description: "Stocke et fournit de l'énergie électrique.",
    role: "Alimente un circuit en énergie électrique.",
    unite: "Volt (V)",
    exemple: "Batterie 12 V"
  },
  {
    nom: "Résistance",
    icon: "🔧",
    symbole: "—/\\/\\—",
    description: "Limite le courant dans un circuit électrique.",
    role: "S'oppose au passage du courant.",
    unite: "Ohm (Ω)",
    exemple: "Résistance de 100 Ω"
  },
  {
    nom: "Relais",
    icon: "🔄",
    symbole: "K",
    description: "Permet de commander un circuit avec un autre circuit.",
    role: "Commande électriquement un autre circuit.",
    unite: "Volt (V)",
    exemple: "Relais 12 V"
  },
  {
    nom: "Multimètre",
    icon: "📏",
    symbole: "V / A / Ω",
    description: "Mesure la tension, le courant et la résistance.",
    role: "Permet de réaliser plusieurs mesures électriques.",
    unite: "V, A et Ω",
    exemple: "Mesurer une tension de 230 V"
  },
  {
    nom: "Buzzer",
    icon: "🔊",
    symbole: "BZ",
    description: "Produit un signal sonore avec de l'énergie électrique.",
    role: "Avertit ou signale un événement par un son.",
    unite: "Volt (V)",
    exemple: "Buzzer 5 V"
  },
  {
    nom: "Transformateur",
    icon: "🔌",
    symbole: "))) || ((( ",
    description: "Permet de modifier une tension électrique alternative.",
    role: "Augmente ou diminue une tension alternative.",
    unite: "Volt (V)",
    exemple: "Transformateur 230 V / 12 V"
  },
  {
    nom: "Condensateur",
    icon: "⚙️",
    symbole: "—| |—",
    description: "Stocke temporairement de l'énergie électrique.",
    role: "Stocke et restitue une charge électrique.",
    unite: "Farad (F)",
    exemple: "Condensateur 100 µF"
  },
  {
    nom: "Moteur électrique",
    icon: "🌀",
    symbole: "M",
    description: "Transforme l'énergie électrique en mouvement.",
    role: "Produit un mouvement mécanique grâce à l'électricité.",
    unite: "Watt (W)",
    exemple: "Moteur électrique 500 W"
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

      <div class="details"
        style="display:none; margin-top:16px; padding-top:15px; border-top:1px solid #e2e8f0;">

        <p><strong>⚡ Symbole :</strong> ${composant.symbole}</p>

        <p><strong>🎯 Rôle :</strong> ${composant.role}</p>

        <p><strong>📐 Unité :</strong> ${composant.unite
    

    
  
    

  