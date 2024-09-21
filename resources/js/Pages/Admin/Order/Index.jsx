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

const OrderIndex = () => {
  const { props } = usePage();
  const { orders } = props;

  console.log(orders);

  const handleUpdate = (id) => {
    Inertia.visit(`/admin/order/update/${id}`);
  };
  const handleCreate = () => {
    Inertia.visit(`/order`);
  };
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this order?")) {
      Inertia.delete(`/admin/order/delete/${id}`);
    }
  };

  const handleWa = (phone_number) => {
    // window.location.href = `https://wa.me/+62${phone_number}`; // Replace with your desired URL
    window.open(`https://wa.me/+62${phone_number}`, "_blank");
  };

  const statusLabels = {
    1: "New",
    5: "Ongoing",
    10: "Done",
  };
  const statusStyles = {
    1: { backgroundColor: "#7FFFD4" }, // Blue for new
    5: { backgroundColor: "#BACC81" }, // Yellow for ongoing
    10: { backgroundColor: "#98FF98" }, // Green for done
  };
  return (
    <AppLayout isAdmin={true} title="Orders">
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
            ORDERS
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
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Needs</TableCell>
                <TableCell>Meeting Date</TableCell>
                <TableCell>Time (Estimated)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow
                  key={order.id}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
                  }}>
                  <TableCell>{order.name}</TableCell>
                  <TableCell> +62 {order.phone_number}</TableCell>
                  <TableCell>{order.email}</TableCell>
                  <TableCell>{order.location}</TableCell>
                  <TableCell>{order.needs}</TableCell>
                  <TableCell>{order.meeting_date}</TableCell>
                  <TableCell>{order.estimated_time}</TableCell>
                  <TableCell
                    sx={{
                      backgroundColor:
                        statusStyles[order.status]?.backgroundColor || "white",
                    }}>
                    {statusLabels[order.status]}
                  </TableCell>
                  <TableCell>
                    {(order.status == 1 || order.status == 5) && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleUpdate(order.id)}
                        sx={{ margin: "0.5rem" }}>
                        Update
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ margin: "0.5rem" }}
                      onClick={() => handleDelete(order.id)}>
                      Delete
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      sx={{ margin: "0.5rem" }}
                      onClick={() => handleWa(order.phone_number)}>
                      WHATSAPP
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

export default OrderIndex;
