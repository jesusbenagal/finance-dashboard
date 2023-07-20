import React, { FC } from "react";
import FlexBetween from "./FlexBetween";
import { useTheme, Box, Typography } from "@mui/material";

interface BoxHeaderProps {
  title: string;
  subtitle?: string;
  sideText: string;
  icon?: React.ReactNode;
}

const BoxHeader: FC<BoxHeaderProps> = ({ title, subtitle, sideText, icon }) => {
  const { palette } = useTheme();

  return (
    <FlexBetween color={palette.grey[400]} margin="1.5rem 1rem 0 1rem">
      <FlexBetween>
        {icon}
        <Box width="100%">
          <Typography variant="h4" mb="-0.1rem">
            {title}
          </Typography>
          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </FlexBetween>
      <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
        {sideText}
      </Typography>
    </FlexBetween>
  );
};

export default BoxHeader;
