import React from "react";
import Button from "@material-ui/core/Button";


const GlobalButton = ({
  variant = "contained",
  color = "primary",
  backgroundColor = "royalblue",
  text = "10 min read",
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      style={{
        backgroundColor: { backgroundColor },
        margin: "16px",
        borderRadius: "10px",
      }}
    >
      {text}
    </Button>
  );
};

export default GlobalButton;