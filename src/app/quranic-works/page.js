"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Container } from '@mui/material';
import Works from '@/components/Works/works';
import Reasearches from '@/components/Researches';
import ProductGrid from '@/components/firstTab';

import {QuranGrid1} from "./lagnaproductis"

const tabs = [
  'إصدارات مصحف الأوقاف الليبية',
  'المصاحف المعروضة على اللجنة',
  'الأعمال التقنية',
  'الدراسات والأبحاث والمقالات'
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>

    <Header />

    <Container maxWidth="xl" sx={{ height: '100%' }}>
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>الأعمال القرآنية</h1>
          <div className={styles.tabs}>
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 0 && (
         <ProductGrid  />
        )}

        {activeTab === 1 && (
        <QuranGrid1 />
        )}

        {activeTab === 2 && (
          <div className={styles.tabContent}>
              <Works />
          </div>
        )}

        {activeTab === 3 && (
        <Reasearches />
        )}
      </main>
        </Container>
        <Footer />
      </>
    );
}