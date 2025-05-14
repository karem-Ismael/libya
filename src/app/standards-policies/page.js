"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
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
  Grid ,
  Paper ,
  InputBase,
} from "@mui/material";
const documents = [
  {
    id: 1,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 2,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 3,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 4,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 5,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 6,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 7,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 8,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  },
  {
    id: 9,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣'
  }
];

export default function Quraan2() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Typography variant="h3" component="h1" align="right" gutterBottom className={styles.pageTitle}>
            المعايير والسياسات واللوائح القرآنية
          </Typography>
          <Typography variant="subtitle1" align="right" gutterBottom className={styles.pageSubTitle}>
            تمثل السياسات والإجراءات جزءاً أساسياً في إدارة أي منظمة وهناك
            خطوات محددة يمكن اتباعها لضمان فعالية هذه السياسات.
          </Typography>
        </Box>
        <Box sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          marginY:"10px"
        }}>
          {documents.map((doc) => (
            <Box 
              key={doc.id}
              sx={{
                flexBasis: {
                  xs: '100%',
                  sm: 'calc(50% - 12px)',
                  md: 'calc(33.333% - 60px)'
                },
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: "24px",
                border: "0.5px solid #B8BCCD",
                background: "#A08957;",
                padding: "34px 20px"
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom 
              sx={{
                fontSize: "20px",
              }}
              >
                {doc.title}
              </Typography>
              <Typography variant="body2" sx={{ flexGrow: 1,
                fontSize: "18px",
                lineHeight: "30px",
                color:"#fff"
                

                
               }} >
                {doc.description}
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 2 
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image 
                    src="/Schedule.png" 
                    alt="date" 
                    width={20} 
                    height={20} 
                  />
                  <Typography variant="caption">
                    {doc.date}
                  </Typography>
                </Box>
                <IconButton component="a" href="#" size="small">
                  <Image 
                    src="/pdficon.png" 
                    alt="PDF" 
                    width={30} 
                    height={30} 
                  />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
      <Footer />
    </>
  );
}