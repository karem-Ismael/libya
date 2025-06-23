"use client";

import styles from './page.module.css';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
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
    <div key={item.id} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={`https://libya-awqaf-api.slsal.co${item.image_url}`}
          alt={"test"}
          className={styles.image1}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.productTitle}>{item.title["ar"]}</h2>
        <div className={styles.specs}>
         <p >{item?.brief?.drawing["ar"]}</p>
         <p >{item?.brief?.edition_number["ar"]}</p>
         <p >{item?.brief?.narration["ar"]}</p>
         <p >{item?.brief?.printed_sizes["ar"]}</p>
         <p >{item?.brief?.printing_house["ar"]}</p>
         <p >{item?.brief?.publish_year["ar"]}</p>


        </div>
        <button className={styles.downloadButton}>
          <Image 
            src="/pdficon.png" 
            alt="PDF" 
            width={20} 
            height={20} 
          />
          <span>تحميل المصحف</span>   
        </button>
      </div>
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
