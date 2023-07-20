import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";

import FlexBetween from "@/components/Global/FlexBetween";

import { routes } from "@/constants/routes";

const Navbar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon
          sx={{
            fontSize: "28px",
          }}
        />
        <Typography variant="h4" fontSize="16px">
          Finance Dashboard
        </Typography>
      </FlexBetween>
      <FlexBetween gap="2rem">
        {routes.map((route) => (
          <Box
            key={route.name}
            sx={{
              "&:hover": {
                color: palette.primary[100],
              },
            }}
          >
            <Link
              to={route.path}
              onClick={() => setSelected(route.state)}
              style={{
                color: selected === route.state ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
              }}
            >
              {route.name}
            </Link>
          </Box>
        ))}
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
