import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: "2rem",
  },
  subtitle: {
    fontSize: "10px",
  },
  typedContainer: {
    position: "realtive",
    width: "50%",
    height: "100%",
    textAlign: "left",
    zIndex: 1,
  },
  mainContent: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
    width: "100%",
  },
  orgheading: {
    fontSize: "20px",
  },
  aboutOrg: {
    position: "relative",
    top: "-70px",
    width: "60%",
    margin: "0px 3%",
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "10%",
  },
  daysdot: {
    height: "0.1rem",
    width: "0.1rem",
    position: "relative",
    left: "1rem",
    border: "1px solid black",
    borderRadius: "500px",
  },
  avatar: {
    height: "2rem",
    width: "2rem",
    position: "relative",
    border: "1.5px solid black",
    borderRadius: "500px",
    left:0,
  },
}));

export default useStyles;
