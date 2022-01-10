module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      background: "#F2F0F9",
      priFontCont: "#25213B",
      secFontColor: "#6E6893",
      active: "#4A4AFF",
      paid: "#007F00",
      lightPaid: "#CDFFCD",
      unpaid: "#965E00",
      lightUnpaid:"#FFECCC",
      overdue: "#D30000",
      lightOverdue:"#FFE0E0",
      btnPri: "#6D5BD0",
      white: "#FFFFFF",
      border: "#C6C2DE",
      input: "#F4F2FF",
      acBg: "#E6E6F2",
      proBorder: "#D9D5EC",
    },
    extend: {
      padding: {
        "7px": "7px",
        "10px": "10px",
        "11px": "11px",
        "17px": "17px",
        "30px": "30px",
        "50px": "50px",
        "100px": "100px",
      },
      height: {
        "10%": "10%",
        '30%':'30%',
      },
      boxShadow: {
        mainBox: "0px 0px 5px rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: [],
};
