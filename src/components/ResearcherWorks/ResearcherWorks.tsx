"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Image from "next/image";

const quranCopies = [
  {
    id: 1,
    title: "المصحف العادي الفاخر",
    image: "/books.png",
  },
  {
    id: 2,
    title: "المصحف الكبير",
    image: "/books.png",
  },
  {
    id: 3,
    title: "المصحف العادي",
    image: "/books.png",
  },
];

export default function ResearcherWorks() {
  return (
    <Box sx={{ backgroundColor: "#f9f7f2", py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Right side - Text content */}
          <Box sx={{ flex: 1, textAlign: 'right' }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                mb: 3,
                color: "#333",
                fontWeight: 600,
              }}
            >
              مبيعات المصاحف
            </Typography>

            <Typography variant="body1" sx={{ mb: 4, color: '#555', lineHeight: 1.8 }}>
              هي نسخة مطبوعة موثوقة من المصحف الشريف، والتي تتميز في دقة ضبط القرآن الكريم وإخراجه وطباعته وتجليده بشكل أنيق ومتقن.
            </Typography>

            <Button 
              variant="text" 
              endIcon={<ArrowBackIcon />}
              sx={{ 
                color: '#b5a36a', 
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline'
                }
              }}
            >
              اقرأ المزيد
            </Button>
          </Box>

          {/* Left side - Quran copies */}
          <Box sx={{ flex: 2 }}>
            <Grid container spacing={3}>
              {quranCopies.map((copy) => (
                <Grid item xs={12} sm={4} key={copy.id}>
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    textAlign: 'center'
                  }}>
                    <Box 
                      sx={{ 
                        position: 'relative',
                        width: '100%',
                        height: 200,
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)'
                        }
                      }}
                    >
                      <Image
                        src={copy.image}
                        alt={copy.title}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: '#333',
                        fontSize: '1rem'
                      }}
                    >
                      {copy.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
