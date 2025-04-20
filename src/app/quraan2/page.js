"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

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
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>المعايير والسياسات واللوائح القرآنية</h1>
          <p className={styles.subtitle}>
            تمثل السياسات والإجراءات جزءاً أساسياً في إدارة أي منظمة وهناك
            خطوات محددة يمكن اتباعها لضمان فعالية هذه السياسات.
          </p>
        </div>

        <div className={styles.documentsGrid}>
          {documents.map((doc) => (
            <div key={doc.id} className={styles.documentCard}>
              <div className={styles.documentContent}>
                <h3 className={styles.documentTitle}>{doc.title}</h3>
                <p className={styles.documentDescription}>{doc.description}</p>
                <div className={styles.documentFooter}>
                    <div style={{display:"flex",alignItems:"center"}}>
                    <Image 
                        src="/Schedule.png" 
                        alt="date" 
                        width={20} 
                        height={20} 
                      />
                  <span className={styles.documentDate}>{doc.date}</span>

                    </div>
                  <div className={styles.downloadIcons}>
                    <a href="#" className={styles.downloadLink}>
                      <Image 
                        src="/pdficon.png" 
                        alt="PDF" 
                        width={20} 
                        height={20} 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}