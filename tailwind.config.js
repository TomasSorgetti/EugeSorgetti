module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        banner: "#0F0F0F",
        background1: "#F2EFE8",
        background2: "#ffffff",
        darkText: "#000000",
        lightText: "#747474",
        thirdtext: "#b3b3b3",
        verde: "#339B84",
        rosa: "#FD0078",
        fuxia: "#E80DCA",
        violeta: "#4D1B69",
      },
      fontFamily: {
        epilogue: ["Epilogue"],
        estrato: ["estratto-variable"],
        days: ["Days One"],
        bai: ["Bai Jamjuree"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl":"1800px"
      },
    },
  },
  plugins: [],
};
