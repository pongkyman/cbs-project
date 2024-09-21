import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Box, Button, TextField } from "@mui/material";
import AppLayout from "../../../Layouts/AppLayout";

const CreateProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    formData.images.forEach((image, index) => {
      data.append(`images[${index}]`, image);
    });

    Inertia.post("/admin/product/store", data);
  };

  return (
    <AppLayout isAdmin={true} title="Crate Product">
      <Box sx={{ padding: "2rem" }}>
        <Box
          component="div"
          sx={{
            fontSize: "8vw",
            textAlign: "center",
            fontWeight: "900",
            color: "#FF4E00",
          }}>
          CREATE PRODUCT
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
              label="Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              fullWidth
              sx={{ marginBottom: "1rem" }}
            />
            <Box component="h3">Image</Box>
            <Box component="h5">Direkomendasikan portrait</Box>
            <input
              accept="image/*"
              type="file"
              name="images[]"
              multiple
              onChange={handleImageUpload}
              style={{ marginBottom: "1rem" }}
            />
            <Button type="submit" variant="contained" color="primary">
              Create
            </Button>
          </form>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default CreateProduct;
