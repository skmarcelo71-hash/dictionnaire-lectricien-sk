
    
  const composants = [
  {
    nom: "Lampe",
    icon: "💡",
    symbole: "⊗",
    definition: "Un appareil qui transforme l'énergie électrique en lumière.",
    role: "Éclaire une pièce ou un espace.",
    fonctionnement: "Le courant électrique traverse la lampe et produit de la lumière.",
    unite: "Watt (W)",
    utilisation: "Éclairage des maisons, écoles, bureaux et bâtiments.",
    exemple: "Lampe LED de 10 W",
    precaution: "Couper le courant avant de remplacer une lampe."
  },

  {
    nom: "Interrupteur",
    icon: "🔘",
    symbole: "—/—",
    definition: "Un appareil qui permet de commander un circuit électrique.",
    role: "Allume ou éteint un appareil ou un éclairage.",
    fonctionnement: "Il ouvre ou ferme le passage du courant.",
    unite: "Pas d'unité",
    utilisation: "Commande des lampes et appareils électriques.",
    exemple: "Interrupteur mural",
    precaution: "Couper le courant avant toute intervention."
  },

  {
    nom: "Prise",
    icon: "🔌",
    symbole: "⏚",
    definition: "Un dispositif permettant de brancher un appareil électrique.",
    role: "Fournit l'énergie électrique à un appareil.",
    fonctionnement: "Elle met l'appareil en contact avec le circuit électrique.",
    unite: "Volt (V)",
    utilisation: "Alimentation des appareils électriques.",
    exemple: "Prise domestique 230 V",
    precaution: "Ne jamais toucher une prise avec les mains mouillées."
  },

  {
    nom: "Disjoncteur",
    icon: "⚡",
    symbole: "—[DJ]—",
    definition: "Un dispositif de protection d'une installation électrique.",
    role: "Protège le circuit contre certaines surintensités.",
    fonctionnement: "Il coupe automatiquement le circuit lorsqu'un défaut est détecté.",
    unite: "Ampère (A)",
    utilisation: "Protection des installations électriques.",
    exemple: "Disjoncteur 16 A",
    precaution: "Ne jamais le remplacer par un dispositif de calibre inadapté."
  },

  {
    nom: "Batterie",
    icon: "🔋",
    symbole: "—| |—",
    definition: "Un dispositif qui stocke et fournit de l'énergie électrique.",
    role: "Alimente un circuit en énergie.",
    fonctionnement: "Elle transforme l'énergie chimique stockée en énergie électrique.",
    unite: "Volt (V)",
    utilisation: "Alimentation des appareils et systèmes électriques.",
    exemple: "Batterie 12 V",
    precaution: "Éviter les courts-circuits et respecter la polarité."
  },

  {
    nom: "Résistance",
    icon: "🔧",
    symbole: "—[R]—",
    definition: "Un composant qui s'oppose au passage du courant.",
    role: "Limite le courant électrique dans un circuit.",
    fonctionnement: "Elle transforme une partie de l'énergie électrique en chaleur.",
    unite: "Ohm (Ω)",
    utilisation: "Protection et limitation du courant.",
    exemple: "Résistance de 100 Ω",
    precaution: "Choisir une résistance adaptée à la puissance du circuit."
  },

  {
    nom: "Relais",
    icon: "🔄",
    symbole: "K",
    definition: "Un dispositif permettant de commander un circuit avec un autre.",
    role: "Commande électriquement un autre circuit.",
    fonctionnement: "Une bobine commande des contacts électriques.",
    unite: "Volt (V)",
    utilisation: "Commande de moteurs, lampes et autres circuits.",
    exemple: "Relais 12 V",
    precaution: "Respecter la tension prévue pour la bobine."
  },

  {
    nom: "Multimètre",
    icon: "📏",
    symbole: "V / A / Ω",
    definition: "Un appareil permettant de mesurer plusieurs grandeurs électriques.",
    role: "Mesure notamment la tension, le courant et la résistance.",
    fonctionnement: "Il utilise des circuits de mesure adaptés à la grandeur sélectionnée.",
    unite: "V, A et Ω",
    utilisation: "Diagnostic et contrôle des circuits électriques.",
    exemple: "Mesurer une tension de 230 V",
    precaution: "Sélectionner le bon mode et le bon calibre avant la mesure."
  },

  {
    nom: "Buzzer",
    icon: "🔊",
    symbole: "BZ",
    definition: "Un composant qui produit un signal sonore.",
    role: "Avertit ou signale un événement.",
    fonctionnement: "L'énergie électrique produit une vibration qui crée un son.",
    unite: "Volt (V)",
    utilisation: "Alarmes, sonnettes et systèmes de signalisation.",
    exemple: "Buzzer 5 V",
    precaution: "Utiliser la tension prévue par le fabricant."
  },

  {
    nom: "Transformateur",
    icon: "🔌",
    symbole: "TR",
    definition: "Un appareil qui permet de modifier une tension alternative.",
    role: "Augmente ou diminue une tension alternative.",
    fonctionnement: "Il utilise l'induction électromagnétique entre deux enroulements.",
    unite: "Volt (V)",
    utilisation: "Adaptation des tensions électriques.",
    exemple: "Transformateur 230 V / 12 V",
    precaution: "Respecter les tensions d'entrée et de sortie."
  },

  {
    nom: "Condensateur",
    icon: "⚙️",
    symbole: "—| |—",
    definition: "Un composant capable de stocker temporairement une charge électrique.",
    role: "Stocke puis restitue de l'énergie électrique.",
    fonctionnement: "Il accumule des charges électriques entre ses armatures.",
    unite: "Farad (F)",
    utilisation: "Filtrage, démarrage et stockage temporaire d'énergie.",
    exemple: "Condensateur de 100 µF",
    precaution: "Un condensateur peut rester chargé après la coupure du circuit."
  },

  {
    nom: "Moteur électrique",
    icon: "🌀",
    symbole: "M",
    definition: "Un appareil qui transforme l'énergie électrique en mouvement.",
    role: "Produit un mouvement mécanique.",
    fonctionnement: "Les forces électromagnétiques font tourner le moteur.",
    unite: "Watt (W)",
    utilisation: "Ventilateurs, pompes, machines et appareils.",
    exemple: "Moteur électrique de 500 W",
    precaution: "Couper l'alimentation avant toute intervention."
  }
];

