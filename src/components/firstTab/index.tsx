"use client";

import styles from './page.module.css';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Button } from '@mui/material';
interface ProductProps {
  id: number;
  title: string;
  specs: string[];
  image: string;
}
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
const ProductCard = ({ item }: { item: any }) => {
  return (
    <div className={styles.singleProductContainer}>
      {/* Back Arrow */}
     
      
      {/* Product Card */}
      <div className={styles.productCard}>
        <div className={styles.productImageContainer}>
          <Image
            src={`https://libya-awqaf-api.slsal.co${item.image_url}`}
            alt={item.title["ar"]}
            width={400}
            height={300}
            className={styles.productImage}
          />
        </div>
         <div className={styles.titleContainer} style={{ display: 'flex', alignItems: 'center', gap: '8px' ,justifyContent:"space-between",padding:"10px"}}>
          <h3 className={styles.quranTitle}>{item.title["ar"]}</h3>
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
      
      {/* Download Button */}
      <button className={styles.downloadProductButton}>
         <div className={styles.pdfIcon}>
          <img src="pdficon.png" />
        </div>
        <span>تحميل للمصحف</span>
       
      </button>
    </div>
  );
};

const ProductGrid = () => {
  const [items,setItems]=useState([])
  useEffect(()=>{
    axios.get("https://libya-awqaf-api.slsal.co/pgarticles/versions/0/10").then((res)=>{
      setItems(res.data.data)
    })
  },[])
  return (
    <div className={styles.grid}>
      {items?.length ? items.map((item,index) => (
        <ProductCard key={index} item={item} />
      )) : null}
    </div>
  );
};
export default ProductGrid
