import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import AppLayout from "../../Layouts/AppLayout";

import SettingsIcon from "@mui/icons-material/Settings";
import { Inertia } from "@inertiajs/inertia";
import superGraphic from "@/image/Super.png";

const menus = ["Order", "Product", "Testimony", "Portfolio"];
const handleCardClick = (menu) => {
  const routes = {
    Order: "/admin/order",
    Product: "/admin/product",
    Testimony: "/admin/testimony",
    Portfolio: "/admin/portfolio",
  };
  return () => {
    Inertia.visit(routes[menu]); // Navigate to the route based on the menu
  };
};

const MenuCards = ({ menu }) => {
  return (
    <Card
      onClick={handleCardClick(menu)}
      sx={{
        backgroundColor: "#009B88",
        width: {
          xs: "100px",
          sm: "200px",
        },
        height: {
          xs: "100px",
          sm: "200px",
        },
        mr: "1rem",
        mb: "2rem",
        pt: "10px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        cursor: "pointer", // Optional: Add a pointer cursor to indicate it's clickable
      }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <SettingsIcon sx={{ fontSize: 100, color: "white" }} />
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "white",
            textAlign: "center",
          }}>
          {menu}
        </Typography>
      </CardContent>
    </Card>
  );
};

const AdminDashboard = () => {
  return (
    <AppLayout isAdmin={true} title="Admin Dashboard">
      <Box
        component="div"
        sx={{
          fontSize: "8vw",
          textAlign: "center",
          fontWeight: "900",
          mb: "6rem",
          mt: "5rem",
          color: "#FF4E00",
        }}>
        CBS ADMIN
      </Box>
      <Box
        sx={{
          padding: "8px",
          display: "flex",
          justifyContent: "center",
        }}>
        {menus.map((menu, idx) => (
          <MenuCards menu={menu} key={idx} />
        ))}
      </Box>
      <Box
        sx={{
          overflowX: "hidden",
        }}>
        <Box
          component="img"
          sx={{
            width: "30vw",
            position: "absolute",
            top: "10%",
            left: "-10%",
            display: "inline-block",
          }}
          src={superGraphic}
          alt="Home"
        />
        <Box
          component="img"
          sx={{
            width: "30vw",
            position: "fixed",
            top: "30%",
            left: "78%",
            display: "inline-block",
            rotate: "90deg",
          }}
          src={superGraphic}
          alt="Home"
        />
      </Box>
    </AppLayout>
  );
};

export default AdminDashboard;
