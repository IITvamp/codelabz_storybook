import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const GlobalAvatar = ({ imgsrc = "demoperson4.jpeg", title = "Demo Name" }) => {
  const classes = useStyles();
  return (
    <CardHeader
      data-testId="codelabzCardHeader"
      className={classes.cardHeader}
      avatar={
        <img
          src={require(`../../assets/images/${imgsrc}`).default}
          alt=""
          className={classes.avatar}
        />
      }
          title={<Typography variant="body">{title}</Typography>}
      titleTypographyProps={{ align: "left" }}
    />
  );
};

export default GlobalAvatar;
