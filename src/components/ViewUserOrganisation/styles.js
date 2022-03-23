import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
    marginTop: "10rem",
  },
  title: {
    marginBottom: "2rem",
  },
  subtitle: {
    fontSize: "10px",
  },
  location: {
    marginTop: "8px",
    fontSize: "12px",
  },
  tags: {
    marginTop: "10px",
  },
  mainContent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: "30px",
    marginLeft: "30px",
    paddingRight: "30px",
    zIndex: 1,
  },
  searchBox: {
    right: "0",
    fex: "0.8",
  },
  userPosts: {
    position: "absolute",
    top: "130%",
    left: "25%",
    translateX: "-50%",
    textAlign: "center",
  },
}));

export default useStyles;
