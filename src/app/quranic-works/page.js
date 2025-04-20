"use client";

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

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
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src="/quraan.png"
                  alt={product.title}
                  className={styles.image}
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
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div className={styles.tabContent}>
          <div className={styles.tabDescription}>
            <div className={styles.quranGrid}>
              {[1, 2].map((item) => (
                <div key={item} className={styles.quranItem}>
                  <div className={styles.quranImageContainer}>
                    <Image
                      src="/Cover.png"
                      alt="نموذج المصحف"
                      width={300}
                      height={200}
                      className={styles.quranImage}
                    />
                  </div>
                  <h3 className={styles.quranName}>اسم المصحف</h3>
                  <div className={styles.specTable}>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>الرواية:</div>
                      <div className={styles.specValue}>حفص عن عاصم</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>التصميم:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>سنة النشر:</div>
                      <div className={styles.specValue}>جديد</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>دار الطباعة:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>رقم الطبعة:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>التجليد:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>الملاحظات:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>اسم المحقق:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>نوع المصحف:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>المحقق:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                    <div className={styles.specRow}>
                      <div className={styles.specLabel}>محضر اجتماع اللجنة التي اعتمدت فيه القرار:</div>
                      <div className={styles.specValue}>رواية</div>
                    </div>
                  </div>
                  <button className={styles.reviewButton}>
                    طلب مراجعة نسخة المصحف
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div className={styles.tabContent}>
          <h2 className={styles.tabTitle}>الأعمال التقنية</h2>
          <div className={styles.tabDescription}>
            <p>تتضمن هذه الصفحة الأعمال التقنية المتعلقة بالقرآن الكريم مثل التطبيقات والبرامج الإلكترونية.</p>
            <div className={styles.techGrid}>
              <div className={styles.techCard}>
                <h3>تطبيق القرآن الكريم</h3>
                <p>تطبيق للهواتف الذكية يتيح قراءة القرآن الكريم بمختلف الروايات</p>
                <button className={styles.downloadButton}>
                  <span>تحميل التطبيق</span>
                </button>
              </div>
              <div className={styles.techCard}>
                <h3>برنامج التلاوة المرتلة</h3>
                <p>برنامج يحتوي على تلاوات مرتلة بأصوات مختلفة للقراء</p>
                <button className={styles.downloadButton}>
                  <span>تحميل البرنامج</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div className={styles.tabContent}>
          <h2 className={styles.tabTitle}>الدراسات والأبحاث والمقالات</h2>
          <div className={styles.tabDescription}>
            <p>مجموعة من الدراسات والأبحاث والمقالات المتعلقة بالقرآن الكريم وعلومه.</p>
            <div className={styles.articlesList}>
              <div className={styles.articleItem}>
                <h3>دراسة في علوم القرآن</h3>
                <p>بحث علمي يتناول أهم علوم القرآن الكريم وتطورها عبر العصور</p>
                <button className={styles.downloadButton}>
                  <Image 
                    src="/pdficon.png" 
                    alt="PDF" 
                    width={20} 
                    height={20} 
                  />
                  <span>تحميل البحث</span>
                </button>
              </div>
              <div className={styles.articleItem}>
                <h3>مقالة عن تاريخ المصحف الشريف</h3>
                <p>مقالة تتناول تاريخ المصحف الشريف منذ عهد النبي صلى الله عليه وسلم حتى يومنا هذا</p>
                <button className={styles.downloadButton}>
                  <Image 
                    src="/pdficon.png" 
                    alt="PDF" 
                    width={20} 
                    height={20} 
                  />
                  <span>تحميل المقالة</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
      <Footer />
    </>
  );
}