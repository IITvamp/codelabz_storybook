import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardComponent from "../util/CodelabCard/index";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Chip } from "@material-ui/core";
import { Avatar, CardHeader, CardMedia, CardContent } from "@material-ui/core";

import Box from "@material-ui/core/Box";
import Footer from "../Footer/index";
import icon1 from "../assets/images/Icon1.png";
import HomePageOrg from "../assets/images/HomePageOrg.png";

function MyFeed() {
  const classes = useStyles();
  // const profilePic = "demoperson4.jpeg";
  return (
    <div style={{ padding: "5% 10%" }}>
      <Box style={{ width: "100%", marginBottom: "80px" }}>
        <Box className={classes.typedContainer}>
          <Typography className={classes.subtitle} variant="h1">
            F E A T U R E S
          </Typography>
          <Typography className={classes.title} variant="h4">
            We are providing suitable features for students.
          </Typography>
          <Typography className={classes.subtitle} variant="h1">
            Read our awesome feature that is absolutely suit for you.
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="h1"
            style={{ marginBottom: "30px" }}
          >
            Explore the feature and know the best.
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={4}>
            <Box>
              <img
                src={icon1}
                style={{
                  borderRadius: "5px",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Box style={{ width: "90px" }}>
                <Typography
                  className={classes.orgheading}
                  variant="h2"
                  style={{ margin: "10px 0px 40px 0px" }}
                >
                  Organizations
                </Typography>
                <Typography className={classes.subtitle} variant="h1">
                  Lot of Organizations that help you to build your carreer
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box>
              <img
                src={icon1}
                style={{
                  borderRadius: "5px",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Box style={{ width: "90px" }}>
                <Typography
                  className={classes.orgheading}
                  variant="h2"
                  style={{ margin: "10px 0px 40px 0px" }}
                >
                  Organizations
                </Typography>
                <Typography className={classes.subtitle} variant="h1">
                  Lot of Organizations that help you to build your carreer
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box>
              <img
                src={icon1}
                style={{
                  borderRadius: "5px",
                  height: "50px",
                  width: "50px",
                }}
              />
              <Box style={{ width: "90px" }}>
                <Typography
                  className={classes.orgheading}
                  variant="h2"
                  style={{ margin: "10px 0px 40px 0px" }}
                >
                  Organizations
                </Typography>
                <Typography className={classes.subtitle} variant="h1">
                  Lot of Organizations that help you to build your carreer
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ width: "100%", marginBottom: "80px" }}>
        <Box className={classes.typedContainer}>
          <Typography className={classes.subtitle} variant="h1">
            O R G A N I S A T I O N S
          </Typography>
          <Typography className={classes.title} variant="h4">
            Popular Organizations
          </Typography>
          <Typography className={classes.subtitle} variant="h1">
            Check out our most poular Organizations that suit for you.
          </Typography>
        </Box>
        <Box className={classes.mainContent}>
          <Box>
            <Typography
              className={classes.subtitle}
              variant="h1"
              style={{ marginBottom: "30px" }}
            >
              Here you can find your favourite one.
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.subtitle}
              variant="h1"
              style={{ marginBottom: "30px" }}
            >
              View More Organization
            </Typography>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <img
                src={HomePageOrg}
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
                  Organizations
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  Samsung Electronics Co., Ltd is a South Korean multinational
                  electronics Comp- any headquartered in Suowon, South Korea
                </Typography>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <img
                src={HomePageOrg}
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
                  Organizations
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  Samsung Electronics Co., Ltd is a South Korean multinational
                  electronics Comp- any headquartered in Suowon, South Korea
                </Typography>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <img
                src={HomePageOrg}
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
                  Organizations
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  Samsung Electronics Co., Ltd is a South Korean multinational
                  electronics Comp- any headquartered in Suowon, South Korea
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ width: "100%", marginBottom: "80px" }}>
        <Box className={classes.typedContainer}>
          <Typography className={classes.subtitle} variant="h1">
            C O U R S E S
          </Typography>
          <Typography className={classes.title} variant="h4">
            Popular Courses
          </Typography>
          <Typography className={classes.subtitle} variant="h1">
            Check out our most poular Courses that suit for you.
          </Typography>
        </Box>
        <Box className={classes.mainContent}>
          <Box>
            <Typography
              className={classes.subtitle}
              variant="h1"
              style={{ marginBottom: "30px" }}
            >
              Here you can find your favourite one.
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.subtitle}
              variant="h1"
              style={{ marginBottom: "30px" }}
            >
              View More Courses
            </Typography>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <img
                src={HomePageOrg}
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
                  Organizations
                </Typography>

                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  Web design from basic to higher level
                </Typography>

                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  <ul>
                    <li>50 lessons</li>
                    <li>3 months</li>
                  </ul>
                </Typography>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <img
                src={HomePageOrg}
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
                  Organizations
                </Typography>

                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  Web design from basic to higher level
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  <ul>
                    <li>50 lessons</li>
                    <li>3 months</li>
                  </ul>
                </Typography>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <img
                src={HomePageOrg}
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
                  Organizations
                </Typography>

                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  Web design from basic to higher level
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="h1"
                  style={{ color: "#9DA6A5" }}
                >
                  <ul>
                    <li>50 lessons</li>
                    <li>3 months</li>
                  </ul>
                </Typography>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box style={{ width: "100%", marginBottom: "80px" }}>
        <Box className={classes.mainContent}>
          <Box>
            <Typography className={classes.title} variant="h4">
              Trending Articles
            </Typography>
          </Box>
          <Box>
            <Typography
              className={classes.subtitle}
              variant="h1"
              style={{ marginBottom: "30px" }}
            >
              View All Articles
            </Typography>
          </Box>
        </Box>
        <Grid container>
          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <Card sx={{ width: "90%" }}>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Title"
                  subheader="SubTitle"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={icon1}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <Card sx={{ width: "90%" }}>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Title"
                  subheader="SubTitle"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={icon1}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={4}>
            <Box style={{ marginRight: "10%" }}>
              <Card sx={{ width: "90%" }}>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  title="Title"
                  subheader="SubTitle"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={icon1}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Footer />
      </Box>
    </div>
  );
}

export default MyFeed;
