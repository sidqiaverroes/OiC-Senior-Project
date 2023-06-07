import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          top: 65,
          right: 72,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          variant="determinate"
          {...props}
          component="div"
          sx={{
            color: "#eab308",
            "& .MuiCircularProgress-svg": { width: "220px" },
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="#7e22ce"
          fontWeight="bold"
          fontSize="60px"
          fontFamily="Inter"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic(props) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= props.targetProgress) {
          clearInterval(timer);
          return prevProgress;
        } else {
          return prevProgress + 1;
        }
      });
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [props.targetProgress]);

  return <CircularProgressWithLabel value={progress} />;
}
