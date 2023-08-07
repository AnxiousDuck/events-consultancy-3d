module.exports = {
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: '#cb77e5',

  //         secondary: '#7d21a8',

  //         accent: '#10a82a',

  //         neutral: '#201f28',

  //         'base-100': '#f4f5fa',

  //         info: '#62bef4',

  //         success: '#108951',

  //         warning: '#f6c96f',

  //         error: '#dc3848',
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {
      fontFamily: {
        chakp: ['Chakra Petch', 'sans-serif'],
        dmono: ['Dm Mono', 'sans-serif'],
        spg: ['Space Grotesk', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        pacifico: ['Pacifico', 'serif'],
      },
    },
  },

  content: ['./src/routes/**/*.{svelte,js,ts}'],
  plugins: [require('daisyui')],
};

// font-family: 'Swiss 721', sans-serif;

// font-family: 'Chakra Petch', sans-serif;
// font-family: 'DM Mono', monospace;
// font-family: 'Gasoek One', sans-serif;
// font-family: 'Hanken Grotesk', sans-serif;
// font-family: 'Kanit', sans-serif;
// font-family: 'Orbit', sans-serif;
// font-family: 'Poppins', sans-serif;
// font-family: 'Sora', sans-serif;
// font-family: 'Space Grotesk', sans-serif;
