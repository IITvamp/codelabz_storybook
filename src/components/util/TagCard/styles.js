import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

  TagsListitem: {
    borderRadius: "20px",
    border: "2px solid #79747E",
    padding: "2px 10px",
    margin: "auto",
    width: "80%",
    marginBottom: "10px",
  },
  sideCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    maxHeight: "35rem",
    margin: "0 0 2rem 0",
    background: "white",
    boxShadow: ".5px 2px 5px gray",
  },
  
}));

export default useStyles;
