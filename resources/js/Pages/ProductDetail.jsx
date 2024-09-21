import { Link, Head } from "@inertiajs/react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import AppLayout from "../Layouts/AppLayout";
import product from "@/image/Produk.png";
import Header from "../Components/Header";
import React from "react";

export default function ProductDetail({ product }) {
  const images = product.images ? JSON.parse(product.images) : []; // Assuming images are stored as a JSON string
  console.log(images);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <AppLayout isAdmin={false} title={product.name + " | Cakra Buana Sejati"}>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "20px",
          mb: "20px",
        }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "white",
            padding: "3rem",
            width: "80vw",
            borderRadius: "10px",
            alignItems: "center",
          }}>
          {/* image carousel */}
          {/* <Box sx={{ mb: "2rem" }}>
            {images.length > 0 ? (
              <Carousel
                autoPlay
                interval={5000}
                animation="slide"
                indicators
                navButtonsAlwaysVisible
                sx={{
                  maxWidth: "100%",
                  height: "500px", // Set a fixed height for the carousel
                  position: "relative", // Ensure positioning is relative for the images
                  overflow: "hidden", // Hide overflow to ensure images fit nicely
                }}>
                {images.map((image, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%", // Ensure each item takes full height of the carousel
                      position: "relative", // Position relative for the images
                    }}>
                    <img
                      src={`/images/${image}`}
                      alt={`Product image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // Cover ensures the image fills the space
                        position: "absolute", // Ensure the image covers the entire Box
                        top: 0,
                        left: 0,
                      }}
                    />
                  </Box>
                ))}
              </Carousel>
            ) : (
              <Typography
                variant="h6"
                sx={{ textAlign: "center", color: "#FF4E00" }}>
                No images available
              </Typography>
            )}
          </Box> */}
          {images.map((image) => (
            <Box
              key={image}
              component="img"
              src={`/images/${image}`}
              alt={product.name}
              sx={{ maxWidth: "15%", mr: " 0.3rem", borderRadius: "10px" }}
            />
          ))}
          <Box
            sx={{
              ml: "3rem",
            }}>
            <Typography
              variant="h2"
              component="div"
              sx={{
                color: "#FF4E00",
                fontWeight: 900,
              }}>
              {product.name}
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#FF4E00",
                fontWeight: 900,
              }}>
              Rp{parseInt(product.price, 10).toLocaleString("id-ID")}
            </Typography>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}
