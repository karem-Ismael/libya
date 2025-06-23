"use client"
import styles from './page.module.css';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
interface ProductProps {
    id: number;
    title: string;
    brief: any;
    image_url: string;
  }
const ProductCard = ({ product }: { product: ProductProps }) => {
  if(product){
    return (
    
      <div key={product.id} className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={`https://libya-awqaf-api.slsal.co${product.image_url}`}
            alt={product.title?.["ar"]}
            className={styles.image1}
          
          />
        </div>
        <div className={styles.content}>
          <h2 className={styles.productTitle}>{product.title}</h2>
          <div className={styles.specs}>
            {/* {product.specs.map((spec, index) => (
              <p key={index}>{spec}</p>
            ))} */}
             
  
  
  
  
           
  
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
  }else{
    return null
  }
};
export default ProductCard