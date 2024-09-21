import React, { useState } from "react";

import AppLayout from "../Layouts/AppLayout";
import {
  Box,
  Button,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  InputAdornment,
} from "@mui/material";
import Header from "../Components/Header";
import { Inertia } from "@inertiajs/inertia";

export default function Order() {
  const [formData, setFormData] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    location: "",
    needs: "",
    meetingDate: "",
    estimatedTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRadioChange = (e) => {
    setFormData({ ...formData, needs: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    Inertia.post("/order/store", formData);
  };
  return (
    <AppLayout isAdmin={false} title="Buat Pemesanan | Cakra Buana Sejati">
      <Header />
      <Box sx={{ display: "flex", justifyContent: "center", mt: "4rem" }}>
        <Box
          sx={{
            display: "flex",
            width: "80vw",
            backgroundColor: "white",
            justifyContent: "center",
            borderRadius: "10px",
            padding: "3rem",
          }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
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
              }}>
              PEMESANAN CUSTOM
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
              }}>
              Cakra Buana Sejati Mebel dan Interior siap memenuhi kebutahan dan
              ke inginan anda untuk mewvujudkan furniture yang anda impikan.
              Wkwowkowkwokwokwokso adjbdk jsdkjdkj jb sd Wujdkan furniture
              impian anda sekarang bersama CBS Mebel dan Interior
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ width: "100%", maxWidth: "800px" }}>
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                }}>
                <Typography
                  component="div"
                  sx={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: "#FF4E00",
                    mb: "1rem",
                  }}>
                  Informasi Pemesanan
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
                <TextField
                  label="Nama Lengkap"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="No Whatsapp"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+62</InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
                <TextField
                  label="Alamat Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                />
                <TextField
                  label="Lokasi Pemasangan"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  fullWidth
                />
              </Box>

              <Typography
                component="div"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "900",
                  color: "#FF4E00",
                  mb: "1rem",
                }}>
                Kebutuhan Furniture
              </Typography>
              <FormControl component="fieldset" sx={{ mb: "1rem" }}>
                <RadioGroup
                  row
                  name="needs"
                  value={formData.needs}
                  onChange={handleRadioChange}>
                  <FormControlLabel
                    value="Rumah"
                    control={<Radio />}
                    label="Rumah"
                  />
                  <FormControlLabel
                    value="Apartmen"
                    control={<Radio />}
                    label="Apartmen"
                  />
                  <FormControlLabel
                    value="Cafe"
                    control={<Radio />}
                    label="Cafe"
                  />
                  <FormControlLabel
                    value="Kantor"
                    control={<Radio />}
                    label="Kantor"
                  />
                  <FormControlLabel
                    value="Restoran"
                    control={<Radio />}
                    label="Restoran"
                  />
                  <FormControlLabel
                    value="Booth"
                    control={<Radio />}
                    label="Booth"
                  />
                </RadioGroup>
              </FormControl>

              <Typography
                component="div"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "900",
                  color: "#FF4E00",
                  mb: "1rem",
                }}>
                Kita Janjian Untuk Survey Yuk!
              </Typography>
              <Box sx={{ display: "flex", gap: "1rem", mb: "1rem" }}>
                <TextField
                  label="Tanggal"
                  name="meetingDate"
                  value={formData.meetingDate}
                  onChange={handleChange}
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  label="Perkiran Waktu"
                  name="estimatedTime"
                  value={formData.estimatedTime}
                  onChange={handleChange}
                  type="time"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                />
              </Box>

              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
}
