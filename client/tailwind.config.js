/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark", 
    base: true, 
    styled: true, 
    utils: true, 
    rtl: false,
    prefix: "",
    logs: true, 
    themes: [
      "light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro",
      "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy",
      "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
      "night", "coffee", "winter", 
      {
        mytheme: {
          "primary": "#13991c",       
          "secondary": "#f934c5",
          "accent": "#ac8ef9",
          "neutral": "#24252e",
          "base-100": "#3d3c3e",
          "info": "#133eec",
          "success": "#21caa0",
          "warning": "#9f6809",
          "error": "#e85971",
        },
      }
    ]
  },
}

