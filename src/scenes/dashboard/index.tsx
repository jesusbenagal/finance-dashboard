import { Box, useMediaQuery } from "@mui/material";

import {
  gridTemplateLargeScreen,
  gridTemplateSmallScreen,
} from "@/constants/gridAreas";

import Row1 from "./rows/Row1";
import Row2 from "./rows/Row2";
import Row3 from "./rows/Row3";

const getGridStyle = (isAboveMediumScreens: boolean) => {
  if (isAboveMediumScreens) {
    return {
      gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
      gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
      gridTemplateAreas: gridTemplateLargeScreen,
    };
  }

  return {
    gridAutoColumns: "1fr",
    gridAutoRows: "80px",
    gridTemplateAreas: gridTemplateSmallScreen,
  };
};

const Dashboard = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  const gridStyle = getGridStyle(isAboveMediumScreens);

  return (
    <Box width="100%" height="100%" display="grid" gap="1.5rem" sx={gridStyle}>
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};

export default Dashboard;
