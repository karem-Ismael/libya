"use client";

import Image from 'next/image';
import styles from './page.module.css';

export const ProductGrid = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
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
        <SpecsList specs={product.specs} />
        <DownloadButton />
      </div>
    </div>
  );
};

const SpecsList = ({ specs }) => {
  return (
    <div className={styles.specs}>
      {specs.map((spec, index) => (
        <p key={index}>{spec}</p>
      ))}
    </div>
  );
};

const DownloadButton = () => {
  return (
    <button className={styles.downloadButton}>
      <Image 
        src="/pdficon.png" 
        alt="PDF" 
        width={20} 
        height={20} 
      />
      <span>تحميل المصحف</span>   
    </button>
  );
};
