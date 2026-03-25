---
title: "MyReactTemplate"
description: "Template React moderne, typé et prêt pour la production"
objectif: "Fournir un point de départ structuré et opinionné pour tout nouveau projet React"
image: "/projets/templatereact.png"
cover: "/projets/templatereact.svg"
gradient: "linear-gradient(180deg, #61DAFB 0%, #3B82F6 100%)"
date: 2025-11-17
technos: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Query", "React Router", "Vitest"]
lien: "https://example.com/templatereact"
github: "https://github.com/ThibaultAnd261/MyReactTemplate"
statut: "En cours"
---

## Présentation

MyReactTemplate est un template React conçu pour démarrer rapidement n'importe quel projet frontend sans compromis sur la qualité. Il embarque une architecture pensée pour scaler, des conventions de code strictes, et une chaîne d'outils complète — du développement aux tests en passant par le déploiement.

L'objectif est d'éviter de reconfigurer les mêmes outils à chaque nouveau projet tout en conservant les bonnes pratiques : structure en feature modules, client HTTP générique, gestion des erreurs centralisée, et composants accessibles.

## Architecture

Le projet suit deux patterns complémentaires :

- **Atomic Design** pour les composants UI : les briques de base (boutons, typographie, layout) sont regroupées en `atoms`, composables à l'infini.
- **Feature Modules (Vertical Slice)** pour la logique métier : chaque feature est autonome avec ses propres dossiers `api/`, `hooks/`, `ui/` et `types.ts`.

La navigation est générée automatiquement à partir d'une source unique (`routeLinks`), ce qui garantit la cohérence entre les routes React Router et les liens du menu.

## Fonctionnalités

- Routing client avec React Router v6 (routes protégées, error boundaries par route)
- Client HTTP générique typé avec gestion normalisée des erreurs (messages utilisateur / technique)
- Gestion du state serveur avec TanStack Query (cache, retry, refetch automatique)
- Auth store léger via `useSyncExternalStore` (natif React 18+, sans Redux)
- Bibliothèque de composants UI : Button (variants, tailles), Heading, Text, Stack, Grid, Badge, Spinner, Icon...
- Accessibilité intégrée (`VisuallyHidden`, liens actifs, composants sémantiques)
- Tests unitaires et de composants avec Vitest + Testing Library
- Pre-commit automatique : Prettier + ESLint via Husky + lint-staged
- Aliases de chemins configurés (`@app`, `@components`, `@features`...)
- Script de setup pour remplacer les placeholders du template en un coup

## Stack technique

| Catégorie | Outils |
|---|---|
| Framework | React 19, TypeScript 5 (strict) |
| Build | Vite 7 |
| Routing | React Router DOM v6 |
| Data fetching | TanStack React Query v5 |
| Styles | Tailwind CSS v4 |
| Tests | Vitest, Testing Library |
| Qualité | ESLint, Prettier, Husky, lint-staged |
