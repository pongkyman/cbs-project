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

const TestimonyIndex = () => {
  const { props } = usePage();
  const { testimonies } = props;

  const handleUpdate = (id) => {
    Inertia.visit(`/admin/testimony/update/${id}`);
  };
  const handleCreate = () => {
    Inertia.visit(`/admin/testimony/create`);
  };

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this testimony?")) {
      Inertia.delete(`/admin/testimony/delete/${id}`);
    }
  };

  return (
    <AppLayout isAdmin={true} title="Testimonies">
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
            TESTIMONIES
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
                <TableCell>Age</TableCell>
                <TableCell>Testimony</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testimonies.map((testimony, index) => (
                <TableRow
                  key={testimony.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  }}>
                  <TableCell>{testimony.name}</TableCell>
                  <TableCell>{testimony.age}</TableCell>
                  <TableCell>{testimony.testimony}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleUpdate(testimony.id)}
                      sx={{ marginRight: "0.5rem" }}>
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(testimony.id)}>
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

export default TestimonyIndex;
