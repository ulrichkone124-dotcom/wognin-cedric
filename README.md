# Site vitrine : Wognin Cédric, ingénieur structure

Site vitrine personnel présentant le parcours, les services, les compétences, les projets et les réalisations (images et vidéos 3D) de Wognin Cédric, professionnel du bâtiment spécialisé en dimensionnement de structures (béton armé, métallique, mixte).

**Site en ligne :** https://wognin-cedric.vercel.app

## Fonctionnalités

- Page d'accueil avec présentation, statistiques animées et téléchargement du CV (PDF)
- Services, compétences techniques et chiffres clés
- Timeline des expériences professionnelles et des projets réalisés
- Vitrine défilante d'images et de vidéos 3D
- Formulaire de contact via WhatsApp, e-mail et LinkedIn
- Navigation responsive (menu adaptatif sur mobile)
- Animations d'apparition au défilement, désactivées automatiquement si l'utilisateur a choisi de réduire les mouvements

## Technologies

- HTML5
- CSS3 et [Bootstrap 5.3](https://getbootstrap.com) pour la grille et les composants
- JavaScript (vanilla, sans framework)
- [Font Awesome 6](https://fontawesome.com) pour les icônes
- Polices [Syne](https://fonts.google.com/specimen/Syne) (titres) et [Manrope](https://fonts.google.com/specimen/Manrope) (texte)

## Structure du projet

```
wognin-cedric/
├── index.html            # Structure et contenu de la page
├── style.css             # Styles, thème et adaptation mobile
├── script.js             # Interactions : navbar, animations, compteurs
├── CV-Wognin-Cedric.pdf  # CV téléchargeable
├── Image *.png / *.jpg   # Photos et images 3D
└── *.mp4                 # Vidéos 3D
```

## Lancer le site en local

Aucune installation n'est nécessaire. Il suffit d'ouvrir `index.html` dans un navigateur.

Pour un rendu identique à la mise en ligne, utilise un serveur local, par exemple avec l'extension **Live Server** de VS Code, ou la commande suivante depuis le dossier du projet :

```bash
python -m http.server 8000
```

Puis ouvre `http://localhost:8000`.

## Personnaliser le contenu

- **Textes, expériences, projets** : modifie directement `index.html`, dans les sections correspondantes (`#accueil`, `#expertise`, `#projets`, `#contact`, etc.).
- **Couleurs, polices, ombres** : modifie les variables dans le bloc `:root` de `style.css` (`--accent`, `--bg`, `--font-display`, `--font-body`, etc.).
- **Ajouter une image ou une vidéo** : place le fichier dans le dossier, puis ajoute une `<figure class="media-card">` dans la section `#realisations`.
- **Remplacer le CV** : remplace `CV-Wognin-Cedric.pdf` par la nouvelle version, en gardant le même nom.

## Conseils pour les médias

- Garde les vidéos sous **10 Mo** chacune pour un chargement rapide sur mobile (encodage H.264, résolution 854 px ou 1280 px).
- Les noms de fichiers doivent correspondre exactement à ceux du HTML, y compris les majuscules et les espaces.

## Déploiement

Le site est déployé automatiquement sur **Vercel** à chaque `push` sur la branche `main`.

```bash
git add .
git commit -m "Description de la modification"
git push origin main
```

Vercel redéploie le site en une à deux minutes.

## Auteur

**Wognin Cédric**, professionnel du bâtiment (ingénieur structure).
Contact : wognincedric@gmail.com · [LinkedIn](https://www.linkedin.com/in/cedric-wognin-5b991a309)

Site réalisé par UlrichDev.

## Licence

Tous droits réservés. Le contenu (textes, images, vidéos, CV) appartient à Wognin Cédric et ne peut être réutilisé sans autorisation.
