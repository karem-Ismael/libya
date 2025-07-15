"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import {
  Typography,
  Button,
  Container,
  Box,
  IconButton,
} from "@mui/material";

const documents = [
  {
    id: 1,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: true
  },
  {
    id: 2,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  },
  {
    id: 3,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  },
  {
    id: 4,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  },
  {
    id: 5,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  },
  {
    id: 6,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  },
  {
    id: 7,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  },
  {
    id: 8,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  },
  {
    id: 9,
    title: 'ميثاق القارئ المؤهل على المصحف القرآنية',
    description: 'يتضمن الميثاق شروط وضوابط القراءة والتلاوة الصحيحة للقرآن الكريم وفق الروايات المعتمدة والأحكام الشرعية المتعلقة بها.',
    date: '٢٠ يناير ٢٠٢٣',
    featured: false
  }
];

export default function Quraan2() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Box sx={{ my: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            align="center" 
            gutterBottom 
            sx={{
              fontSize: { xs: '24px', md: '32px' },
              fontWeight: 'bold',
              color: '#333',
              mb: 2
            }}
          >
            المعايير والسياسات واللوائح القرآنية
          </Typography>
          <Typography 
            variant="subtitle1" 
            align="center" 
            gutterBottom 
            sx={{
              fontSize: '16px',
              color: '#666',
              maxWidth: '600px',
              mx: 'auto',
              mb: 4
            }}
          >
            تمثل السياسات والإجراءات جزءاً أساسياً من إدارة أي منظمة وهناك خطوات محددة يمكن اتباعها لضمان فعالية هذه السياسات والإجراءات.
          </Typography>
        </Box>
        
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)'
          },
          gap: 5,
          mb: 4
        }}>
          {documents.map((doc) => (
            <Box 
              key={doc.id}
              sx={{
                background: doc.featured ? 'linear-gradient(135deg, #A08957 0%, #8B7355 100%)' : '#fff',
                borderRadius: '16px',
                padding: '10px 24px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                border: doc.featured ? 'none' : '1px solid #E5E5E5',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                mb:4,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)'
                }
              }}
            >
              <Typography 
                variant="h6" 
                component="h3" 
                gutterBottom 
                sx={{
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: doc.featured ? '#fff' : '#333',
                  textAlign: 'right',
                  mb: 2,
                  lineHeight: 1.4
                }}
              >
                {doc.title}
              </Typography>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  flexGrow: 1,
                  fontSize: '14px',
                  lineHeight: 1.6,
                  color: doc.featured ? 'rgba(255, 255, 255, 0.9)' : '#666',
                  textAlign: 'right',
                  mb: 3
                }} 
              >
                {doc.description}
              </Typography>
              
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 'auto'
              }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1,
                  color: doc.featured ? 'rgba(255, 255, 255, 0.8)' : '#999'
                }}>
                  <Image 
                    src="/Schedule.png" 
                    alt="date" 
                    width={16} 
                    height={16}
                    style={{ opacity: doc.featured ? 0.8 : 0.6 }}
                  />
                  <Typography 
                    variant="caption"
                    sx={{
                      fontSize: '12px',
                      color: doc.featured ? 'rgba(255, 255, 255, 0.8)' : '#999'
                    }}
                  >
                    {doc.date}
                  </Typography>
                </Box>
                
                <IconButton 
                  component="a" 
                  href="#" 
                  size="small"
                  sx={{
                    backgroundColor: doc.featured ? 'rgba(255, 255, 255, 0.2)' : '#F5F5F5',
                    borderRadius: '8px',
                    padding: '8px',
                    '&:hover': {
                      backgroundColor: doc.featured ? 'rgba(255, 255, 255, 0.3)' : '#E5E5E5'
                    }
                  }}
                >
                  <Image 
                    src="/pdficon.png" 
                    alt="PDF" 
                    width={20} 
                    height={20} 
                  />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
        
        {/* Pagination */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center',
          gap: 2,
          mt: 4
        }}>
          <IconButton 
            sx={{
              color: '#A08957',
              '&:hover': {
                backgroundColor: 'rgba(160, 137, 87, 0.1)'
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </IconButton>
          
          <Box sx={{ 
            width: '60px', 
            height: '2px', 
            backgroundColor: '#A08957',
            borderRadius: '1px'
          }} />
          
          <IconButton 
            sx={{
              color: '#A08957',
              '&:hover': {
                backgroundColor: 'rgba(160, 137, 87, 0.1)'
              }
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </IconButton>
        </Box>
      </Container>
      <Footer />
    </>
  );
}