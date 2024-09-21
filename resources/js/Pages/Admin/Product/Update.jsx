import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Box, Button, TextField } from "@mui/material";
import AppLayout from "../../../Layouts/AppLayout";
import { usePage } from "@inertiajs/react";

const UpdateProduct = () => {
  const { props } = usePage();
  const { product } = props;
  const [formData, setFormData] = useState({
    name: product.name,
    price: product.price,
    // image: null,
  });
  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    setImages([...e.target.files]); // Store all selected files
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    // data.append("image", formData.image);
    images.forEach((file) => {
      data.append("images[]", file); // Append each image file to FormData
    });
    Inertia.post(`/admin/product/update/${product.id}`, data);
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
          UPDATE PRODUCT
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
            <input
              accept="image/*"
              type="file"
              multiple
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

export default UpdateProduct;
