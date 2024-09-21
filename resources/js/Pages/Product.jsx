import { Link, Head } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import AppLayout from "../Layouts/AppLayout";
import product from "@/image/Produk.png";
import Header from "../Components/Header";
import React from "react";

export default function Product() {
  const Cards = ({ product }) => {
    const images = JSON.parse(product.images);
    console.log(images);
    const handleClick = () => {
      Inertia.get(`/product/${product.id}`);
    };
    return (
      <Card
        onClick={handleClick}
        sx={{
          boxShadow: "none",
          display: "flex",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "#D9D9D9",
          // width: {
          //   xs: "150px", // Adjusted width for better overflow on smaller screens
          //   sm: "250px", // Adjusted width for better overflow on larger screens
          // },
          width: "min-content",
          // height: "200px",
          borderRadius: "10px",
        }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <Box
            sx={{
              display: "flex",
              flexShrink: 0,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#D9D9D9",
              // width: {
              //   xs: "150px", // Adjusted width for better overflow on smaller screens
              //   sm: "250px", // Adjusted width for better overflow on larger screens
              // },
              width: "fit-content",
              padding: "0.3rem",
              // height: "200px",
              borderRadius: "10px",
            }}>
            <Box
              component="img"
              src={`/images/${images[0]}`}
              sx={{
                // width: "20vw",
                maxWidth: "200px",
                maxHeight: "300px",
                width: "auto",
                height: "auto",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "1rem",
              backgroundColor: "#D9D9D9",
              width: "20vw",
              borderRadius: "10px",
              padding: "0.1rem",
            }}>
            <Typography
              variant="h5"
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
                color: "#009B88",
              }}>
              Rp{parseInt(product.price, 10).toLocaleString("id-ID")}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/products") // Include full URL
      .then((response) => {
        setProducts(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const handleWa = () => {
    window.open(`https://wa.me/+62878787`, "_blank");
  };

  return (
    <AppLayout isAdmin={false} title="Product | Cakra Buana Sejati">
      <Header />
      <Box
        sx={{
          position: "relative",
          width: "100%",
        }}>
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          src={product}
          alt="Product"
        />
        <Typography
          variant="h4"
          component="div"
          sx={{
            position: "absolute",
            top: "40%",
            left: "35%",
            fontWeight: 900,
            transform: "translate(-50%, -50%)",
            color: "white", // Change color as needed
            textAlign: "left",
            width: "fit-content",
            fontSize: {
              xs: "3.1rem",
              sm: "3.3rem",
              md: "3.0rem",
              lg: "4rem",
            },
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}>
          FURNITURE ELEGAN DAN BERKELAS UNTUK SEGALA SUDUT RUANGAN
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: "8px",
        }}>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "900",
            color: "#FF4E00",
          }}>
          PRODUK CBS MEBEL & INTERIOR
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: "900",
            color: "#009B88",
            mb: "1rem",
            width: "50vw",
            justifyContent: "center",
          }}>
          Sampaikan pada kami ruangan yang selama ini anda cita-citakan, Cakra
          Buana Sejati dengan senang hati akan membantu anda untuk menghadirkan
          sudut ruangan yang berkesan bagi anda dan keluarga.
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "1rem",
            color: "#009B88",
            mb: "2rem",
            width: "50vw",
            justifyContent: "center",
          }}>
          Butuh pencerahan? Lihat-lihat dulu aja desain di bawah ini!
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "75vw",
            height: "25rem",
            backgroundColor: "white",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "3rem",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "1rem",
            overflowY: "auto",
          }}>
          {products.map((product, idx) => (
            <Cards key={idx} product={product} />
          ))}
        </Box>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "2rem",
            color: "#009B88",
            mb: "1rem",
            mt: "2rem",
            width: "50vw",
            justifyContent: "center",
          }}>
          Kalau masih bingung, izinkan kami membantu anda!
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FF4E00",
            color: "white",
            fontWeight: 900,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: "#009B88",
            },
          }}
          onClick={handleWa}>
          Ngobrol dulu aja di sini
        </Button>
      </Box>
      <br />
    </AppLayout>
  );
}
