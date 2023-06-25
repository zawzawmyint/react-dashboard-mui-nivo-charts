import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme/theme";
import ProgressCircle from "./ProgressCircle";

import React from "react";

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width={"100%"} mx="30px">
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} mt={"2vh"}>
        <Typography variant="h5" sx={{ color: colors.grey[100] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle={"italic"}
          sx={{ color: colors.greenAccent[100] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
