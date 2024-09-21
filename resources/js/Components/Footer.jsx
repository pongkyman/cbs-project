// resources/js/Components/Footer.jsx
import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
// import TiktokIcon from "@mui/icons-material/Tiktok"; // You may need to add this icon yourself

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#01675b", // Set the background color to match the image
        color: "white",
        padding: "20px 40px",
        mt: "auto",
      }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Sosial Media</Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <InstagramIcon fontSize="large" />
            </Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>
              <FacebookIcon fontSize="large" />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Alamat</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Alamat Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Nulla ipsa possimus voluptates quia cumque. Ipsum voluptatem
            dignissimos sequi voluptate quaerat nam, minima eos. Accusamus odit
            eos ex maxime reprehenderit provident.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6">Hubungi Kami</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Whatsapp: 08123456788
            <br />
            08.00 - 18.00
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
            <Link href="#" color="inherit">
              Produk
            </Link>
            <Link href="#" color="inherit">
              Cara Kerja
            </Link>
            <Link href="#" color="inherit">
              FAQ
            </Link>
            <Link href="#" color="inherit">
              Kontak
            </Link>
            <Link href="#" color="inherit">
              Tentang Kami
            </Link>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          mt: 3,
          pt: 2,
        }}>
        <Typography variant="body2">
          © 2018 - 2024 Rancang Mebel. All Rights Reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
