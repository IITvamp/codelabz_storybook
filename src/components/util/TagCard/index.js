import React from "react";
import Typography from "@material-ui/core/Typography";
import { Chip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import useStyles from "./styles";

const TagCard = ({
  textColor = "black",
  CardName,
  ListItemArray = ["Javascript", "React", "HTML", "CSS"],
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.sideCard}
      alignContent="center"
      direction="column"
      style={{
        width: "100%",
        overflow: "auto",
        maxHeight: "25rem",
        borderRadius: "10px",
      }}
      data-testId="homepageTagSidebar"
    >
      <Grid item>
        <br />
        <Typography
          variant="h6"
          gutterBottom
          style={{ marginBottom: "1rem", color: { textColor } }}
        >
          {CardName}
        </Typography>
      </Grid>
      <Grid container alignItems="left">
        <List
          component="nav"
          aria-label="mailbox folders"
          style={{ width: "100%" }}
        >
          {ListItemArray.map((item) => {
            return (
              <ListItem button className={classes.TagsListitem} style={{}}>
                <ListItemText primary={item} />
              </ListItem>
            );
          })}
          <Chip
            label={"See All"}
            style={{
              width: "80%",
              backgroundColor: "#D0BCFF",
              marginLeft: "10%",
            }}
          ></Chip>
        </List>
      </Grid>
    </Grid>
  );
};

export default TagCard;
