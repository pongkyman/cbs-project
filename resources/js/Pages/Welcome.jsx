import { Link, Head } from "@inertiajs/react";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import AppLayout from "../Layouts/AppLayout";
import home from "@/image/Home.png";
import logo from "@/image/Logo3.png";
import lemari from "@/image/Lemari.png";
import orang from "@/svg/1.svg";
import bintang from "@/svg/2.svg";
import uang from "@/svg/3.svg";
import kuas from "@/svg/4.svg";
import truck from "@/svg/5.svg";
import gear from "@/svg/6.svg";
import orangTestimoni from "@/svg/Orang.svg";
import Header from "../Components/Header";
import superGraphic from "@/image/Super.png";
import React from "react";

const Cards = ({ svg, desc }) => {
  return (
    <Card
      sx={{
        backgroundColor: "#009B88",
        width: {
          xs: "200px",
          sm: "450px",
        },
        height: {
          xs: "350px",
          sm: "300px",
        },
        mr: "1rem",
        mb: "2rem",
        pt: "10px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Box
          component="img"
          src={svg}
          sx={{
            width: "100px",
            height: "100px",
            mb: "3rem",
          }}
        />
        <Typography
          variant="h5"
          component="div"
          sx={{
            color: "white",
            textAlign: "center",
          }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

const TestimoniCard = ({ nama, umur, testimoni }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexShrink: 0,

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FF4E00",
        width: {
          xs: "300px", // Adjusted width for better overflow on smaller screens
          sm: "450px", // Adjusted width for better overflow on larger screens
        },
        height: "200px",
        borderRadius: "10px",
      }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Box
          component="img"
          src={orangTestimoni}
          sx={{
            width: "75px",
            height: "100px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            ml: "2rem",
          }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              color: "white",
            }}>
            {nama}, {umur.toString()}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "white",
            }}>
            {testimoni}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function Welcome() {
  const cardsValue = [
    {
      svg: orang,
      desc: "Pekerja yang professional dan ahli dalam bidangnya.",
    },
    {
      svg: bintang,
      desc: "Hasil Produk yang dibuat tahan lama dan berkualitas.",
    },
    {
      svg: uang,
      desc: "Harga yang terjangkau dengan hasil yang memuaskan.",
    },
    {
      svg: kuas,
      desc: "Desain yang dapat disesuaikan dengan keinginan anda",
    },
    {
      svg: truck,
      desc: "Gratis pengiriman dan pemasangan",
    },
    {
      svg: gear,
      desc: "Garansi sampai dengan 1 tahun dengan syarat dan ketentuan",
    },
  ];

  const [testimonies, setTestimonies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/testimonies") // Include full URL
      .then((response) => {
        setTestimonies(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the testimonies!", error);
      });
  }, []);

  return (
    <AppLayout isAdmin={false} title="Cakra Buana Sejati">
      <Box
        sx={{
          position: "relative",
          height: "750px",
        }}>
        <Box
          component="img"
          sx={{
            width: "100%",
          }}
          src={home}
          alt="Home"
        />
        <Box
          component="img"
          sx={{
            width: "25%",
            position: "absolute",
            top: "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
          src={logo}
          alt="Logo"
        />
        <Typography
          variant="h4"
          component="div"
          sx={{
            position: "absolute",
            top: "63%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white", // Change color as needed
            textAlign: "center",
            fontSize: {
              xs: "0.1rem",
              sm: "0.3rem",
              md: "0.5rem",
              lg: "1rem",
            },
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
            width: "50vw",
            fontWeight: 500,
          }}>
          <b>Cakra Buana Sejati</b> berkomitmen untuk menghadirkan kreasi dengan
          berinovasi untuk mewujudkan kemudahan sekaligus keindahan bagi
          keberlangsungan kehidupan anda sehari - hari, menciptakan karya
          terbaik dalam berbagai produk mebel dan interior yang tidak hanya
          menimbang estetika, tapi juga fungsionalitas serta personalisasi yang
          menyesuaikan kebutuhan dan selera anda.
        </Typography>
        <Box
          sx={{
            position: "absolute",
            top: "87%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white", // Change color as needed
            textAlign: "center",
            fontSize: {
              xs: "0.1rem",
              sm: "0.3rem",
              md: "0.5rem",
              lg: "1rem",
            },
            display: {
              xl: "block",
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
            width: "50vw",
            fontWeight: 900,
          }}>
          <Typography
            sx={{
              mb: "16px",
            }}>
            Segera tuangkan ide anda dan kami akan wujudkan jadi nyata.
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
            href="https://wa.me/+6285281250330">
            Punya ide apa? Mari berdiskusi!
          </Button>
        </Box>
      </Box>
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
          src={lemari}
          alt="Lemari"
        />

        <Typography
          variant="h4"
          component="div"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
            fontWeight: "900",
            width: "100%",
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
              lg: "2.5rem",
              xl: "3rem",
            },
            display: {
              xl: "inline",
              lg: "inline",
              md: "inline",
              sm: "none",
              xs: "none",
            },
          }}>
          TERCIPTA UNTUK KENYAMANAN DAN KEINDAHAN ANDA
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "900",
            color: "#FF4E00",
            mt: "3rem",
            mb: "3rem",
          }}>
          KENAPA HARUS CBS?
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap", // Allows items to wrap onto new lines
            justifyContent: "center", // Center the items
            gap: "1rem", // Add gap between items
          }}>
          {cardsValue.map((card, idx) => (
            <Cards key={idx} svg={card.svg} desc={card.desc} />
          ))}
        </Box>
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "3rem",
            fontWeight: "900",
            color: "#FF4E00",
            mt: "3rem",
            mb: "3rem",
          }}>
          TESTIMONI
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "1rem", // Optional padding for better visuals
            gap: "1rem", // Add a gap between the cards
            width: "90vw",
            overflowX: "scroll",
            borderRadius: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            // flexWrap: "wrap",
            mb: "90hw",
          }}
          className={"testimonial-container"}>
          {testimonies.map((value, index) => (
            <TestimoniCard
              key={index}
              nama={value.name}
              umur={value.age}
              testimoni={value.testimony}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          overflowX: "hidden",
        }}>
        <Box
          component="img"
          sx={{
            width: "30vw",
            position: "relative",
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
            position: "relative",
            left: "55%",
            display: "inline-block",
            rotate: "90deg",
          }}
          src={superGraphic}
          alt="Home"
        />
      </Box>
    </AppLayout>
  );
}
