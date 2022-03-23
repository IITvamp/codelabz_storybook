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
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    height: "100%",
    textAlign: "center",
    zIndex: 1,
  },
  location: {
    marginTop: "8px",
    fontSize: "12px",
  },
  tags: {
    marginTop: "10px",
  },
  mainContent: {
    position: "absolute",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    top: "110%",
    width: "100vw",
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
