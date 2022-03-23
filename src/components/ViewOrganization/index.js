import React, { useEffect, useState } from "react";
import noImageAvailable from "../assets/images/logosamsung.png";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
// import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createTheme } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import LinkIcon from "@material-ui/icons/Link";
import FlagIcon from "@material-ui/icons/Flag";
import useStyles from "./styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@material-ui/core";
import { RowingOutlined } from "@material-ui/icons";

const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#455a64",
    },
  },
});

function createData(name, username, location, role) {
  return { name, username, location, role };
}

const rows = [
  createData(
    "Ekaterina Tankova",
    "@IITvamp",
    "Parkersburg, West Virginia, USA",
    "Owner"
  ),
  createData(
    "Ekaterina Tankova",
    "@IITvamp",
    "Parkersburg, West Virginia, USA",
    "Owner"
  ),
  createData(
    "Ekaterina Tankova",
    "@IITvamp",
    "Parkersburg, West Virginia, USA",
    "Owner"
  ),
  createData(
    "Ekaterina Tankova",
    "@IITvamp",
    "Parkersburg, West Virginia, USA",
    "Owner"
  ),
  createData(
    "Ekaterina Tankova",
    "@IITvamp",
    "Parkersburg, West Virginia, USA",
    "Owner"
  ),
  createData(
    "Ekaterina Tankova",
    "@IITvamp",
    "Parkersburg, West Virginia, USA",
    "Owner"
  ),
  createData(
    "Ekaterina Tankova",
    "@IITvamp",
    "Parkersburg, West Virginia, USA",
    "Owner"
  ),
];

const ViewOrganization = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Card className="p-0">
        <div>
          <Box mt={2} mb={2} m={3}>
            <Grid container>
              <Grid xs={12} md={3} lg={3} item={true}>
                <img
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                  src={noImageAvailable}
                  alt={"Not Available"}
                  className="org-image"
                />
              </Grid>

              <Grid
                xs={12}
                md={9}
                lg={9}
                className="pl-24-d pt-24-m"
                item={true}
                style={{
                  fontSize: "1.3em",
                  fontWeight: "bold",
                  textAlign: "center",
                  padding: "0px 30px 0px 30px",
                }}
              >
                <Divider></Divider>
                <p
                  style={{
                    fontSize: "1.3em",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  <span>Samsung</span>
                </p>
                <p className="text-justified">
                  Samsung Electronics Co., Ltd. is a South Korean multinational
                  electronics company headquartered in Suwon, South Korea. It is
                  the pinnacle of the Samsung chaebol, accounting for 70% of the
                  group's revenue in 2012. Samsung Electronics has played a key
                  role in the group's corporate governance due to circular
                  ownership.
                </p>
                <Grid row>
                  <Grid item>
                    <p>
                      <a
                        href={
                          "https://www.facebook.com/SamsungIndia/?brand_redir=320457698033009"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <FacebookIcon
                            fontSize="small"
                            className="facebook-color"
                          />{" "}
                          {"SamsungLanka"}
                        </div>
                      </a>
                    </p>
                    <p>
                      <a
                        href={
                          "https://www.facebook.com/SamsungIndia/?brand_redir=320457698033009"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <TwitterIcon
                            fontSize="small"
                            className="twitter-color"
                          />{" "}
                          {"SamsungLanka"}
                        </div>
                      </a>
                    </p>
                    <p>
                      <a
                        href={
                          "https://www.facebook.com/SamsungIndia/?brand_redir=320457698033009"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <GitHubIcon
                            fontSize="small"
                            className="github-color"
                          />{" "}
                          {"SamsungLanka"}
                        </div>
                      </a>
                    </p>
                  </Grid>
                  <Grid item>
                    <p>
                      <a
                        href={
                          "https://www.facebook.com/SamsungIndia/?brand_redir=320457698033009"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <LinkedInIcon
                            fontSize="small"
                            className="linkedin-color"
                          />{" "}
                          {"SamsungLanka"}
                        </div>
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.facebook.com/SamsungIndia/?brand_redir=320457698033009"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <LinkIcon
                            fontSize="small"
                            className="website-color"
                          />{" "}
                          {"SamsungLanka"}
                        </div>
                      </a>
                    </p>
                    <p className="mb-0">
                      <a
                        href={
                          "https://www.facebook.com/SamsungIndia/?brand_redir=320457698033009"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div
                          style={{
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <FlagIcon
                            fontSize="small"
                            className="website-color"
                          />{" "}
                          {"SamsungLanka"}
                        </div>

                        <div>
                          <Button
                            variant="contained"
                            style={{ marginTop: "1rem" }}
                          >
                            follow
                          </Button>
                        </div>
                      </a>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Card>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        style={{ right: 0, width: "30%" }}
        className={classes.searchBox}
      >
        <TextField
          id="outlined-basic"
          label="Search Users"
          variant="outlined"
          style={{ width: "90%" }}
        />
      </Box>
      <Box mt={2} mb={2} m={3} data-testId="orgUserCard">
        <p
          style={{
            fontSize: "1.3em",
            fontWeight: "bold",
            textAlign: "center",

          }}
        >
          <span>Org Users</span>
        </p>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead style={{backgroundColor:"f3f4f6"}}>
              <TableRow>
                <TableCell align="left">NAME</TableCell>
                <TableCell align="center">USERNAME</TableCell>
                <TableCell align="center">LOCATION</TableCell>
                <TableCell align="center">ROLE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={RowingOutlined.image} />
                      </ListItemAvatar>
                      <ListItemText primary={row.name} />
                    </ListItem>
                  </TableCell>
                  <TableCell align="center">{row.username}</TableCell>
                  <TableCell align="center">{row.location}</TableCell>
                  <TableCell align="center">{row.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};

export default ViewOrganization;
