"use client";

import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";
import Image from "next/image";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProductGrid from "../firstTab";
import { QuranGrid1 } from "@/app/quranic-works/lagnaproductis";
import Reasearches from "../Researches";

const projects = [
  {
    id: 1,
    title: "برنامج وتطبيقات",
    description: "تطبيق شامل للقرآن الكريم يجمع بين سهولة الاستخدام وتعدد المميزات لتسهيل قراءة القرآن الكريم وتدبره",
    image: "/phone.png"
  },
  {
    id: 2,
    title: "تطبيق للهواتف",
    description: "تطبيق شامل للقرآن الكريم يجمع بين سهولة الاستخدام وتعدد المميزات لتسهيل قراءة القرآن الكريم وتدبره",
    image: "/phone.png"
  },
  {
    id: 3,
    title: "مصحف إلكتروني بعدة روايات",
    description: "تطبيق شامل للقرآن الكريم يجمع بين سهولة الاستخدام وتعدد المميزات لتسهيل قراءة القرآن الكريم وتدبره",
    image: "/phone.png"
  },
  {
    id: 4,
    title: "مصحف الأوقاف الليبي المطبوع",
    description: "تطبيق شامل للقرآن الكريم يجمع بين سهولة الاستخدام وتعدد المميزات لتسهيل قراءة القرآن الكريم وتدبره",
    image: "/phone.png"
  }
];

export default function CurrentWorks() {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: "secondary.main",
            fontWeight: 600,
          }}
        >
          الأعمال القرآنية
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="قائمة الأعمال القرآنية"
            sx={{
              '& .MuiTabs-flexContainer': {
                justifyContent: 'center',
              },
              '& .MuiTab-root': {
                color: '#777',
                fontWeight: 500,
                fontSize: '20px',
                mx: 1,
                py: 1,
                px: 2,
                borderRadius: '4px',
                background:"#F6F3EE",
                '&.Mui-selected': {
                  color: '#fff',
                  backgroundColor: '#b5a36a',
                }
              },
              mb: 6
            }}
          >
            <Tab label="إصدارات مصحف الأوقاف الليبية" value={0} />
            <Tab label="المصاحف المعروضة على اللجنة" value={1} />
            <Tab label="الأعمال التقنية" value={2} />
            <Tab label="الدراسات والأبحاث والمقالات" value={3} />
          </Tabs>
        </Box>

        {activeTab === 2 && (
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
             <Grid container spacing={3}>
              {[
                { id: 1, title: "برنامج وتطبيقات", icon: "1" },
                { id: 2, title: "تطبيق للهواتف", icon: "2" },
                { id: 3, title: "مصحف إلكتروني بعدة روايات", icon: "3" },
                { id: 4, title: "مصحف الأوقاف الليبي المطبوع", icon: "4" }
              ].map((item) => (
                <Grid item xs={12} key={item.id}>
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 2.5, 
                      borderRadius: 1,
                      backgroundColor: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 1
                    }}
                  >
                    <Box sx={{ 
                      width: 28, 
                      height: 28, 
                      borderRadius: '50%', 
                      backgroundColor: '#b5a36a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '0.9rem'
                    }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#333', fontSize: '1.1rem' }}>
                      {item.title}
                    </Typography>
                   
                  </Paper>
                  <Box sx={{ 
                    p: 2.5, 
                    color: '#666',
                    fontSize: '0.95rem',
                    lineHeight: 1.6
                  }}>
                    تطبيق شامل للقرآن الكريم يجمع بين سهولة الاستخدام وتعدد المميزات لتسهيل قراءة القرآن الكريم وتدبره
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6, flexDirection: 'column', alignItems: 'center' }}>
              <Image
                src="/phone.png" 
                alt="تطبيقات القرآن الكريم"
                width={800}
                height={400}
                style={{ objectFit: 'contain' }}
              />
              
              <Box 
                component="a" 
                href="#" 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: '#b5a36a',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  marginTop: 2,
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                اطلع على المزيد
                <ArrowBackIcon sx={{ ml: 0.5, fontSize: 16 }} />
              </Box>
            </Box>

           
          </Box>
        )}
        {
          activeTab ==0 &&(
            <ProductGrid  />
          )
        }
        {
          activeTab ==1 &&(
            <QuranGrid1  />
          )
        }
        {
          activeTab ==3 &&(
            <Reasearches  />
          )
        }
      </Box>
    </Container>
  );
}
