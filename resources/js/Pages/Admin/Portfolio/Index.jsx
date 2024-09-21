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
  InputAdornment,
} from "@mui/material";
import { Inertia } from "@inertiajs/inertia";
import AppLayout from "../../../Layouts/AppLayout";

const PorftolioIndex = () => {
  const { props } = usePage();
  const { portfolios } = props;

  const handleUpdate = (id) => {
    Inertia.visit(`/admin/portfolio/update/${id}`);
  };
  const handleCreate = () => {
    Inertia.visit(`/admin/portfolio/create`);
  };
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this portfolio?")) {
      Inertia.delete(`/admin/portfolio/delete/${id}`);
    }
  };

  return (
    <AppLayout isAdmin={true} title="Portfolios">
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
            PORTFOLIOS
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
                <TableCell>Image</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {portfolios.map((portfolio, index) => (
                <TableRow
                  key={portfolio.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  }}>
                  <TableCell>{portfolio.name}</TableCell>
                  <TableCell>
                    <Box
                      component="img"
                      src={`/images/${portfolio.image}`}
                      alt={portfolio.name}
                      sx={{ width: "100px" }}
                    />
                  </TableCell>
                  <TableCell>{portfolio.desc}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleUpdate(portfolio.id)}
                      sx={{ marginRight: "0.5rem" }}>
                      Update
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(portfolio.id)}>
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

export default PorftolioIndex;
