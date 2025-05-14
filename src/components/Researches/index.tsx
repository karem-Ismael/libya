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

export default function Reasearches() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{  backgroundColor: "#fff" }}>
       

        

        {
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
                
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        }

   
      
    </Box>
  );
}
