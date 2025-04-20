"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Button,
  TextField,
  Divider,
  InputBase,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Image from "next/image";

// Custom X (Twitter) icon component
const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  mainSection: [
    { title: "الصفحات الرئيسية", href: "#" },
    { title: "ترتيب المصحف", href: "#" },
    { title: "القرآن الكريم", href: "#" },
    { title: "المخطوطات الكريمية", href: "#" },
    { title: "طباعة القرآن الكريم", href: "#" },
    { title: "الدروس المرئية", href: "#" },
    { title: "تواصل معنا", href: "#" },
  ],
  committee: [
    { title: "اللجنة الدائمة", href: "#" },
    { title: "مركز ليبيا الفتوى", href: "#" },
    { title: "نبذة عن اللجنة", href: "#" },
    { title: "الرؤية والرسالة", href: "#" },
    { title: "أهداف اللجنة", href: "#" },
    { title: "الهيكل التنظيمي", href: "#" },
    { title: "سياسة الخصوصية", href: "#" },
  ],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#B39B65",
        color: "#333",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Right Section - Organization Info */}
          <Grid item xs={12} md={3} order={{ xs: 1, md: 1 }}>
            <Box sx={{ textAlign: "right" }}>
              <Image
                src="/logo2.png"
                alt="Organization Logo"
                width={280}
                height={100}
                style={{ objectFit: "contain" }}
              />
              <Typography 
                sx={{ 
                  mt: 2, 
                  mb: 1,
                  fontSize: '0.95rem',
                  lineHeight: 1.6
                }}
              >
                مؤسسة قرآنية مرجعية، تعمل على حفظ كتاب الله سبحانه،
                وصونه من التحريف ونشره بمختلف الوسائل التقنية المتاحة،
                ووفق أعلى معايير الدقة والضبط.
              </Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
                <IconButton 
                  sx={{ 
                    color: '#333',
                    '&:hover': { color: 'white' }
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: '#333',
                    '&:hover': { color: 'white' }
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: '#333',
                    '&:hover': { color: 'white' }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  sx={{ 
                    color: '#333',
                    '&:hover': { color: 'white' }
                  }}
                >
                  <XIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Middle Section - Main Links */}
          <Grid item xs={12} md={3} order={{ xs: 3, md: 2 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              الصفحات الرئيسية
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.mainSection.map((link) => (
                <Box component="li" key={link.href} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    sx={{ 
                      textDecoration: "none", 
                      color: '#333',
                      fontSize: '0.9rem',
                      "&:hover": { 
                        opacity: 0.8,
                        textDecoration: 'underline'
                      } 
                    }}
                  >
                    {link.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Committee Section */}
          <Grid item xs={12} md={3} order={{ xs: 4, md: 3 }}>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              اللجنة الدائمة
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              {footerLinks.committee.map((link) => (
                <Box component="li" key={link.href} sx={{ mb: 1 }}>
                  <Link
                    href={link.href}
                    sx={{ 
                      textDecoration: "none", 
                      color: '#333',
                      fontSize: '0.9rem',
                      "&:hover": { 
                        opacity: 0.8,
                        textDecoration: 'underline'
                      } 
                    }}
                  >
                    {link.title}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>
          
          {/* Left Section - Subscribe Form */}
          <Grid item xs={12} md={3} order={{ xs: 2, md: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Box 
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  mb: 2
                }}
              >
                <IconButton
                  sx={{
                    bgcolor: 'white',
                    width: 60,
                    height: 60,
                    mb: 2,
                    '&:hover': {
                      bgcolor: 'white',
                    }
                  }}
                >
                  <MailOutlineIcon sx={{ fontSize: 28, color: '#B39B65' }} />
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                    color: '#333'
                  }}
                >
                  اشترك في القائمة البريدية
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#333',
                    mb: 2,
                    fontSize: '0.875rem'
                  }}
                >
                  اشترك في النشرة الإخبارية ليصلك كل ما هو جديد
                </Typography>
              </Box>
              
              <Box 
                sx={{ 
                  display: 'flex',
                  alignItems: 'center',
                  mb: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '4px',
                  p: 0.5,
                }}
              >
                <InputBase
                  placeholder="أدخل بريدك الإلكتروني"
                  sx={{
                    flex: 1,
                    fontSize: '0.875rem',
                    pl: 1,
                    color: '#333',
                    '&::placeholder': {
                      color: '#555',
                      opacity: 1,
                    },
                  }}
                />
              </Box>
              
              <Button
                variant="contained"
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  color: '#333',
                  width: '120px',
                  borderRadius: '20px',
                  fontSize: '0.875rem',
                  '&:hover': {
                    bgcolor: 'white',
                  }
                }}
              >
                اشتراك
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
