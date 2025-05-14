"use client";

import React from "react";
import { Box, Container, Button, Typography, Grid } from "@mui/material";
import Image from "next/image";

export default function Actions() {
  const actions = [
    { title: "نبذة عن اللجنة", href: "#" },
    { title: "مهام اللجنة", href: "#" },
    { title: "الرؤية والرسالة", href: "#" },
    { title: "أعضاء اللجنة", href: "#" },
  ];

  return (
    <Box sx={{ backgroundColor: "#EDE7DB" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            py: 6,
          }}
        >
          {/* Left side - Content */}
          <Box
            sx={{
              width: { xs: '100%', md: '65%' },
              textAlign: 'right',
              order: { xs: 2, md: 1 },
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                mb: 2,
                color: '#000',
                fontWeight: 600,
                fontSize:"32px"
              }}
            >
              تعرّف على اللجنة الدائمة لمراجعة وإعداد المصاحف
            </Typography>
            
            <Typography
              sx={{
                mb: 4,
                color: '#666',
                fontSize:"24px"
              }}
            >
              هي لجنة علمية مؤلفة من جملة من الخبراء والمختصين في مجال حفظ القرآن الكريم وقراءاته ورسمه وضبطه ومختلف علومه.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                color: '#B39B65',
              }}
            >
              <Button
                sx={{
                  color: '#B39B65',
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                 المزيد ←
              </Button>
            </Box>
            <Grid container spacing={2}>
              {actions.map((action, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Button
                    fullWidth
                    href={action.href}
                    sx={{
                      height: "117px",
                      backgroundColor: "white",
                      color: "#000",
                      fontWeight: 400,
                      fontSize: "32px", 
                      textAlign: "center",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                      borderRadius: "4px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "white",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                      },
                    }}
                  >
                    {action.title}
                  </Button>
                </Grid>
              ))}
            </Grid>

       
          </Box>

          {/* Right side - Image */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              order: { xs: 1, md: 2 },
            }}
          >
            <Image
              src="/second.png"
              alt="Committee Meeting"
              width={600}
              height={400}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
