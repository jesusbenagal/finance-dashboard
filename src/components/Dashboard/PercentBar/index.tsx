import { FC } from "react";
import { Box, Typography, Palette } from "@mui/material";

import BoxHeader from "@/components/Global/BoxHeader";
import DashboardBox from "@/components/Global/DashboardBox";

interface PercentBarProps {
  palette: Palette;
}

const PercentBar: FC<PercentBarProps> = ({ palette }) => {
  return (
    <DashboardBox gridArea="j">
      <BoxHeader title="Overall Summary and Explanation Data" sideText="+15%" />
      <Box
        height="15px"
        margin="1.25rem 1rem 0.4rem 1rem"
        bgcolor={palette.primary[800]}
        borderRadius="1rem"
      >
        <Box
          height="15px"
          bgcolor={palette.primary[600]}
          borderRadius="1rem"
          width="40%"
        ></Box>
      </Box>
      <Typography margin="0 1rem" variant="h5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, nisi
        nesciunt distinctio vero ratione ipsum blanditiis fugit, eos fuga saepe
        vel expedita, sed alias veritatis nihil similique dicta? Minus,
        accusamus!
      </Typography>
    </DashboardBox>
  );
};

export default PercentBar;
