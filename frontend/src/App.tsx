import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Templates from "./pages/Templates";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { ResumeProvider } from "./context/ResumeContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ResumeProvider>
        <Router>
          {/* Normalize CSS */}
          <CssBaseline />

          <Box
            sx={{
              minHeight: "100vh",
              backgroundColor: "background.default",
              fontFamily: "sans-serif",
              color: "text.primary",
              display: "flex",
              flexDirection: "column",
              "::selection": {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              },
            }}>
            <NavBar />

            <Box component="main" sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/builder"
                  element={
                    <ProtectedRoute>
                      <Builder />
                    </ProtectedRoute>
                  }
                />
                <Route path="/templates" element={<Templates />} />
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Box>

            <Footer />
          </Box>
        </Router>
      </ResumeProvider>
    </AuthProvider>
  );
}

export default App;
