"use client";

import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import MediaCorner from "@/components/MediaCorner/MediaCorner";
import { Box, Container } from "@mui/material";

export default function MediaPage() {
  return (
    <>
      <Header />
      
      
        <MediaCorner />
      
      <Footer />
    </>
  );
}