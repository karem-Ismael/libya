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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import TopBar from "../TopBar/TopBar";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { Height } from "@mui/icons-material";
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const  pathname =usePathname()
  console.log(pathname ,"rrr")
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <TopBar />
      <Box sx={{ flexGrow: 1 }}>
        {/* Logo Section */}
        <Box
          sx={{
            height: 121,
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
            }}
            className={styles.header}

          >
            <Box sx={{ width: 375, height: 83, overflow: "hidden" }}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={375}
                height={83}
                priority
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <SocialMediaIcons />
            </Box>
          </Container>
        </Box>

        {/* Navigation Section */}
        <Box
          sx={{
            height: 70,
            bgcolor: "common.white",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.10)",
          }}
        >
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "100%",
              }}
            >
              {/* Navigation Items */}
              <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
                {navItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        color: item.href === pathname ? "primary.main" : "#545E69",
                        fontSize: 20,
                        fontFamily: "var(--font-cairo)",
                        fontWeight: 700,
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

              {/* Search Bar */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "4px 12px",
                }}
              >
                <InputBase
                  placeholder="ابحث عما تريد . . ."
                  sx={{
                    color: "#545E69",
                    fontSize: 16,
                    border:"none",
                    fontWeight: 400,
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

              {/* Mobile Menu Button */}
              <IconButton
                sx={{
                  display: { xs: "flex", md: "none" },
                  width: 70,
                  height: 70,
                  borderLeft: "1px solid #D9D9D9",
                  borderRight: "1px solid #D9D9D9",
                  borderRadius: 0,
                }}
              >
                <MenuIcon sx={{ color: "#545E69" }} />
              </IconButton>
            </Box>
          </Container>
        </Box>
      </Box>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} component="a" href={item.href}>
                <ListItemText primary={item.title} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
