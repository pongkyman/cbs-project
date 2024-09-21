import { Link, Head } from "@inertiajs/react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import AppLayout from "../Layouts/AppLayout";
import howto from "@/svg/Howto.svg";
import Header from "../Components/Header";
import React from "react";

const HowtoCard = ({ index, title, desc }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        width: {
          xs: "300px", // Adjusted width for better overflow on smaller screens
          sm: "450px", // Adjusted width for better overflow on larger screens
        },
        height: "200px",
        borderRadius: "10px",
        padding: "3rem",
      }}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}>
        <Box
          component="img"
          src={howto}
          sx={{
            width: "100px",
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
              color: "#009B88",
              fontWeight: 900,
              mb: "0.5rem",
            }}>
            {index + 1}. {title}
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#FF4E00",
            }}>
            {desc}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function Howto() {
  const howtoCardsValue = [
    {
      title: "Cari referensi",
      desc: "Sedikit penjelasan untuk useracnajksb jabavaicnklnsfvoi srvsaipvndinsk slnjl svljdnljnalsscnsdenic oweniadncenakcweicichohc",
    },
    {
      title: "Jelaskan Kebutuhan",
      desc: "Sedikit penjelasan untuk useracnajksb jabavaicnklnsfvoi srvsaipvndinsk slnjl svljdnljnalsscnsdenic oweniadncenakcweicichohc",
    },
    {
      title: "Survey",
      desc: "Sedikit penjelasan untuk useracnajksb jabavaicnklnsfvoi srvsaipvndinsk slnjl svljdnljnalsscnsdenic oweniadncenakcweicichohc",
    },
    {
      title: "Penawaran",
      desc: "Sedikit penjelasan untuk useracnajksb jabavaicnklnsfvoi srvsaipvndinsk slnjl svljdnljnalsscnsdenic oweniadncenakcweicichohc",
    },
    {
      title: "Pembayaran dan Pembuatan",
      desc: "Sedikit penjelasan untuk useracnajksb jabavaicnklnsfvoi srvsaipvndinsk slnjl svljdnljnalsscnsdenic oweniadncenakcweicichohc",
    },
    {
      title: "Antar dan Pasang",
      desc: "Sedikit penjelasan untuk useracnajksb jabavaicnklnsfvoi srvsaipvndinsk slnjl svljdnljnalsscnsdenic oweniadncenakcweicichohc",
    },
  ];

  return (
    <AppLayout isAdmin={false} title="Cara Kerja | Cakra Buana Sejati">
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
          CARA KERJA CBS
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "900",
            color: "#009B88",
            mb: "2rem",
            width: "max-content",
          }}>
          Berikut merupakan cara kerja CBS asda asdal aslkjasdlkja lksadj alskdj
          al
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
          {howtoCardsValue.map((value, idx) => (
            <HowtoCard
              key={idx}
              title={value.title}
              desc={value.desc}
              index={idx}
            />
          ))}
        </Box>
      </Box>
    </AppLayout>
  );
}
