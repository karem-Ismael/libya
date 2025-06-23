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
    description: "إمكان الاستفادة من أحد العلماء في إنتاج حدث ناجس (مطابق) أحد أبرز وزارة قانون عن بلوغ",
    image: "/phone.png"
  },
  {
    id: 2,
    title: "الخطوط الحاسوبية",
    description: "إمكان الاستفادة من أحد العلماء في إنتاج حدث ناجس (مطابق) أحد أبرز وزارة قانون عن بلوغ",
    image: "/phone.png"
  },
  {
    id: 3,
    title: "مصحف المكفوفين بلغة (برايل)",
    description: "إمكان الاستفادة من أحد العلماء في إنتاج حدث ناجس (مطابق) أحد أبرز وزارة قانون عن بلوغ",
    image: "/phone.png"
  },
  {
    id: 4,
    title: "مصحف الأوقاف الأعمال الطباعة",
    description: "إمكان الاستفادة من أحد العلماء في إنتاج حدث ناجس (مطابق) أحد أبرز وزارة قانون عن بلوغ",
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
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'flex-start' }}>
            {/* Left side - Phone mockups */}
            <Box sx={{
              width: { xs: '100%', md: '40%' },
              flex: 1,
              order: { xs: 1, md: 1 }
            }}>
              <Grid 
              style={{width:"80%"}}
              spacing={3}>
                {projects.map((item, index) => (


                  <Grid item xs={12} key={item.id}>
                    <Box sx={{
                      position: 'relative',
                      '&:not(:last-child)::after': {
                        content: '""',
                        position: 'absolute',
                        width:"60%",
                        bottom:97,
                        left: 0,
                        right: 187,
                        margin:-15,
                        height: "1px",
                        backgroundColor: '#B9C0C9',
                      },
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 3,
                      mb: 4
                    }}>
                      {/* Number circle */}
                      <Box sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        backgroundColor: index ==0 ? "#A8905B" :'#f6f4ef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: index ==0 ? "#fff" :'#A8905B',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                        mt: 0.5
                      }}>
                        {item.id}
                      </Box>
                      
                      {/* Content */}
                      <Box sx={{ flex: 1 }}>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 600, 
                            color: '#333', 
                            fontSize: '1.2rem',
                            mb: 1,
                            textAlign: 'right'
                          }}
                        >
                          {item.title}
                        </Typography>
                        <Typography sx={{ 
                          color: '#666',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          textAlign: 'right'
                        }}>
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                    <p></p>

                  </Grid>
                ))}
              </Grid>
              
              {/* More link */}
            
            </Box>
            {/* Right side - Numbered items */}
           
            <Box sx={{
              width: { xs: '100%', md: '60%' },
              flex: 1, 
              justifyContent: 'center',
              order: { xs: 2, md: 1 }
            }}
            
            >
              <Box sx={{ position: 'relative', maxWidth: 600 }}>
                <Image
                  src="/phone.png" 
                  alt="تطبيقات القرآن الكريم"
                  width={600}
                  height={400}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
                />
              </Box>
              <Box sx={{textAlign:"left"}}>
              <Box 
                component="a" 
                href="#" 
                sx={{ 
                  alignItems: 'center', 
                  color: '#b5a36a',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  marginTop: 3,
                  justifyContent: 'flex-end',
                  '&:hover': {
                    textDecoration: 'underline'
                  }
                }}
              >
                المزيد
                <ArrowBackIcon sx={{ ml: 0.5, fontSize: 16 }} />
              </Box>
              </Box>
            
            </Box>

          </Box>
        )}
        
        {activeTab === 0 && (
          <ProductGrid />
        )}
        
        {activeTab === 1 && (
          <QuranGrid1 />
        )}
        
        {activeTab === 3 && (
          <Reasearches />
        )}
      </Box>
    </Container>
  );
}
