import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const OrganizationCard = ({
  imgsrc = "HomePageOrg.png",
  orgname="Samsung",
  orgdesc = "Samsung Electronics Co., Ltd is a South Korean multinational electronics Comp- any headquartered in Suowon, South Korea",
}) => {
    const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={4}>
        <Box style={{ marginRight: "10%" }}>
          <img
            src={require(`../../assets/images/${imgsrc}`).default}
            style={{
              borderRadius: "5px",
              height: "300px",
              width: "90%",
            }}
          />
          <Card className={classes.aboutOrg}>
            <Typography
              className={classes.orgheading}
              variant="h2"
              style={{ marginBottom: "8px" }}
            >
              {orgname}
            </Typography>
            <Typography
              className={classes.subtitle}
              variant="h1"
              style={{ color: "#9DA6A5" }}
            >
              {orgdesc}
            </Typography>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default OrganizationCard;
