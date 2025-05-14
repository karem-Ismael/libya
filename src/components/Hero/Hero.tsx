"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const carouselItems = [
  {
    image:  "/libya.png",
    title: "مركز الدراسات الإسلامية",
    subtitle: "نشر وتحقيق المخطوطات القرآنية",
  },
  {
    image:  "/libya.png",
    title: "تراث إسلامي عريق",
    subtitle: "حفظ وتوثيق التراث الإسلامي",
  },
  {
    image: "/libya.png",
    title: "خدمة القرآن الكريم",
    subtitle: "رعاية وطباعة المصاحف الشريفة",
  },
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = carouselItems.length;

  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => (prevStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "700px",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <AutoPlaySwipeableViews
        axis="x"
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={6000}
      >
        {carouselItems.map((item, index) => (
          <div key={index}>
            <Box
              sx={{
                height: "700px",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                },
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
              <Container
                maxWidth="xl"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Typography
                  variant="h1"
                  color="white"
                  sx={{
                    fontSize: { xs: "2rem", md: "3rem" },
                    fontWeight: 700,
                    textAlign: "right",
                    mb: 2,
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h2"
                  color="white"
                  sx={{
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    fontWeight: 500,
                    textAlign: "right",
                    opacity: 0.9,
                  }}
                >
                  {item.subtitle}
                </Typography>
              </Container>
            </Box>
          </div>
        ))}
      </AutoPlaySwipeableViews>

      {/* Navigation Arrows */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 16, md: 40 },
          bottom: 24,
          display: "flex",
          gap: 1,
          zIndex: 2,
          bgcolor: "#F4F7FA",
          width: 103,
          height: 41.63,
          borderRadius: "4px",
        }}
      >
        <IconButton
          sx={{
            width: 40,
            height: 40,
            color: "#A08957",
            "&:hover": {
              bgcolor: "transparent",
            },
            "& .MuiSvgIcon-root": {
              width: "22px",
              height: "15px",
              strokeWidth: 2,
              stroke: "currentColor",
              fill: "none",
            },
          }}
          onClick={handleBack}
        >
          <ArrowRightAltIcon />
        </IconButton>
        <IconButton
          sx={{
            width: 40,
            height: 40,
            color: "#B9C0C9",
            "&:hover": {
              bgcolor: "transparent",
            },
            "& .MuiSvgIcon-root": {
              width: "22px",
              height: "15px",
              strokeWidth: 2,
              stroke: "currentColor",
              fill: "none",
            },
          }}
          onClick={handleNext}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Box>

      {/* Carousel Indicators */}
      <Box
        sx={{
          position: "absolute",
          bottom: 24,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: 1,
          zIndex: 2,
        }}
      >
        {carouselItems.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 32,
              height: 4,
              bgcolor:
                index === activeStep ? "#A08957" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onClick={() => handleStepChange(index)}
          />
        ))}
      </Box>
    </Box>
  );
}
