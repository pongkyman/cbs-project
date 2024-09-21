import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Box, Button, TextField } from "@mui/material";
import AppLayout from "../../../Layouts/AppLayout";
import { usePage } from "@inertiajs/react";

const UpdatePortfolio = () => {
  const { props } = usePage();
  const { product: portfolio } = props;
  const [formData, setFormData] = useState({
    name: portfolio.name,
    desc: portfolio.desc,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("desc", formData.desc);
    data.append("image", formData.image);

    Inertia.post(`/admin/portfolio/update/${portfolio.id}`, data);
  };

  return (
    <AppLayout isAdmin={true} title={"Update Portfolio"}>
      <Box sx={{ padding: "2rem" }}>
        <Box
          component="div"
          sx={{
            fontSize: "8vw",
            textAlign: "center",
            fontWeight: "900",
            color: "#FF4E00",
          }}>
          UPDATE PORTFOLIO
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
              label="Description"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "1rem" }}
            />
            <input
              accept="image/*"
              type="file"
              onChange={handleImageUpload}
              style={{ marginBottom: "1rem" }}
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

export default UpdatePortfolio;
