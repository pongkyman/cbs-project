import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

import { Box, Button, TextField, Typography } from "@mui/material";
import AppLayout from "../../../Layouts/AppLayout";
import { usePage } from "@inertiajs/react";

const UpdateTestimony = () => {
  const { props } = usePage();
  const { testimony } = props;

  const [formData, setFormData] = useState({
    name: testimony.name,
    age: testimony.age,
    testimony: testimony.testimony,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Inertia.post(`/admin/testimony/update/${testimony.id}`, formData);
  };

  return (
    <AppLayout isAdmin={true}>
      <Box sx={{ padding: "2rem" }}>
        <Box
          component="div"
          sx={{
            fontSize: "8vw",
            textAlign: "center",
            fontWeight: "900",
            color: "#FF4E00",
          }}>
          UPDATE TESTIMONY
        </Box>

        <Box
          sx={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "1rem" }}
            />
            <TextField
              label="Testimony"
              name="testimony"
              value={formData.testimony}
              onChange={handleChange}
              fullWidth
              multiline
              rows={4}
              sx={{ marginBottom: "1rem" }}
            />
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </form>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default UpdateTestimony;
