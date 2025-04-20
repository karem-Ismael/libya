"use client";

import React, { useState } from "react";
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

  return (
    <Box sx={{ py: 8, backgroundColor: "#fff" }}>
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
                        overflow: "hidden",
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
                        endIcon={<ArrowBackIosNewIcon sx={{ fontSize: 14 }} />}
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
                        اقرأ المزيد
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
            <Typography variant="h5">مكتبة الوسائط</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              محتوى مكتبة الوسائط سيظهر هنا
            </Typography>
          </Box>
        )}

        {activeTab === 2 && (
          <Box sx={{ textAlign: "center", py: 6 }}>
            <Typography variant="h5">الأسئلة الشائعة</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              محتوى الأسئلة الشائعة سيظهر هنا
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
