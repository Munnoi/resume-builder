import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Divider,
  Menu,
  MenuItem,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AuthModal from "./AuthModal";
import { useAuth } from "../context/AuthContext";

const NavBar: React.FC = () => {
  const { user, logout, authModalOpen, setAuthModalOpen } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Templates", path: "/templates" },
    { name: "Features", path: "/#features" },
    { name: "Pricing", path: "/#pricing" },
    { name: "FAQ", path: "/#faq" },
    { name: "Builder", path: "/builder" },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 1 : 0}
      sx={{
        px: 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "0.4s",
        backgroundColor: scrolled ? "rgba(255,255,255,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.25)" : "none",
        py: scrolled ? 0.8 : 2,
      }}>
      <Toolbar
        sx={{
          maxWidth: "1280px",
          mx: "auto",
          width: "100%",
          px: 3,
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
        }}>
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            transition: "0.3s",
            "&:hover": { transform: "scale(1.03)" },
          }}>
          <Box
            sx={{
              width: 32,
              height: 32,
              backgroundColor: "primary.main",
              borderRadius: 2,
              fontWeight: 700,
              fontSize: "1.2rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: (theme) =>
                `0px 6px 15px ${theme.palette.primary.main + "33"}`,
            }}>
            K
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              textDecoration: "none",
              transition: "0.3s",
              "&:hover": { color: "primary.main" },
            }}>
            Kesume
          </Typography>
        </Box>

        {/* Center Nav Menu */}
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            display: { xs: "none", lg: "flex" },
          }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              gap: 1,
              px: 2,
              py: 1,
              backgroundColor: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(255,255,255,0.24)",
              borderRadius: 100,
              backdropFilter: "blur(14px)",
              boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
            }}>
            {navItems.map((item) => (
              <Box key={item.name} sx={{ position: "relative" }}>
                {item.path.startsWith("/#") ? (
                  <Box
                    component="a"
                    href={item.path}
                    sx={{
                      px: 2,
                      py: 1,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      borderRadius: "50px",
                      color: "text.secondary",
                      textDecoration: "none",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.75)",
                        color: "primary.main",
                      },
                      "&:hover .underline": {
                        width: "60%",
                      },
                    }}>
                    {item.name}

                    {/* Underline */}
                    <Box
                      className="underline"
                      sx={{
                        position: "absolute",
                        left: "50%",
                        bottom: 0,
                        height: 2,
                        width: 0,
                        borderRadius: 10,
                        backgroundColor: "primary.main",
                        transition: "0.3s",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </Box>
                ) : (
                  <Box
                    component={Link}
                    to={item.path}
                    sx={{
                      px: 2,
                      py: 1,
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      borderRadius: "50px",
                      color: "text.secondary",
                      textDecoration: "none",
                      transition: "0.3s",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.75)",
                        color: "primary.main",
                      },
                      "&:hover .underline": {
                        width: "60%",
                      },
                    }}>
                    {item.name}
                    <Box
                      className="underline"
                      sx={{
                        position: "absolute",
                        left: "50%",
                        bottom: 0,
                        height: 2,
                        width: 0,
                        borderRadius: 10,
                        backgroundColor: "primary.main",
                        transition: "0.3s",
                        transform: "translateX(-50%)",
                      }}
                    />
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* GitHub */}
          <Box
            component="a"
            href="https://github.com/Munnoi/resume-builder"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: { xs: "none", xl: "flex" },
              alignItems: "center",
              gap: 1,
              color: "text.secondary",
              fontSize: "0.9rem",
              textDecoration: "none",
              transition: "0.3s",
              "&:hover": { color: "primary.main", transform: "scale(1.05)" },
              "&:active": { transform: "scale(0.97)" },
            }}>
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              sx={{ width: 20, height: 20, fill: "currentColor" }}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="
      M12 2C6.477 2 2 6.484 2 12.017
      c0 4.425 2.865 8.18 6.839 9.504
      .5.092.682-.217.682-.483
      0-.237-.008-.868-.013-1.703
      -2.782.605-3.369-1.343-3.369-1.343
      -.454-1.158-1.11-1.466-1.11-1.466
      -.908-.62.069-.608.069-.608
      1.003.07 1.531 1.032 1.531 1.032
      .892 1.53 2.341 1.088 2.91.832
      .092-.647.35-1.088.636-1.338
      -2.22-.253-4.555-1.113-4.555-4.951
      0-1.093.39-1.988 1.029-2.688
      -.103-.253-.446-1.272.098-2.65
      0 0 .84-.27 2.75 1.026
      A9.564 9.564 0 0112 6.844
      c.85.004 1.705.115 2.504.337
      1.909-1.296 2.747-1.027 2.747-1.027
      .546 1.379.202 2.398.1 2.651
      .64.7 1.028 1.595 1.028 2.688
      0 3.848-2.339 4.695-4.566 4.943
      .359.309.678.92.678 1.855
      0 1.338-.012 2.419-.012 2.747
      0 .268.18.58.688.482
      A10.019 10.019 0 0022 12.017
      C22 6.484 17.522 2 12 2z
    "
              />
            </Box>
            Star
          </Box>

          <Divider
            orientation="vertical"
            sx={{
              height: 24,
              display: { xs: "none", lg: "block" },
              backgroundColor: "#e5e7eb",
            }}
          />

          {/* Login / User Menu */}
          {user ? (
            <>
              <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                <Avatar sx={{ bgcolor: "primary.main", display: "flex", alignItems: "center", justifyContent: "center" }}>{user.name?.[0].toUpperCase() || "U"}</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => {
                  logout();
                  setAnchorEl(null);
                }}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              onClick={() => setAuthModalOpen(true)}
              sx={{
                display: { xs: "none", md: "block" },
                textTransform: "none",
                color: "text.secondary",
                fontWeight: 500,
                "&:hover": { color: "primary.main", transform: "scale(1.05)" },
                "&:active": { transform: "scale(0.97)" },
              }}>
              Log in
            </Button>
          )}
          
          <AuthModal
            open={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
          />

          {/* CTA */}
          <Button
            component={Link}
            to="/builder"
            sx={{
              px: 3,
              py: 1,
              backgroundColor: "primary.main",
              color: "#fff",
              fontSize: "0.9rem",
              fontWeight: 600,
              borderRadius: "50px",
              boxShadow: (theme) =>
                `0px 6px 16px ${theme.palette.primary.main + "40"}`,
              transition: "0.3s",
              "&:hover": {
                backgroundColor: "primary.dark",
                transform: "translateY(-2px)",
                boxShadow: (theme) =>
                  `0px 8px 20px ${theme.palette.primary.main + "60"}`,
              },
              "&:active": { transform: "scale(0.95)" },
            }}>
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", lg: "none" },
              ml: 1,
              color: "text.primary",
            }}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            backgroundColor: "background.paper",
          },
        }}>
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
            }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: "primary.main",
                  borderRadius: 2,
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                K
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: "text.primary" }}>
                Kesume
              </Typography>
            </Box>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Navigation Links */}
          <List>
            {navItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                {item.path.startsWith("/#") ? (
                  <ListItemButton
                    component="a"
                    href={item.path}
                    onClick={handleDrawerToggle}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        "& .MuiListItemText-primary": {
                          color: "primary.main",
                        },
                      },
                    }}>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    />
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={handleDrawerToggle}
                    sx={{
                      borderRadius: 2,
                      mb: 0.5,
                      "&:hover": {
                        backgroundColor: "primary.light",
                        "& .MuiListItemText-primary": {
                          color: "primary.main",
                        },
                      },
                    }}>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        fontWeight: 500,
                        color: "text.secondary",
                      }}
                    />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Auth Buttons in Drawer */}
          {user ? (
            <Button
              fullWidth
              onClick={() => {
                logout();
                handleDrawerToggle();
              }}
              sx={{
                py: 1.5,
                textTransform: "none",
                color: "text.secondary",
                fontWeight: 500,
                borderRadius: 2,
                "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
              }}>
              Logout
            </Button>
          ) : (
            <Button
              fullWidth
              onClick={() => {
                setAuthModalOpen(true);
                handleDrawerToggle();
              }}
              sx={{
                py: 1.5,
                textTransform: "none",
                color: "text.secondary",
                fontWeight: 500,
                borderRadius: 2,
                "&:hover": { backgroundColor: "rgba(0,0,0,0.04)" },
              }}>
              Log in
            </Button>
          )}

          {/* CTA Button in Drawer */}
          <Button
            component={Link}
            to="/builder"
            fullWidth
            onClick={handleDrawerToggle}
            sx={{
              mt: 1,
              py: 1.5,
              backgroundColor: "primary.main",
              color: "#fff",
              fontWeight: 600,
              borderRadius: 2,
              textTransform: "none",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}>
            Get Started
          </Button>

          {/* GitHub Link in Drawer */}
          <Box
            component="a"
            href="https://github.com/Munnoi/resume-builder"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mt: 3,
              py: 1,
              color: "text.secondary",
              fontSize: "0.9rem",
              textDecoration: "none",
              "&:hover": { color: "primary.main" },
            }}>
            <Box
              component="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              sx={{ width: 20, height: 20, fill: "currentColor" }}>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </Box>
            Star on GitHub
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
