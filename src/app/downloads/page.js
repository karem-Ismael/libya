"use client";

import React from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./downloads.module.css";

export default function DownloadsPage() {
  return (
    <>
      <Header />
      
      <Box className={styles.mainContainer}>
        <Container maxWidth="xl">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6} className={styles.textContent}>
              <Box className={styles.appInfo}>
                <Box className={styles.logoContainer}>
                  <Image 
                    src="/app-logo.png" 
                    alt="شعار التطبيق" 
                    width={80} 
                    height={80}
                    className={styles.appLogo}
                  />
                </Box>
                
                <Typography variant="h4" component="h1" className={styles.appTitle}>
                  تطبيق: مصحف الأوقاف الليبية
                </Typography>
                
                <Typography variant="h6" component="h2" className={styles.appSubtitle}>
                  (رواية قالون) الإصدار الثاني
                </Typography>
                
                <Typography variant="body1" className={styles.appDescription}>
                  هو النسخة الإلكترونية الرسمية للمصحف المعتمد من الهيئة
                  العامة للأوقاف والشؤون الإسلامية بمصحف الأوقاف
                  برواية قالون عن نافع برسم الإمام المدني والتي
                  خصصت لجميع الوظائف التقنية.
                </Typography>
                
                <Box className={styles.downloadButtons}>
                  <Button 
                    variant="contained" 
                    className={styles.downloadButton}
                    startIcon={
                      <Image 
                        src="/apple-logo.png" 
                        alt="App Store" 
                        width={24} 
                        height={24}
                      />
                    }
                  >
                    Download on the App Store
                  </Button>
                  
                  <Button 
                    variant="contained" 
                    className={styles.downloadButton}
                    startIcon={
                      <Image 
                        src="/google-play.png" 
                        alt="Google Play" 
                        width={24} 
                        height={24}
                      />
                    }
                  >
                    GET IT ON Google Play
                  </Button>
                </Box>
              </Box>
            </Grid>
            
            <Grid item xs={12} md={6} className={styles.imageContent}>
              <Box className={styles.phonesContainer}>
                <Image 
                  src="/app-screenshot.png" 
                  alt="تطبيق مصحف الأوقاف الليبية" 
                  width={600} 
                  height={500}
                  className={styles.phoneImage}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <Footer />
    </>
  );
}