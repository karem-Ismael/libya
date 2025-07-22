"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
} from "@mui/material";
const QuranItem = ({ item }) => {
  return (
    <div className={styles.singleQuranContainer}>
      
      
      {/* Quran Card */}
      <div className={styles.quranCard}>
        <div className={styles.quranImageContainer}>
          <Image
            src="/quran.png"
            alt="المصحف الفاخر"
            width={200}
            height={280}
            className={styles.quranBookImage}
          />
        </div>
        <div className={styles.titleContainer} style={{ display: 'flex', alignItems: 'center', gap: '8px' ,justifyContent:"space-between",padding:"10px 20px"}}>
          <h3 className={styles.quranTitle}>المصحف الفاخر</h3>
                      <Button
                        sx={{ 
                          color: "#b5a36a", 
                          textTransform: "none",
                          fontWeight: 500,
                          fontSize:"20px",
                          p: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            textDecoration: 'underline',
                          }
                        }}
                      >
              ←
                    
                      </Button>
        </div>
      </div>
      
      {/* Review Button */}
      <button className={styles.reviewButton}>
        طلب مراجعة نسخة مصحف
      </button>
    </div>
  );
};

export const QuranGrid1 = () => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    axios.get("https://libya-awqaf-api.slsal.co/pgarticles/quran_committee/0/2").then((res) => {
      setItems(res.data.data);
    });
  }, []);
  
  return (
    <div className={styles.modernTabContent}>
      <div className={styles.modernQuranGrid}>
        {/* Display 3 items as shown in the design */}
        {[1, 2, 3].map((index) => (
          <QuranItem key={index} item={items[index] || {}} />
        ))}
      </div>
    </div>
  );
};
