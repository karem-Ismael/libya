"use client";

import Image from 'next/image';
import styles from './page.module.css';
const QuranItem = ({ item }) => {
  return (
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
        <SpecRow label="الرواية" value="حفص عن عاصم" />
        <SpecRow label="التصميم" value="رواية" />
        <SpecRow label="سنة النشر" value="جديد" />
        <SpecRow label="دار الطباعة" value="رواية" />
        <SpecRow label="رقم الطبعة" value="رواية" />
        <SpecRow label="التجليد" value="رواية" />
        <SpecRow label="الملاحظات" value="رواية" />
        <SpecRow label="اسم المحقق" value="رواية" />
        <SpecRow label="نوع المصحف" value="رواية" />
        <SpecRow label="المحقق" value="رواية" />
        <SpecRow label="محضر اجتماع اللجنة التي اعتمدت فيه القرار" value="رواية" />
      </div>
      <button className={styles.reviewButton}>
        طلب مراجعة نسخة المصحف
      </button>
    </div>
  );
};

const SpecRow = ({ label, value }) => {
  return (
    <div className={styles.specRow}>
      <div className={styles.specLabel}>{label}:</div>
      <div className={styles.specValue}>{value}</div>
    </div>
  );
};

export  const QuranGrid1 = () => {
  return (
    <div className={styles.tabContent}>
      <div className={styles.tabDescription}>
        <div className={styles.quranGrid}>
          {[1, 2].map((item) => (
            <QuranItem key={item} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
