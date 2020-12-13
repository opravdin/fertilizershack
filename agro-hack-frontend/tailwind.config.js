module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "bar": "60px"
      },
      borderWidth: {
        "point": "6px"
      },
      colors: {
        "appbg": "#f4f7f9",
        "appmenuactive": "#21D3EB",
        "appmenu": "#D8D8D8",
        "appmapmarker": "#21D3EB",
        "appmapoptionbest": "#FFCE50",
        "appmapoption": "#21D3EB",
        "appdivider": "#E9EEF1",
        "apppagetitle": "#383838",
        "appfilter": "#A5ABCC"
      },
      boxShadow: {
        "block": "0px 4px 4px rgba(111, 135, 238, 0.3)",
        "side": "0px 0px 4px rgba(111, 135, 238, 0.3)",
        "bottom": "0px 1px 4px -2px rgba(111, 135, 238, 0.15)",
        "card": "0px 2px 10px rgba(111, 135, 238, 0.1)",
        "mappoint": "0px 2px 6px rgba(33, 211, 235, 0.25)",
        "tag": "0px 0px 4px rgba(111, 135, 238, 0.15)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
