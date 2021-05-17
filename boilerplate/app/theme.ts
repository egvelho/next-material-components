import app from "app.json";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

export default createMuiTheme({
  palette: {
    primary: {
      main: app.primaryColor,
    },
    secondary: {
      main: app.secondaryColor,
    },
    background: {
      default: app.backgroundColor,
    },
  },
});
