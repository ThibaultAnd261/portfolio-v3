---
title: "SnipesPOC"
description: "Proof of Concept pour optimiser la gestion des demandes en magasin Snipes"
objectif: "Valider la faisabilité technique d'une solution interne de gestion des stocks en temps réel"
image: "/projets/snipespoc.png"
cover: "/projets/snipespoc.svg"
gradient: "linear-gradient(180deg, #9A4B3F 0%, #1A1614 100%)"
date: 2024-03-10
technos: ["React.js", "AdonisJS", "MySQL", "Bruno API"]
collaborateurs:
  - nom: "Axel Bergevin (Keyholder SNIPES)"
    lien: "https://www.linkedin.com/in/axel-bergevin-777a99231/"
github: "https://github.com/ThibaultAnd261/snipesApp"
statut: "Terminé"
---

## Présentation

Ce projet est un Proof of Concept proposé par un manager travaillant chez Snipes, visant à répondre à des besoins concrets en magasin.

L’objectif était de fluidifier la communication entre les vendeurs en surface de vente et les équipes en stock (runners), notamment lorsque certains articles ne sont pas disponibles en rayon.

L’application permet aux vendeurs de scanner un QR code associé à un produit afin de récupérer automatiquement ses informations (taille, pointure, référence, etc.), puis de soumettre une demande de disponibilité.  
Cette demande est ensuite transmise en temps réel aux équipes en réserve, qui peuvent la visualiser et y répondre via un tableau de bord dédié.

Le projet a été développé en architecture monorepo avec React.js pour le front-end et AdonisJS pour le back-end.

## Objectifs

- Améliorer la réactivité des équipes en magasin  
- Réduire le temps de traitement des demandes produits  
- Automatiser la récupération des informations produit via QR code  
- Tester la mise en place d’une communication temps réel entre vendeurs et stock  

## Fonctionnalités

- Authentification des employés selon leur magasin et leur identifiant  
- Soumission de demandes de disponibilité produit par les vendeurs  
- Scan de QR code contenant des données JSON pour préremplir automatiquement les formulaires  
- Tableau de bord en temps quasi réel pour les équipes en stock (runners)  
- Suivi et gestion des demandes en cours  
