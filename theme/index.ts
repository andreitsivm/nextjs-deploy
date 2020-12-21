import { Theme, createMuiTheme } from "@material-ui/core/styles";

const theme: Theme = createMuiTheme({
  props: {
    MuiButton: {
      color: "inherit",
    },
  },
});

export default theme;
