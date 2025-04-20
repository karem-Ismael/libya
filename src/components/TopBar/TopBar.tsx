"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

export default function TopBar() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 50,
        bgcolor: "primary.main",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          startIcon={<LanguageIcon />}
          sx={{
            color: "common.white",
            textTransform: "none",
            fontSize: 14,
            fontFamily: "var(--font-cairo)",
            fontWeight: 400,
          }}
        >
          اللغة العربية
        </Button>

        <Typography
          variant="body2"
          color="common.white"
          sx={{
            fontSize: 14,
            fontFamily: "var(--font-cairo)",
            fontWeight: 400,
            direction: "rtl",
          }}
        >
          {new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date())}{" "}
          هـ ::{" "}
          {new Intl.DateTimeFormat("ar", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date())}{" "}
          م
        </Typography>
      </Container>
    </Box>
  );
}
