import React from "react";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme/theme";

const Gergraphy = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m={"20px"}>
      <Header title={"Geography Chart"} subtitle={"Simple Gergraphy Chart"} />
      <Box
        height={"75vh"}
        border={`1px solid ${colors.grey[100]}`}
        borderRadius={"4px"}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Gergraphy;
