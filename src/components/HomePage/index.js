import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardComponent from "../util/CodelabCard/index";
import Typography from "@material-ui/core/Typography";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Chip } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { Checkbox } from "@material-ui/core";
// import ListItemButton from "@material-ui/core/ListItemButton";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import { userList } from "./userList";
import useStyles from "./styles";

function HomePage({ background = "white", textColor = "black" }) {
  const classes = useStyles();
  const [value, setValue] = useState(2);
  // const trendingTags = ["javascript", "react", "html", "css"];
//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  return (
    <Card
      className={classes.wrapper}
      style={{ background: background }}
      data-testId="homepage"
    >
      <div className={classes.sideBody}>
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
            padding: "10px",
          }}
          data-testId="homepageTagSidebar"
        >
          <Grid item>
            <br />
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "1rem", color: textColor }}
            >
              Codelabz is a community of millions amazing developers
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              style={{
                margin: "2rem 0rem 1rem 0rem",
                color: textColor,
                fontSize: "1rem",
              }}
            >
              We're a place where coders share, stay up-to-date and grow their
              careers.{" "}
            </Typography>
            <Chip
              label={"Log In"}
              style={{
                width: "90%",
                backgroundColor: "#D0BCFF",
                margin: "5%",
              }}
            ></Chip>
            <Chip
              label={"Sign Up"}
              style={{
                width: "90%",
                backgroundColor: "#FFF",
                margin: "5%",
              }}
            ></Chip>
          </Grid>
        </Grid>

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
              style={{ marginBottom: "1rem", color: textColor }}
            >
              Trending
            </Typography>
          </Grid>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{ width: "100%" }}
            >
              <ListItem button className={classes.TagsListitem}>
                <ListItemText primary="javascript" />
              </ListItem>
              <ListItem button className={classes.TagsListitem}>
                <ListItemText primary="react" />
              </ListItem>
              <ListItem button className={classes.TagsListitem}>
                <ListItemText primary="html" />
              </ListItem>
              <ListItem button className={classes.TagsListitem}>
                <ListItemText primary="css" />
              </ListItem>
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
          data-testId="homepagePopularEventSidebar"
        >
          <Grid item>
            <br />
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "1rem", color: textColor }}
            >
              Popular Events
            </Typography>
          </Grid>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{ width: "100%" }}
            >
              <ListItem button className={classes.listitem}>
                <ListItemText primary="Lorem Pervious Text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="Lorem Pervious Text Event" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="Lorem Pervious Text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="Lorem Pervious Text Previous Event" />
              </ListItem>
              <Chip
                label={"See All"}
                style={{
                  width: "90%",
                  backgroundColor: "#D0BCFF",
                  marginLeft: "5%",
                }}
              ></Chip>
            </List>
          </Grid>
        </Grid>
      </div>
      <div className={classes.mainBody} data-testId="homepageMainBody">
        <Grid container className={classes.sort}>
          <BottomNavigation
            showLabels
            className={classes.sortedList}
            value={value}
            // onChange={handleChange}
            data-testId="sortByTime"
          >
            <BottomNavigationAction label="Week" />
            <BottomNavigationAction
              label="Month"
              style={{ fontSize: "2rem" }}
            />
            <BottomNavigationAction label="Year" />
            <BottomNavigationAction label="Latest" />
          </BottomNavigation>
        </Grid>

        {userList.persons.map((person) => (
          <CardComponent
            title={person.title}
            tags={person.tags}
            profilePic={person.profilePic}
            org={person.org}
          />
        ))}
      </div>
      <div className={classes.sideBody}>
        <Grid
          container
          className={classes.sideCard}
          alignContent="center"
          direction="column"
          style={{ padding: "1rem", borderRadius: "10px" }}
          data-testId="homepageUpcomingEventSidebar"
        >
          <Grid item>
            <Typography
              variant="h6"
              gutterBottom
              style={{ marginBottom: "1rem", color: textColor }}
            >
              Upcoming Events
            </Typography>
          </Grid>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{
                width: "100%",
                overflow: "auto",
                maxHeight: "25rem",
              }}
            >
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <Chip
                label={"See All"}
                style={{
                  width: "90%",
                  backgroundColor: "#D0BCFF",
                  marginLeft: "5%",
                }}
              ></Chip>
            </List>
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.sideCard}
          alignContent="center"
          direction="column"
          style={{ padding: "1rem", borderRadius: "10px" }}
          data-testId="homepageDiscussionSidebar"
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginBottom: "1rem", color: textColor }}
          >
            Discussion
          </Typography>
          <Grid container alignItems="left">
            <List
              component="nav"
              aria-label="mailbox folders"
              style={{
                width: "100%",
                overflow: "auto",
                maxHeight: "25rem",
                color: textColor,
              }}
            >
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <ListItem button className={classes.listitem}>
                <ListItemText primary="lorem lorem text lorem text text lorem text lorem text" />
              </ListItem>
              <Chip
                label={"See All"}
                style={{
                  width: "90%",
                  backgroundColor: "#D0BCFF",
                  marginLeft: "5%",
                }}
              ></Chip>
            </List>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
}

export default HomePage;
