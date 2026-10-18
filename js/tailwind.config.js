// ==========================================================
// This file sets our own custom colors and fonts for Tailwind
// (We are using the Tailwind CDN version, so config lives here
// instead of a tailwind.config.js used in a normal build setup)
// ==========================================================
tailwind.config = {
  theme: {
    extend: {
      // Custom color names — used everywhere in the site instead of default Tailwind colors
      colors: {
        primary: "#c19d6c", // golden accent color (used in headings and buttons)
        dark: "#1c1c1c", // dark color for header/footer background
        cream: "#faf7f2", // light background color for the page
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"], // font used for big headings
        body: ["Poppins", "sans-serif"], // font used for normal text
      },
    },
  },
};
