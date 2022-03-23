import React, { useState, useEffect, useCallback } from "react";
// import countryList from "../../../helpers/countryList";
// import {
//   validateName,
//   validateCountry,
//   validateOrgWebsite,
//   validateIsEmpty,
// } from "../../../helpers/validations";
// import { useDispatch, useSelector } from "react-redux";
// import { useFirebase, useFirestore } from "react-redux-firebase";
// import {
//   updateUserProfile,
//   clearProfileEditError,
// } from "../../../store/actions";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
// import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControl from "@material-ui/core/FormControl";
// import InputLabel from "@material-ui/core/InputLabel";
// import Alert from "@material-ui/lab/Alert";
import PersonIcon from "@material-ui/icons/Person";
import PublicIcon from "@material-ui/icons/Public";
import DescriptionIcon from "@material-ui/icons/Description";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const EditProfileDetailsModal = () => {
  return (
    <Grid id="editModalBox">
      <Box m={2}>
        <TextField
          label="Password"
          variant="outlined"
          placeholder="Password"
          data-testId="passwordfield"
          fullWidth
          required
          style={{ marginBottom: "15px" }}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <PersonIcon style={{ color: "rgba(0,0,0,.25)" }} />
          //     </InputAdornment>
          //   ),
          // }}
        />
      </Box>

      <Box m={2}>
        <TextField
          label="Confirm Password"
          variant="outlined"
          placeholder="Confirm Password"
          data-testId="confirmpasswordfield"
          fullWidth
          required
          style={{ marginBottom: "15px" }}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <PersonIcon style={{ color: "rgba(0,0,0,.25)" }} />
          //     </InputAdornment>
          //   ),
          // }}
        />
      </Box>

      <Box
        mt={0}
        mb={4}
        m={1}
        style={{
          right: "0",
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "SeaGreen",
            right: "0",
          }}
          data-testId="editProfileSave"
        >
          Save
        </Button>
      </Box>

      {/* <Box m={2}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            label="Country"
            children={children}
            style={{ width: "100%" }}
            value={country}
            onChange={(event) => onChangeCountry(event.target.value)}
          ></Select>
        </FormControl>
      </Box> */}

      <Box m={2}>
        <TextField
          label="Display Name"
          variant="outlined"
          placeholder="Display Name"
          value={"Ayush Bansal"}
          data-testId="editProfileName"
          fullWidth
          autoComplete="handle"
          required
          style={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon style={{ color: "rgba(0,0,0,.25)" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box mt={4} mb={3} m={2}>
        <TextField
          label="Website"
          variant="outlined"
          placeholder="Website"
          data-testId="editProfileWebsite"
          fullWidth
          autoComplete="orgWebsite"
          required
          style={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PublicIcon style={{ color: "rgba(0,0,0,.25)" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box m={2}>
        <TextField
          label="Description"
          multiline
          variant="outlined"
          placeholder="Description"
          data-testId="editProfileDescription"
          fullWidth
          autoComplete="description"
          required
          style={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionIcon style={{ color: "rgba(0,0,0,.25)" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box m={2}>
        <TextField
          label="Facebook"
          variant="outlined"
          placeholder="username"
          data-testId="editProfileFacebook"
          fullWidth
          autoComplete="handle"
          required
          style={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FacebookIcon style={{ color: "rgba(0,0,0,.25)" }} />
                <p style={{ margin: "15px 0px 15px 8px", color: "grey" }}>
                  facebook.com/
                </p>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box m={2}>
        <TextField
          label="Twitter"
          variant="outlined"
          placeholder="username"
          data-testId="editProfileTwitter"
          fullWidth
          autoComplete="handle"
          required
          style={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TwitterIcon style={{ color: "rgba(0,0,0,.25)" }} />
                <p style={{ margin: "15px 0px 15px 8px", color: "grey" }}>
                  twitter.com/
                </p>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box m={2}>
        <TextField
          label="LinkedIn"
          variant="outlined"
          data-testId="editProfileLinkedin"
          placeholder="username"
          fullWidth
          autoComplete="handle"
          required
          style={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkedInIcon style={{ color: "rgba(0,0,0,.25)" }} />
                <p style={{ margin: "15px 0px 15px 8px", color: "grey" }}>
                  linkedin.com/in/
                </p>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box m={2}>
        <TextField
          label="GitHub"
          variant="outlined"
          placeholder="username"
          fullWidth
          data-testId="editProfileGithub"
          autoComplete="handle"
          required
          style={{ marginBottom: "15px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GitHubIcon style={{ color: "rgba(0,0,0,.25)" }} />
                <p style={{ margin: "15px 0px 15px 8px", color: "grey" }}>
                  github.com/
                </p>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <Box
        mt={0}
        mb={4}
        m={1}
        style={{
          right: "0",
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "SeaGreen",
            right: "0",
          }}
          data-testId="editProfileSave"
        >
          Save
        </Button>
      </Box>
    </Grid>
  );
};

export default EditProfileDetailsModal;
