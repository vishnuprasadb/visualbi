import { createMuiTheme } from "@material-ui/core/styles";

const blue = "rgba(2, 167, 240, 0.98)";
const darkblue = "#1645F5";
const red = "rgba(220, 20, 60, 0.98)";
const lightblue = "#3FA9F1";
const brown = "#91795B";
const lightbrown="#90795afe"
const black = "#000000";
const lightgray = "rgba(215, 215, 215, 0.98)";
const primaryblue = "#0033FF";
const white="#ffffff";

export default createMuiTheme({
  palette: {
    common: {
      white:`${white}`,
      blue:`${blue}`
    },
    primary: {
      main: `${primaryblue}`,
    },
  },
});