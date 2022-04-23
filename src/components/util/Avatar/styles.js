import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "2rem",
    width: "2rem",
    position: "relative",
    border: "1.5px solid black",
    borderRadius: "500px",
    left: "0",
  },
  cardHeader: {
    padding: "1rem 1rem 0rem 1rem",
  },
}));

export default useStyles;
