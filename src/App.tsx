import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "@/scenes/navbar";
import Dashboard from "@/scenes/dashboard";
import Predictions from "@/scenes/predictions";

import { RoutesEnum } from "@/constants/routes";

import { themeSettings } from "@/styles/theme";

function App() {
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Navbar />
            <Routes>
              <Route path={RoutesEnum.DASHBOARD} element={<Dashboard />} />
              <Route path={RoutesEnum.PREDICTIONS} element={<Predictions />} />
              <Route path={RoutesEnum.OTHER} element={<h1>Not Found</h1>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
