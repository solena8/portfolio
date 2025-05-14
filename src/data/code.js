// src/data/code.js
import Projet from "../models/Projet";

const codeProjets = [
  new Projet(
    "Carte des voyages",
    [
      "Projet personnel - déploiement en cours",
      "Visualisation des lieux de voyages sur une carte",
      "Connexion à 2 API, création de BDD",
      "Python, SQL Alchemy, Fast API, JavaScript, Leaflet, PositionStack",
    ],
    "voyages.png",
    "une page internet montrant une carte du monde avec un formulaire pour entrer une adresse et un affichage des lieux enregistrés",
    "https://carte-des-voyages-tug-solena.web.app/"
  ),
  new Projet(
    "Solveur pour le jeu de cartes Set",
    [
      "Projet personnel",
      "Outil pour identifier les ensembles de cartes possibles dans le jeu Set",
      "Python, HTML, CSS, JavaScript",
    ],
    "setgame.png",
    "une page internet montrant beaucoup de cartes séléctionables avec des symboles et des couleurs, les cartes séléctionnées en dessous et le résultat trouvé lorsqu'on appuie sur le couton trouve un set",
    "https://set-game-solver.web.app/"
  ),
  new Projet(
    "Portfolio",
    [
      "Projet personnel",
      "Création d'un site vitrine pour mes projets de code, origami et dessins",
      "Lien récursif vers lui-même ^^",
      "Vue, JavaScript, Firebase",
    ],
    "portfolio.png",
    "la page d'accueil de ce portfolio",
    "https://solena-toussaint.web.app/"
  ),
  new Projet(
    "Analyse Ventes PME",
    [
      "Projet d’intégration Simplon | 1 semaine",
      "Micro-services pour extraction et analyse de données",
      "Dataviz",
      "Python, SQL, Docker",
    ],
    "analyseventes.png",
    "un schema d'architecture de projet à deux services",
    "https://github.com/solena8/analyse_des_ventes"
  ),
  new Projet(
    "Bikerage - Jeu vidéo Pico-8",
    [
      "Projet d'école | 2 semaines | 3 personnes",
      "Jeu 8-bit où le joueur doit éviter des obstacles, collecter des déchets et les recycler",
      "Lua, Pico-8",
    ],
    "bikerage.png",
    "une image du jeu video bikerage avec un personnage principal à velo qui doti éviter les voitures",
    "https://www.lexaloffle.com/bbs/?pid=150200"
  ),
  new Projet(
    "Naténa - Projet mobile",
    [
      "Projet d’école | 2 semaines back / 2 semaines front | 2 personnes",
      "Application listant des spots de surf avec API et BDD",
      "Python, SQL Alchemy, Fast API, Kotlin",
    ],
    "natena.png",
    "un schema de base de donnée relationelle",
    "https://github.com/solena8/Natena_projet_mobile"
  ),
  new Projet(
    "Not Safe For Raccoons - Blog",
    [
      "Projet d’école | 2 semaines | 4 personnes",
      "Création d’un site avec framework, tests unitaires et end-to-end",
      "Python, Django, Playwright, Pytest",
    ],
    "nsfr.png",
    "la page d'accueil d'un site de blog avec une image de raton laveur",
    "https://github.com/solena8/not_safe_for_raccoons_miccrobloging"
  ),
  new Projet(
    "Extension Navigateur",
    [
      "Projet d'école | 2 semaines | 3 personnes",
      "Développement d'une extension pour navigateur permettant de gérer des favoris par catégorie",
      "TypeScript, HTML, CSS, JavaScript",
    ],
    "extension.png",
    "les impressions d'écran d'une extension de navigateur qui permet de censurer des mots",
    "https://github.com/solena8/extension_navigateur-trigger_words"
  ),
  new Projet(
    "Plateforme de Vente de Meubles",
    [
      "Projet d'école | 2 sprints | 6 personnes",
      "Site e-commerce de meubles avec API REST",
      "Changement d'équipe entre sprints",
      "Angular, TypeScript, PHP, Symfony",
    ],
    "fox.png",
    "une illustration de renard",
    "https://github.com/solena8/plateforme_vente_meubles_drymss"
  ),
  new Projet(
    "SoJuDri - Datavisualisation",
    [
      "Projet d'école | 2 semaines | 3 personnes",
      "Visualisation interactive de l'indice GINI mondial",
      "Utilisation de cartes et treemaps",
      "HTML, CSS, JavaScript, amCharts, RESTCountries API",
    ],
    "sojudri.png",
    "une page de siite avec une carte du monde avec différentes couleurs selon le spays selon leur indice GINI",
    "https://github.com/solena8/SoJuDri_GINI_dataviz_project"
  ),
];

export default codeProjets;
