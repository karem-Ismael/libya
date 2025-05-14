"use client";

import styles from './page.module.css';

import { useState } from 'react';
import Image from 'next/image';
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
const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <div key={product.id} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src="/quraan.png"
          alt={product.title}
          className={styles.image1}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.content}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.specs}>
          {product.specs.map((spec, index) => (
            <p key={index}>{spec}</p>
          ))}
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
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductGrid
