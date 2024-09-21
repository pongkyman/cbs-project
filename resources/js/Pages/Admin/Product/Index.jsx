import React from "react";
import { usePage } from "@inertiajs/react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { Inertia } from "@inertiajs/inertia";
import AppLayout from "../../../Layouts/AppLayout";

const ProductIndex = () => {
  const { props } = usePage();
  const { products } = props;

  const handleUpdate = (id) => {
    Inertia.visit(`/admin/product/update/${id}`);
  };
  const handleCreate = () => {
    Inertia.visit(`/admin/product/create`);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      Inertia.delete(`/admin/product/delete/${id}`);
    }
  };

  return (
    <AppLayout isAdmin={true} title="Products">
      <Box sx={{ padding: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: "20px",
            alignItems: "center",
          }}>
          <Box
            component="div"
            sx={{
              fontSize: "8vw",
              textAlign: "center",
              fontWeight: "900",
              color: "#FF4E00",
            }}>
            PRODUCTS
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#009B88",
              height: "max-content",
              fontWeight: "900",
              fontSize: "25px",
            }}
            onClick={() => handleCreate()}>
            Create New
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product, index) => (
                <TableRow
                  key={product.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  }}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>
                    {product.images ? (
                      (() => {
                        const imagesArray = JSON.parse(product.images); // Parse the JSON string to an array
                        return imagesArray.length > 0 ? (
                          <Box sx={{ display: "flex", gap: "10px" }}>
                            {imagesArray.map((image, index) => (
                              <Box
                                key={index}
                                component="img"
                                src={`/images/${image}`}
                                alt={`${product.name} - ${index + 1}`}
                                sx={{ width: "100px" }}
                              />
                            ))}
                          </Box>
                        ) : (
                          <Typography variant="body2">
                            No images available
                          </Typography>
                        );
                      })()
                    ) : (
                      <Typography variant="body2">
                        No images available
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleUpdate(product.id)}
                      sx={{ marginRight: "0.5rem" }}>
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(product.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </AppLayout>
  );
};

export default ProductIndex;
