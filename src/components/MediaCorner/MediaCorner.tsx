"use client";

import React, { useState } from "react";
import styles from "./media.module.css";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Tabs,
  Tab,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم.",
    image: "/1.png",
    description: "الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم. الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم.",
    date: "15 Jan 2023",
  },
  {
    id: 2,
    title: "الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم.",
    image: "/2.png",
    description: "الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم. الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم.",
    date: "15 Jan 2023",
  },
  {
    id: 3,
    title: "الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم.",
    image: "/3.png",
    description: "الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم. الهيئة العامة للأوقاف تقيم مسابقة لتصميم هوية بصرية لـ جائزة ليبيا الدولية لحفظ القرآن الكريم.",
    date: "15 Jan 2023",
  },
];

export default function MediaCorner() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
const [activeMediaTab,setActiveMediaTab] = useState('images');
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "right", mb: 4 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: "#333",
              mb: 2,
            }}
          >
            المركز الإعلامي
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#666" }}>
            مؤسسة حكومية تُعنى بشؤون القرآن، والأوقاف، والمساجد، والشؤون الإسلامية.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            aria-label="media center tabs"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#b5a36a',
                height: 3,
              },
              '& .MuiTab-root': {
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 500,
                color: '#777',
                '&.Mui-selected': {
                  color: '#b5a36a',
                  fontWeight: 600,
                },
              },
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <Tab label="أخبار وأنشطة" />
            <Tab label="مكتبة الوسائط" />
            <Tab label="الأسئلة الشائعة" />
          </Tabs>
        </Box>

        {activeTab === 0 && (
          <Grid container spacing={4}>
            {newsItems.map((item) => (
              <Grid item xs={12} md={4} key={item.id}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                    border: "1px solid #eee",
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Box sx={{ position: "relative", height: 220 }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, textAlign: "right", p: 3 }}>
                    <Typography variant="caption" sx={{ color: "#999", display: "block", mb: 1 }}>
                      {item.date}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ 
                        fontWeight: 600, 
                        mb: 2,
                        fontSize: "1.1rem",
                        lineHeight: 1.4,
                        height: 60,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: "#666", 
                        mb: 3,
                        height: 60,
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {item.description}
                    </Typography>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <Button
                        sx={{ 
                          color: "#b5a36a", 
                          textTransform: "none",
                          fontWeight: 500,
                          p: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                          }
                        }}
                      >
                 المزيد←
                    
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

        {activeTab === 1 && (
          <Box sx={{ textAlign: "center", py: 6 }}>
<Box sx={{ width: '100%', mb: 4 }}>
  <Box sx={{ 
    display: 'flex', 
    justifyContent: 'center', 
    gap: 2, 
    position: 'relative',
    mb: 4 
  }}>
    <Button
      variant={String(activeTab) === '1' ? 'contained' : 'outlined'}
      onClick={() => setActiveMediaTab('images')}
      sx={{
        position: 'absolute',
        top: 0,
        left: '54%',  
        padding: '10px 40px',
        borderRadius: '30px',
        zIndex:"111",
        backgroundColor: activeMediaTab === 'images' ? '#b5a36a' : '#f6f3ee',
        color: activeMediaTab === 'images' ? 'white' : '#b5a36a',
        borderColor: "transparent",
        '&:hover': {
        }
      }}
    >
      مكتبة الصور
    </Button>
    <Button
      variant={activeMediaTab === 'videos' ? 'contained' : 'outlined'}
      onClick={() => setActiveMediaTab('videos')}
      sx={{
        backgroundColor: activeMediaTab === 'videos' ? '#b5a36a' : '#f6f3ee',
        color: activeMediaTab === 'videos' ? 'white' : '#b5a36a',
        borderRadius: '30px',
        padding: '10px 40px',
        borderColor: "transparent",

        '&:hover': {
        }
      }}
    >
      مكتبة المرئيات
    </Button>
  </Box>

  {activeMediaTab === 'images' && (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item}>
          <Card sx={{ height: '100%', boxShadow: 'none',background:"none" }}>
            <Box sx={{ position: 'relative', height: 200 }}>
              <Image
                src={`/media.png`}
                alt={`Gallery image ${item}`}
                fill
                style={{ objectFit: 'cover' }}
              />
            </Box>
            <CardContent sx={{ textAlign: 'right' }}>
            <Typography variant="h3" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                صور مؤتمر الإمام نافع
                </Typography>
              <Typography variant="body1" sx={{  display: 'block', mb: 1,color:"#BDAC89" }}>
                15 Jan 2023
              </Typography>
            
              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )}

  {activeMediaTab === 'videos' && (
    <Grid container spacing={3}>
      {[1, 2, 3, 4].map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item}>
          <Card sx={{ height: '100%', boxShadow: 'none', background:"none" }}>
            <Box sx={{ position: 'relative', height: 200 }}>
              <Image
                src={`/media.png`}
                alt={`Video thumbnail ${item}`}
                fill
                style={{ objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Box
                  component="span"
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: '10px solid transparent',
                    borderBottom: '10px solid transparent',
                    borderLeft: '15px solid white',
                    marginLeft: '5px'
                  }}
                />
              </Box>
            </Box>
            <CardContent sx={{ textAlign: 'right' }}>
            <Typography variant="h3" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                صور مؤتمر الإمام نافع
                </Typography>
              <Typography variant="body1" sx={{  display: 'block', mb: 1,color:"#BDAC89" }}>
                15 Jan 2023
              </Typography>
            
              
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )}
</Box>
          </Box>
        )}

        {activeTab === 2 && (
         <div className={styles.login}>
             <div className={styles.rectangleParent}>
         <div className={styles.groupChild} />
         <div className={styles.groupItem} />
         </div>
         <div className={styles.div}>ما الخطوة الأولى للبدء في إنشاء موقعي الخاص؟</div>
      
         </div>
        )}
      </Container>
    </Box>
  );
}
