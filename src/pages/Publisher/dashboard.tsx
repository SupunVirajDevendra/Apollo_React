import { useState } from "react";
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
  PaletteMode,
} from "@mui/material";
import Header from "../../components/publisher/Header";
import Footer from "../../components/publisher/Footer";
import PublisherHeroSection from "../../components/publisher/PublisherHeroSection";
import MyBooks from "../../components/publisher/MyBooks";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#6247aa" },
          secondary: { main: "#ff7f7f" },
          background: {
            default: "#f0f4f8",
            paper: "#ffffff",
          },
        }
      : {
          primary: { main: "#9d8cd6" },
          secondary: { main: "#ff9999" },
          background: {
            default: "#1a1a2e",
            paper: "#16213e",
          },
        }),
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          },
        },
      },
    },
  },
});

function PublisherDashboard() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = createTheme(getDesignTokens(mode));
  const toggleColorMode = () =>
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Header toggleColorMode={toggleColorMode} />
        <Box component="main" sx={{ flexGrow: 1, overflow: "hidden" }}>
          <Container maxWidth={false} disableGutters>
            <PublisherHeroSection />
            <Container maxWidth="xl" sx={{ py: 4 }}>
              <MyBooks />
            </Container>
          </Container>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default PublisherDashboard;
