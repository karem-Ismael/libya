"use client";

import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Container } from '@mui/material';
import { useEffect,useState } from 'react';
  import axios from "axios"
const timelineItems = [
  {
    year: '1900 م',
    title: 'بداية تأسيس اللجنة',
    description: 'تأسست اللجنة الأولى'
  },
  {
    year: '1950 م',
    title: 'إعادة تشكيل اللجنة',
    description: 'تم إعادة تشكيل اللجنة'
  },
  {
    year: '2018 م',
    title: 'تحديث نظام عمل اللجنة',
    description: 'تم تحديث نظام عمل اللجنة وآلياتها'
  },
  {
    year: '2025 م',
    title: 'الخطة المستقبلية',
    description: 'استكمال منظومة العمل وتطوير الآليات'
  }
];

export default function Quraan3() {
  const [members,setMembers]=useState([])
  const [timeline,setTimeLine]=useState([])
  const[staticPages,setStaticPages]=useState([])
 useEffect(()=>{
  axios.get("https://libya-awqaf-api.slsal.co/pgarticles/committee_members/0/10").then((res)=>{
    setMembers(res.data.data)
  })
  axios.get("https://libya-awqaf-api.slsal.co/pgarticles/timeline/0/10").then((res)=>{
    setTimeLine(res?.data?.data)
  })
  axios.get("https://libya-awqaf-api.slsal.co/pgcontentpages/1000").then((res)=>{
    setStaticPages(res.data.data)
  })
 },[]) 
 console.log(timeline,"timeline")
  return (
    <>
      <Header />
          <Container
            maxWidth="xl"
            sx={{
              
            }}
            >

        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>نبذة عن اللجنة</h2>
            <p className={styles.aboutText} 
            
            dangerouslySetInnerHTML={{
              __html:staticPages?.find(item=>item.id =="6bcb18c0-e271-4a35-be81-809794dd1c3c")?.content["ar"]
            }}
            >
             
            </p>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/second.png"
              alt="صورة اللجنة"
              width={500}
              height={300}
              className={styles.committeeImage}
            />
          </div>
        </section>

        <section className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>المسار الزمني للتطور التنظيمي</h2>
          <div className={styles.timeline}>
            {timeline.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelinePoint}></div>
                <div className={styles.timelineYear}>{item.brief["ar"]}</div>
                <div className={styles.timelineContent}>
                  <p>{item.title["ar"]}</p>
<Image 
  src="/pdficon.png"
  alt="PDF Icon"
  width={20}
  height={20}
  className={styles.pdfIcon}
/>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.visionMissionSection}>
          <div className={styles.visionBox}>
            <h2 className={styles.boxTitle}>الرؤية</h2>
            <p className={styles.boxText} 
            
            dangerouslySetInnerHTML={{
              __html:staticPages.find(item=>item.id =="63d84e8b-229b-4a01-bcaa-1b51295e2b84")?.content["ar"]
            }}
            >
              
            </p>
          </div>
          <div className={styles.missionBox}>
            <h2 className={styles.boxTitle}>الرسالة</h2>
            <p className={styles.boxText} 
            
            dangerouslySetInnerHTML={{
              __html: staticPages.find(item=>item.id =="22a40c2d-bc95-42c6-a140-836ca0d49062")?.content["ar"]
            }}
            >
            
            </p>
          </div>
        </section>

        <section className={styles.imagesSection}>
          <Image
            src="/libya1.png"
            alt="أعضاء اللجنة"
            width={800}
            height={400}
            className={styles.membersImage}
          />
        </section>

        <section className={styles.tasksSection}>
          <h2 className={styles.tasksTitle}>مهام اللجنة</h2>
          <p className={styles.tasksIntro}>
            تتولى اللجنة اقتراح السياسة العامة لإعداد المصاحف الشريفة وكتابتها ومراجعتها ومنح الإذن بتداولها، وكل ما يتعلق بها من علوم
            كالرسم والضبط ومختلف العلوم، ولها على سبيل الخصوص ما يلي:
          </p>
          <ol className={styles.tasksList}>
            <li>رسم السياسات ووضع الإستراتيجيات المتعلقة بكتابة المصاحف وطباعتها ونشرها.</li>
            <li>إعداد المصاحف الشريفة وكتابتها بالروايات المختلفة.</li>
            <li>منح الإذن للجهات المختلفة التي ترغب في كتابة المصحف الشريف أو طباعته أو تسجيله صوتياً أو تصميمه وتنفيذه برمجياً أو استيراده من الخارج.</li>
            <li>مراجعة ما يحال عليها من مصاحف ومطبوعات علمية في القرآن وعلومه ومنح الإذن بتداولها.</li>
            <li>الإسهام في إحياء التراث المخطوط المتعلق بعلوم القرآن الكريم، والتعريف به وجمعه وتحقيقه ونشره.</li>
            <li>تقديم المشورة للهيئة العامة للأوقاف والشؤون الإسلامية في مجال القرآن الكريم وعلومه، والتعاون مع الإدارات المختصة في هذا المجال.</li>
            <li>المشاركة في المؤتمرات والندوات الخاصة بالقرآن الكريم وعلومه محلياً ودولياً.</li>
            <li>إصدار مجلة فصلية أو حولية تعنى بعلوم القرآن الكريم وتعرف بنشاط اللجنة.</li>
            <li>التنبيه على الأخطاء المتعلقة بالقرآن الكريم قراءة أو كتابة، التي تقع في أعمال المؤسسات والأفراد ووسائل الإعلام والكتب العلمية والبرمجية.</li>
            <li>التعاون مع المؤسسات المختصة في القرآن الكريم وعلومه، وسائر الجهات ذات العلاقة داخل البلد وخارجه.</li>
          </ol>
        </section>

        <section className={styles.structureSection}>
          <h2 className={styles.structureTitle}>الهيكل التنظيمي للجنة</h2>
          <p className={styles.structureText}>قريباً</p>
          
          {/* Placeholder for organizational chart - can be replaced with actual chart component */}
          
        </section>

        <section className={styles.membersSection}>
          <h2 className={styles.membersTitle}>أعضاء اللجنة</h2>
          
          <div className={styles.membersGrid}>
            {members.map((member) => (
              <div key={member} className={styles.memberCard}>
                <div className={styles.memberImageContainer}>
                  <Image
                    src="/member.png"
                    alt="عضو اللجنة"
                    width={120}
                    height={120}
                    className={styles.memberImage}
                  />
                </div>
                <h3 className={styles.memberName}>يحيى بن سالم</h3>
                <p className={styles.memberTitle}>عضو اللجنة</p>
              </div>
            ))}
          </div>
          
          <div className={styles.previousMembersContainer}>
            <button className={styles.previousMembersButton}>
              الأعضاء  السابقين
            </button>
          </div>
        </section>
      </Container>

      <Footer />
    </>
  );
}