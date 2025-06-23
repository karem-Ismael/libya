"use client";

import React from "react";
import styles from './page.module.css';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  InputBase,
  useMediaQuery,
  Collapse,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import TopBar from "../TopBar/TopBar";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { usePathname } from 'next/navigation'

const navItems = [
  { title: "الرئيسية", href: "/", active: true },
  { title: "اللجنة الدائمة", href: "/permanent-committee" },
  { title: "المعايير والسياسات", href: "/standards-policies" },
  { title: "الأعمال القرآنية", href: "/quranic-works" },
  { title: "مبيعات المصاحف", href: "/quran-sales" },
  { title: "المركز الإعلامي", href: "/Media" },
  { title: "تواصل معنا", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <>
      <TopBar />
      <Box sx={{ flexGrow: 1 }}>
        {/* Logo Section */}
        <Box
          sx={{
            height: { xs: 80, sm: 100, md: 121 },
            borderBottom: "1px solid #D9D9D9",
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
              height: "100%",
              px: { xs: 2, sm: 3 },
            }}
            className={styles.header}
          >
            {/* Logo */}
            <Box 
              sx={{ 
                width: { xs: 200, sm: 280, md: 375 }, 
                height: { xs: 45, sm: 60, md: 83 }, 
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="Logo"
                width={375}
                height={83}
                priority
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
              />
            </Box>
            
            {/* Desktop Social Media Icons */}
            <Box 
              sx={{ 
                display: { xs: "none", md: "flex" }, 
                alignItems: "center" 
              }}
            >
              <SocialMediaIcons />
            </Box>
            
            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#545E69",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Container>
        </Box>

        {/* Navigation Section - Desktop */}
        <Box
          sx={{
            height: { xs: "auto", md: 70 },
            bgcolor: "common.white",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.10)",
            display: { xs: "none", md: "block" },
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                px: { md: 0, lg: 2 },
              }}
            >
              {/* Navigation Items */}
              <Box 
                sx={{ 
                  display: "flex", 
                  gap: { md: 2, lg: 4 }, 
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: mounted && item.href === pathname ? "primary.main" : "#545E69",
                        fontSize: { md: 16, lg: 18, xl: 20 },
                        fontFamily: "var(--font-cairo)",
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                        "&:hover": {
                          color: "primary.main",
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Link>
                ))}
              </Box>

              {/* Search Bar - Desktop */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 12px",
                  minWidth: { md: 200, lg: 250 },
                }}
              >
                <InputBase
                  placeholder="ابحث عما تريد . . ."
                  sx={{
                    color: "#545E69",
                    fontSize: { md: 14, lg: 16 },
                    border: "none",
                    fontWeight: 400,
                    width: "100%",
                    "& input::placeholder": {
                      color: "#545E69",
                      opacity: 1,
                    },
                    "& input": {
                      textAlign: "right",
                    },
                  }}
                />
                <IconButton
                  sx={{
                    padding: "4px",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <SearchIcon sx={{ color: "#A08957" }} />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Mobile Search Bar */}
        <Collapse in={searchOpen}>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
              bgcolor: "#f5f5f5",
              p: 2,
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <InputBase
                placeholder="ابحث عما تريد . . ."
                sx={{
                  color: "#545E69",
                  fontSize: 16,
                  border: "1px solid #ddd",
                  borderRadius: 1,
                  px: 2,
                  py: 1,
                  bgcolor: "white",
                  width: "100%",
                  "& input::placeholder": {
                    color: "#545E69",
                    opacity: 1,
                  },
                  "& input": {
                    textAlign: "right",
                  },
                }}
              />
              <IconButton onClick={handleSearchToggle} sx={{ ml: 1 }}>
                <CloseIcon sx={{ color: "#545E69" }} />
              </IconButton>
            </Box>
          </Box>
        </Collapse>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: { xs: "100%", sm: 300 },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
              pb: 2,
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              القائمة
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Search Button in Mobile Menu */}
          <Box sx={{ mb: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<SearchIcon />}
              onClick={() => {
                setSearchOpen(true);
                setMobileOpen(false);
              }}
              sx={{
                justifyContent: "flex-start",
                textAlign: "right",
                borderColor: "#A08957",
                color: "#A08957",
              }}
            >
              البحث
            </Button>
          </Box>

          {/* Navigation Items */}
          <List sx={{ p: 0 }}>
            {navItems.map((item) => (
              <ListItem
                key={item.href}
                component={Link}
                href={item.href}
                onClick={handleDrawerToggle}
                sx={{
                  py: 2,
                  px: 1,
                  borderRadius: 1,
                  mb: 1,
                  bgcolor: mounted && item.href === pathname ? "primary.light" : "transparent",
                  "&:hover": {
                    bgcolor: "primary.light",
                  },
                }}
              >
                <ListItemText
                  primary={item.title}
                  sx={{
                    textAlign: "right",
                    "& .MuiListItemText-primary": {
                      fontSize: 18,
                      fontWeight: 600,
                      color: mounted && item.href === pathname ? "primary.main" : "#545E69",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>

          {/* Social Media Icons in Mobile Menu */}
          <Box
            sx={{
              mt: 4,
              pt: 2,
              borderTop: "1px solid #e0e0e0",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SocialMediaIcons />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
