"use client";
import { createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titleArabic: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    titleArabic?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titleArabic: true;
  }
}


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1300, // Changed from default 1536px to 1300px
    },
  },
  direction: "rtl",
  palette: {
    primary: {
      main: "#B39B65", // The golden color from the design
      light: "#C4B08C",
      dark: "#8A7545",
    },
    secondary: {
      main: "#4A4A4A",
      light: "#6C6C6C",
      dark: "#2D2D2D",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "var(--font-sst-arabic)",
    h1: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.5,
    },
    h2: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "1rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontFamily: "var(--font-sst-arabic)",
      fontSize: "0.875rem",
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      fontFamily: "var(--font-sst-arabic)",
      fontWeight: 500,
      fontSize: "0.875rem",
      textTransform: "none",
    },
    titleArabic: {
      fontFamily: "var(--font-sst-arabic)",
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: '100%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 24px",
          fontFamily: "var(--font-sst-arabic)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          titleArabic: "h3",
        },
      },
    },
  },
});

export default theme;
