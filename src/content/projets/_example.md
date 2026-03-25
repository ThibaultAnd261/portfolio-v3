---
# ============================================================
# EXEMPLE DE FICHIER PROJET
# Renommer ce fichier sans le _ pour l'utiliser (ex: mon-projet.md)
# Le nom du fichier = le slug dans l'URL (/projet/mon-projet)
# ============================================================

# --- CHAMPS OBLIGATOIRES ---

title: "Nom du projet"                   # Titre affiché en hero et dans le carousel
description: "Courte description"         # Texte affiché sur la carte du carousel
image: "/projets/mon-image.svg"           # Chemin vers l'image (depuis /public)
date: 2024-06-15                          # Date du projet (format YYYY-MM-DD)
technos: ["React", "Node.js", "MongoDB"]  # Liste des technologies utilisées

# --- CHAMPS OPTIONNELS ---

objectif: "Phrase décrivant l'objectif"   # Affiché en italique sous le hero (citation)
gradient: "linear-gradient(180deg, #D4A574 0%, #B8654D 100%)"  # Fond du carousel (si pas d'image visible)
lien: "https://monprojet.com"             # Lien vers le projet en ligne
github: "https://github.com/user/repo"   # Lien vers le repo GitHub
statut: "Terminé"                         # "Terminé" (defaut) | "En cours" | "Concept"
collaborateurs:                           # Liste des collaborateurs (optionnel)
  - nom: "Alice Martin"
    lien: "https://github.com/alice"      # Lien optionnel pour chaque collaborateur
  - nom: "Bob Dupont"                     # Collaborateur sans lien
---

## Contenu Markdown libre

Tout ce qui se trouve sous le frontmatter (---) est du **Markdown** rendu dans la section principale de la page projet.

### Sous-sections

Utiliser des titres `##` et `###` pour structurer le contenu.

- Listes a puces
- **Texte en gras**, *italique*
- `code inline`
- [Liens](https://example.com)
