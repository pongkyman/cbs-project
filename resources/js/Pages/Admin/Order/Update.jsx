import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

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
import AppLayout from "../../../Layouts/AppLayout";
import { usePage } from "@inertiajs/react";

const UpdateOrder = () => {
  const { props } = usePage();
  const { order } = props;

  const [formData, setFormData] = useState({
    name: order.name,
    phone_number: order.phone_number,
    email: order.email,
    location: order.location,
    needs: order.needs,
    meeting_date: order.meeting_date,
    estimated_time: order.estimated_time,
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
    Inertia.post(`/admin/order/update/${order.id}`, formData);
  };

  const updateStatus = (newStatus) => {
    Inertia.put(`/order/${order.id}/status`, { status: newStatus });
  };
  return (
    <AppLayout isAdmin={true} title={"Update Order"}>
      <Box sx={{ padding: "2rem" }}>
        <Box
          component="div"
          sx={{
            fontSize: "8vw",
            textAlign: "center",
            fontWeight: "900",
            color: "#FF4E00",
          }}>
          UPDATE ORDER
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nama Lengkap"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="No Whatsapp"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              fullWidth
              sx={{ mt: "1rem" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">+62</InputAdornment>
                ),
              }}
            />
            <TextField
              label="Alamat Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              sx={{ mt: "1rem" }}
            />
            <TextField
              label="Lokasi Pemasangan"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              sx={{ mt: "1rem" }}
            />
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
            <TextField
              label="Tanggal"
              name="meeting_date"
              value={formData.meeting_date}
              onChange={handleChange}
              type="date"
              fullWidth
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Perkiran Waktu"
              name="estimated_time"
              value={formData.estimated_time}
              onChange={handleChange}
              type="time"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ mt: "1rem" }}
            />

            <Box
              sx={{
                mt: "1rem",
                display: "flex",
                gap: "2rem",
              }}>
              <Button type="submit" variant="contained" color="primary">
                Update
              </Button>
              {order.status === 1 && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => updateStatus(5)}>
                  Mark as Ongoing
                </Button>
              )}
              {order.status === 5 && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => updateStatus(10)}>
                  Mark as Done
                </Button>
              )}
            </Box>
          </form>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default UpdateOrder;
