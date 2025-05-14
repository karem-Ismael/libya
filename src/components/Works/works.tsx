"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Tabs,
  Tab,
  Button,
  TextField,
  InputAdornment,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import styles from "./works.module.css";
import BlindComponent from "../blind/blind";
import ProductGrid from "../firstTab";

const quranItems = [
  {
    id: 1,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 2,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 3,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 4,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 5,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 6,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 7,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 8,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 9,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 10,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 11,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 12,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 13,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 14,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
  {
    id: 15,
    title: "الكتاب في شرح تحفة الأطفال الخط",
    subtitle: "الطبعة الأولى",
    category: "خط النسخ",
  },
];

export default function Works() {
  const [activeTab, setActiveTab] = useState(4);
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const products = [
    {
      id: 1,
      title: 'المصحف الفاخر',
      specs: [
        'الطباعة برواية حفص عن عاصم',
        'التصميم برواية',
        'سنة النشر جديد',
        'دار الطباعة برواية',
        'رقم الطبعة برواية',
        'الأحجام المتوفرة برواية'
      ],
      image: '/quraan.png'
    },
    {
      id: 2,
      title: 'المصحف الفاخر',
      specs: [
        'الطباعة برواية حفص عن عاصم',
        'التصميم برواية',
        'سنة النشر جديد',
        'دار الطباعة برواية',
        'رقم الطبعة برواية',
        'الأحجام المتوفرة برواية'
      ],
      image: '/quraan.png'
    },
    {
      id: 3,
      title: 'المصحف الفاخر',
      specs: [
        'الطباعة برواية حفص عن عاصم',
        'التصميم برواية',
        'سنة النشر جديد',
        'دار الطباعة برواية',
        'رقم الطبعة برواية',
        'الأحجام المتوفرة برواية'
      ],
      image: '/quraan.png'
    },
    {
      id: 4,
      title: 'المصحف الفاخر',
      specs: [
        'الطباعة برواية حفص عن عاصم',
        'التصميم برواية',
        'سنة النشر جديد',
        'دار الطباعة برواية',
        'رقم الطبعة برواية',
        'الأحجام المتوفرة برواية'
      ],
      image: '/quraan.png'
    }
  ];
  
  return (
    <Container maxWidth="xl" className={styles.container}>
      <Box className={styles.tabsContainer}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          className={styles.tabs}
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
          <Tab label="  البرامج و التطبيقات" className={styles.tab} />
          <Tab label="  الخطوط الحاسوبة" className={styles.tab} />
          <Tab label="مصحف المكفوفين بلغة (برايل)" className={styles.tab} />
          <Tab label="مصحف الأوقاف لأعمال الطباعة" className={styles.tab} />
          <Tab label="الدراسات والأبحاث والمقالات" className={activeTab === 4 ? styles.activeTab : styles.tab} />
        </Tabs>
      </Box>

     {
        activeTab == 1  ?(
         <>
            <Grid container spacing={3} className={styles.gridContainer}>
            {quranItems.map((item) => (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      <Paper
        sx={{
          width: '100%',
          height: '282px',
          position: 'relative',
          background: 'white',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.10)',
          borderRadius: '25px',
          border: '1px solid #B9C0C9'
        }}
      >
        <Box sx={{ position: 'absolute', right: '30px', top: '18px' }}>
          <Typography
            sx={{
              color: '#A08957',
              fontSize: '20px',
              fontFamily: 'SST Arabic',
              fontWeight: 700,
              textAlign: 'right'
            }}
          >
            {item.category}
          </Typography>
        </Box>
        
        <Box sx={{ position: 'absolute', right: '30px', top: '58px' }}>
          <Typography
            sx={{
              color: '#6D757F',
              fontSize: '20px',
              fontFamily: 'SST Arabic',
              fontWeight: 400,
              textAlign: 'right'
            }}
          >
            {item.subtitle}
          </Typography>
        </Box>
    
        <Box sx={{ position: 'absolute', right: '30px', top: '118px' }}>
          <Typography
            sx={{
              color: '#231F20',
              fontSize: '24px',
              fontFamily: 'SST Arabic',
              fontWeight: 700,
              textAlign: 'right'
            }}
          >
            {item.title}
          </Typography>
        </Box>
    
        <Box sx={{ position: 'absolute', bottom: '27px', width: '100%', px: 3 }}>
          <Grid container spacing={1}>
            <Grid item xs={7}>
              <Box sx={{ display: 'flex', gap: 1, width: '100%' }}>
                <Button
                  fullWidth
                  sx={{
                    background: '#FFF7E5',
                    fontSize: '14px',
                    padding:"0px",
                    borderRadius: '0 20px 20px 0',
                    border: '1px solid #A08957',
                    color: '#A08957',
                
                    fontFamily: 'SST Arabic',
                    '&:hover': {
                      background: '#FFF7E5',
                    }
                  }}
                >
                  تحميل الخط
                </Button>
                <Button
                  fullWidth
                  sx={{
                    height: '42px',
                    background: '#FFFFFF',
                    padding:"0px",
                    borderRadius: '20px 0 0 20px',
                    border: '1px solid #A08957',
                    color: '#6D757F',
                    fontSize: '14px',
                    fontFamily: 'SST Arabic',
                    '&:hover': {
                      background: '#FFFFFF',
                    }
                  }}
                >
                  عدد التنزيلات:10987
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Button
                fullWidth
                sx={{
                  height: '42px',
                  borderRadius: '20px',
                  border: '1px solid #A08957',
                  color: '#A08957',
                  fontSize: '12px',
                  fontFamily: 'SST Arabic',
                    background: '#FFF7E5',
                }}
              >
                تفاصيل عن الخط
              </Button>
            </Grid>
        
          </Grid>
        </Box>
      </Paper>
    </Grid>
            ))}
          </Grid>
    
          <Box className={styles.paginationContainer}>
            <Pagination
              count={Math.ceil(quranItems.length / itemsPerPage)}
              page={page}
              onChange={handlePageChange}
              color="primary"
              className={styles.pagination}
            />
          </Box>
         </>
        ) : activeTab == 2 ? (
          <BlindComponent />
        ) : activeTab == 3? (
          <ProductGrid   
          products={products}
          />
        )
        : null
     }

    
    </Container>
  );
}