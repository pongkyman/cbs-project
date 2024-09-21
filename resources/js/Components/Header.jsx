import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Image, ShoppingCart } from "@mui/icons-material";
import logo from "@/image/Logo.png";
import { Inertia } from "@inertiajs/inertia";

const Header = () => {
  const pages = {
    Pemesanan: "/order",
    Produk: "/product",
    Portfolio: "/portfolio",
    "Cara Kerja": "/howto",
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const openPage = (page) => {
    Inertia.visit(page);
  };

  const handleClick = () => {
    Inertia.visit("/");
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "#FF4E00",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
          }}>
          <Box
            component="img"
            src={logo}
            sx={{
              width: "10%",
              display: { xs: "none", md: "flex" },
              mr: 2,
              "&:hover": {
                cursor: "pointer",
              },
            }}
            onClick={handleClick}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              {Object.entries(pages).map(([pageName, pageLink]) => (
                <MenuItem key={pageName} onClick={() => openPage(pageLink)}>
                  <Typography textAlign="center">{pageName}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
              fontSize: {
                xs: "20px",
                sm: "32px",
              },
            }}>
            Cakra Buana Sejati
          </Typography>
          <Box
            component="img"
            src={logo}
            sx={{
              width: "15%",
              display: { xs: "flex", md: "none" },
              mr: 2,
            }}
          />
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}>
            {Object.entries(pages).map(([pageName, pageLink]) => (
              <Button
                key={pageName}
                onClick={() => openPage(pageLink)}
                sx={{
                  my: 2,
                  color: "#FF4E00",
                  display: "block",
                  fontSize: "15px",
                  marginRight: "76px",
                  fontWeight: "900",
                }}>
                {pageName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
