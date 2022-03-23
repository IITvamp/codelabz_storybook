import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Chip } from "@material-ui/core";

import CardComponent from "../util/CodelabCard/index";

import { userList } from "../HomePage/userList";

import profilePic from "../assets/images/demoperson4.jpeg";
import useStyles from "./styles";

const Profile = () => {
    const classes = useStyles();
    const tagsArray = ["react", "javascript", "html"];
    return (
      <>
        <Box className={classes.typedContainer}>
          <Grid container justify="center">
            <Avatar
              className={classes.avatar}
              src={profilePic}
              alt="Ayush Bansal"
            />
          </Grid>
          <Typography className={classes.title} variant="h4">
            Demo User
          </Typography>

          <Typography className={classes.subtitle} variant="h1">
            hey i am a demo user from Earth
          </Typography>
          <Typography className={classes.subtitle} variant="h1">
            I am profiecient in MERN stack and designed this page for codelabz
          </Typography>
          <Typography className={classes.location}>India</Typography>
          <Box className={classes.tags}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {tagsArray.map((tag) => {
                return (
                  <Chip
                    variant="body2"
                    color="textPrimary"
                    label={tag}
                    style={{ marginRight: "5px" }}
                  >
                    {tag}
                  </Chip>
                );
              })}
            </Grid>
          </Box>

          <Box className={classes.tags}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              {tagsArray.map((tag) => {
                return (
                  <Chip
                    variant="body2"
                    color="textPrimary"
                    label={tag}
                    style={{ marginRight: "5px" }}
                  >
                    {tag}
                  </Chip>
                );
              })}
            </Grid>
          </Box>
        </Box>
        <Box className={classes.mainContent}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            style={{ right: 0 }}
            className={classes.searchBox}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </Box>
          <Button style={{ textAlign: "start", left: 0 }}>User Posts</Button>
        </Box>
        <Box className={classes.userPosts}>
              {userList.persons.map((person) => (
                <CardComponent
                  title={person.title}
                  tags={person.tags}
                  profilePic={person.profilePic}
                  org={person.org}
                />
              ))}
        </Box>
      </>
    );
};

export default Profile;
