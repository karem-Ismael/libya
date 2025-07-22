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
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";
import TopBar from "../TopBar/TopBar";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { usePathname } from 'next/navigation'

const navItems = [
  { title: "الرئيسية", href: "/", active: true },
  { 
    title: "اللجنة الدائمة", 
    href: "/permanent-committee",
    dropdown: [
      { title: "نبذة عن اللجنة", href: "/permanent-committee" },
      { title: " الرؤية و الرسالة", href: "/permanent-committee" },
      { title: "مهام اللجنة", href: "/permanent-committee" },
      { title: "الهيكل التنظيمي", href: "/permanent-committee" },
      { title: " أعضاء اللجنة", href: "/permanent-committee" },

    ]
  },
  { title: "المعايير والسياسات", href: "/standards-policies" },
  { 
    title: "الأعمال القرآنية", 
    href: "/quranic-works",
    dropdown: [
      { title:  'إصدارات مصحف الأوقاف الليبية', href: "/quranic-works/0" },
      { title:  'المصاحف المعروضة على اللجنة', href: "/quranic-works/1" },
      { title:'الأعمال التقنية', href: "/quranic-works/2" },
      { title:  'الدراسات والأبحاث والمقالات', href: "/quranic-works/3" },
    ]
  },
  { title: "مبيعات المصاحف", href: "/quran-sales" },
  { 
    title: "المركز الإعلامي", 
    href: "/Media",
    dropdown: [
      { title: "أخبار و أنشطة", href: "/Media" },
      { title: "مكتبة الوسائط", href: "/Media" },
      { title: "الأسئلة الشائعة", href: "/Media" },
    ]
  },
  { title: "تواصل معنا", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [activeDropdown, setActiveDropdown] = React.useState<number | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
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

  const handleDropdownOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setActiveDropdown(index);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
    // setActiveDropdown(null);
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
                display: { xs: "none", lg: "flex" }, // Changed from "md" to "lg"
                alignItems: "center" 
              }}
            >
              <SocialMediaIcons />
            </Box>
            
            {/* Mobile Menu Button */}
            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "flex", lg: "none" }, // Changed from "md" to "lg"
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
            height: { xs: "auto", lg: 70 }, // Changed from "md" to "lg"
            bgcolor: "common.white",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.10)",
            display: { xs: "none", lg: "block" }, // Changed from "md" to "lg"
            overflow: "hidden", // Prevent content overflow
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
                px: { lg: 1, xl: 2 }, // Reduced padding for better space utilization
                minHeight: 70,
              }}
            >
              {/* Navigation Items */}
              <Box 
                sx={{ 
                  display: "flex", 
                  gap: { lg: 1.5, xl: 2.5 },
                  alignItems: "center",
                  flexWrap: "nowrap",
                  overflow: "hidden",
                  flex: 1,
                  justifyContent: "flex-start",
                }}
              >
                {navItems.map((item, index) => {
                  if ((index === 1 || index === 3 || index === 5) && item.dropdown) {
                    // Render dropdown for index 1, 3, and 5
                    return (
                      <Box key={item.title} sx={{ flexShrink: 0 }}>
                        <Button
                          onMouseEnter={(e) => handleDropdownOpen(e, index)}
                          // onMouseLeave={handleDropdownClose}
                          endIcon={<ExpandMoreIcon />}
                          sx={{
                            color: mounted && (item.href === pathname || item.dropdown.some(subItem => subItem.href === pathname)) ? "primary.main" : "#545E69",
                            fontSize: { lg: 14, xl: 16 },
                            fontFamily: "var(--font-cairo)",
                            fontWeight: 700,
                            textTransform: "none",
                            minWidth: "auto",
                            padding: "6px 8px",
                            cursor:"pointer",
                            "&:hover": {
                              color: "primary.main",
                              backgroundColor: "transparent",
                            },
                            transition: "color 0.2s ease",
                          }}
                        >
                          {item.title}
                        </Button>
                        <Menu
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl) && activeDropdown === index}
                          onClose={handleDropdownClose}
                          MenuListProps={{
                            onMouseEnter: () => {
                              if (activeDropdown === index) {
                                setAnchorEl(anchorEl);
                              }
                            },
                            onMouseLeave: handleDropdownClose,
                          }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                          sx={{
                            '& .MuiPaper-root': {
                              minWidth: 200,
                              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                              borderRadius: 2,
                              mt: 1,
                            }
                          }}
                        >
                          {item.dropdown.map((subItem) => (
                            <MenuItem
                              key={subItem.href}
                              component={Link}
                              href={subItem.href}
                              onClick={handleDropdownClose}
                              sx={{
                                fontFamily: "var(--font-cairo)",
                                fontSize: 14,
                                fontWeight: 600,
                                color: mounted && subItem.href === pathname ? "primary.main" : "#545E69",
                                textAlign: "right",
                                direction: "rtl",
                                "&:hover": {
                                  backgroundColor: "primary.light",
                                  color: "primary.main",
                                },
                              }}
                            >
                              {subItem.title}
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    );
                  } else {
                    // Render regular navigation item
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        style={{ textDecoration: "none", flexShrink: 0 }}
                      >
                        <Typography
                          sx={{
                            color: mounted && item.href === pathname ? "primary.main" : "#545E69",
                            fontSize: { lg: 14, xl: 16 },
                            fontFamily: "var(--font-cairo)",
                            fontWeight: 700,
                            whiteSpace: "nowrap",
                            "&:hover": {
                              color: "primary.main",
                            },
                            transition: "color 0.2s ease",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Link>
                    );
                  }
                })}
              </Box>

              {/* Search Bar - Desktop */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 12px",
                  minWidth: { lg: 180, xl: 220 }, // Reduced width for better space management
                  maxWidth: { lg: 200, xl: 250 },
                  flexShrink: 0, // Prevent shrinking
                }}
              >
                <InputBase
                  placeholder="ابحث عما تريد . . ."
                  sx={{
                    color: "#545E69",
                    fontSize: { lg: 13, xl: 15 }, // Reduced font size
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
                  <SearchIcon sx={{ color: "#A08957", fontSize: { lg: 20, xl: 24 } }} />
                </IconButton>
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Mobile Search Bar */}
        <Collapse in={searchOpen}>
          <Box
            sx={{
              display: { xs: "block", lg: "none" }, // Changed from "md" to "lg"
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
          display: { xs: "block", lg: "none" }, // Changed from "md" to "lg"
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
