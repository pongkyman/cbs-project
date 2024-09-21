import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";

const AppLayout = ({ children, isAdmin, title }) => {
  return (
    <>
      <Head title={title} />
      <div
        className="app-layout"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#FFF5D4",
          fontFamily: "'Kulim Park', sans-serif", // Correctly apply the font family
          "&:selection": {
            color: "red",
            background: "yellow",
          },
        }}>
        <main style={{ flex: 1 }}>{children}</main>
        {!isAdmin && <Footer />}
      </div>
    </>
  );
};

export default AppLayout;
