#!/bin/bash

# Installation des dépendances
npm install -D tailwindcss postcss autoprefixer

# Crée le fichier de config Tailwind
npx tailwindcss init

# Contenu du fichier de configuration
cat << EOF > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF

# Met à jour le fichier style.css global
cat << EOF > src/styles.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# Remplace le contenu du boilerplate app.component.html
echo "<h1 class='text-4xl'>Hello Angular !</h1>" > src/app/app.component.html

