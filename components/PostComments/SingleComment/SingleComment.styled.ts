import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    borderRadius: "5px",
    padding: spacing(3),
    width: "100%",
    height: "100%",
    backgroundColor: "f9f9f9",
  },
}));