const liste = document.getElementById("liste-composants");
const recherche = document.getElementById("recherche");

function afficherComposants(elements) {
  liste.innerHTML = "";

  if (elements.length === 0) {
    liste.innerHTML = `
      <div class="empty">
        🔎 Aucun composant trouvé.<br>
        Essaie un autre mot.
      </div>
    `;
    return;
  }

  elements.forEach(function(composant) {
    const carte = document.createElement("article");
    carte.className = "composant";

    carte.innerHTML = `
      <div class="icon">${composant.icon}</div>

      <h3>${composant.nom}</h3>

      <p>${composant.definition}</p>

      <div class="details"
        style="display:none; margin-top:16px; padding-top:15px; border-top:1px solid #e2e8f0;">

        <p><strong>⚡ Symbole :</strong> ${composant.symbole}</p>

        <p><strong>📖 Définition :</strong> ${composant.definition}</p>

        <p><strong>🎯 Rôle :</strong> ${composant.role}</p>

        <p><strong>⚙️ Fonctionnement :</strong> ${composant.fonctionnement}</p>

        <p><strong>📐 Unité :</strong> ${composant.unite}</p>

        <p><strong>🔌 Utilisation :</strong> ${composant.utilisation}</p>

        <p><strong>💡 Exemple :</strong> ${composant.exemple}</p>

        <p><strong>⚠️ Précaution :</strong> ${composant.precaution}</p>

      </div>

      <p class="indication"
        style="margin-top:15px; color:#0f4c81; font-weight:bold;">
        👆 Appuie pour voir la fiche complète
      </p>
    `;

    carte.addEventListener("click", function() {
      const details = carte.querySelector(".details");
      const indication = carte.querySelector(".indication");

      if (details.style.display === "none") {
        details.style.display = "block";
        indication.textContent = "👆 Appuie pour fermer la fiche";
      } else {
        details.style.display = "none";
        indication.textContent = "👆 Appuie pour voir la fiche complète";
      }
    });

    liste.appendChild(carte);
  });
}

afficherComposants(composants);

recherche.addEventListener("input", function() {
  const texte = recherche.value.trim().toLowerCase();

  const resultats = composants.filter(function(composant) {
    return (
      composant.nom.toLowerCase().includes(texte) ||
      composant.definition.toLowerCase().includes(texte) ||
      composant.role.toLowerCase().includes(texte) ||
      composant.utilisation.toLowerCase().includes(texte)
    );
  });

  afficherComposants(resultats);
});