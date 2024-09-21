import { Link, Head } from "@inertiajs/react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import AppLayout from "../Layouts/AppLayout";
import product from "@/image/Produk.png";
import Header from "../Components/Header";
import React from "react";

export default function Portfolio() {
  const Cards = ({ portfolio }) => {
    return (
      <Card
        sx={{
          boxShadow: "none",
          display: "flex",
          flexShrink: 0,
          alignItems: "center",
          justifyContent: "center",
          width: "min-content",
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
              width: "fit-content",
              padding: "0.3rem",
              borderRadius: "10px",
            }}>
            <Box
              component="img"
              src={`/images/${portfolio.image}`}
              sx={{
                width: "20vw",
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
              padding: "1rem",
            }}>
            <Typography
              variant="h5"
              component="div"
              sx={{
                color: "#009B88",
                fontWeight: 900,
              }}>
              {portfolio.desc}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  };

  const [portfolios, setPortfolios] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/portfolios") // Include full URL
      .then((response) => {
        setPortfolios(response.data);
        // console.log(response);
      })
      .catch((error) => {
        console.error("There was an error fetching the portfolios!", error);
      });
  }, []);

  return (
    <AppLayout isAdmin={false} title="Portfolio | Cakra Buana Sejati">
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Typography
          component="div"
          sx={{
            mt: "4rem",
            display: "flex",
            textAlign: "center",
            fontSize: "4rem",
            fontWeight: "900",
            color: "#FF4E00",
          }}>
          PORTFOLIO CBS MEBEL & INTERIOR
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "1.3rem",
            fontWeight: 900,
            color: "#009B88",
            mb: "2rem",
            width: "50vw",
          }}>
          Kepercayaan anda menjadi kunci bagi Cakra Buana Sejati dalam
          mewujudkan mimpi, bersama-sama kita hadirkan apa yang sebelumnya
          nampak seperti ilusi, untuk dapat terealisasi sesuai dengan
          ekspektasi. Hingga kini, kami telah dipercaya untuk membuat berbagai
          macam produk mebel dan interior mula dari meja belajar pribadi, lemari
          serbaguna, Kitchen Set modern, hingga kasur minimalis multifungsi.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "3rem",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "2rem",
          }}>
          {portfolios.map((portfolio, idx) => (
            <Cards key={idx} portfolio={portfolio} />
          ))}
        </Box>
      </Box>
    </AppLayout>
  );
}
