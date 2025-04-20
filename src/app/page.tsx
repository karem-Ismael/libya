"use client";

import React from "react";
import { Box } from "@mui/material";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Actions from "@/components/Actions/Actions";
import CurrentWorks from "@/components/CurrentWorks/CurrentWorks";
import ResearcherWorks from "@/components/ResearcherWorks/ResearcherWorks";
import MediaCorner from "@/components/MediaCorner/MediaCorner";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Hero />
      <Actions />
      <CurrentWorks />
      <ResearcherWorks />
      <MediaCorner />
      <Footer />
    </Box>
  );
}
