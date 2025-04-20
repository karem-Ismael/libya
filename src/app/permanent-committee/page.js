"use client";

import Image from 'next/image';
import styles from './page.module.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const timelineItems = [
  {
    year: '١٩٠٠ م',
    title: 'بداية تأسيس اللجنة',
    description: 'تأسست اللجنة الأولى'
  },
  {
    year: '١٩٥٠ م',
    title: 'إعادة تشكيل اللجنة',
    description: 'تم إعادة تشكيل اللجنة'
  },
  {
    year: '٢٠١٨ م',
    title: 'تحديث نظام عمل اللجنة',
    description: 'تم تحديث نظام عمل اللجنة وآلياتها'
  },
  {
    year: '٢٠٢٥ م',
    title: 'الخطة المستقبلية',
    description: 'استكمال منظومة العمل وتطوير الآليات'
  }
];

export default function Quraan3() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>نبذة عن اللجنة</h2>
            <p className={styles.aboutText}>
              هي لجنة علمية مؤلفة من جملة من الخبراء والمختصين في مجال
              حفظ القرآن الكريم ورسمه وضبطه وقراءاته وعلومه
              وتختص بإعداد المصاحف ومراجعتها، وتتبع الآن تنظيمياً
              وتتمتع بهيئة علمية مستقلة وتمارس نشاطها العلمي تحت
              إشراف الهيئة العامة للأوقاف والشؤون الإسلامية. كما يشمل
              برنامج عمل تنمية اللجنة في نطاق ميزانيتها السنوية وفق خطة
              علمية محددة.
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
            {timelineItems.map((item, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelinePoint}></div>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.visionMissionSection}>
          <div className={styles.visionBox}>
            <h2 className={styles.boxTitle}>الرؤية</h2>
            <p className={styles.boxText}>
              مؤسسة قرآنية رائدة على مستوى العالم الإسلامي وحاضنة ومرجعية عن
              المصحف، وتتبع مختلف الوسائل القرآنية الرقمية لتكون متاحة
              للجميع وفق أعلى معايير
              الدقة والكفاءة.
            </p>
          </div>
          <div className={styles.missionBox}>
            <h2 className={styles.boxTitle}>الرسالة</h2>
            <p className={styles.boxText}>
              تسعى اللجنة في خدمة كتاب الله عز وجل من خلال إتقان المصاحف
              وضبطها ومراجعتها والحرص على سلامة طباعتها وتوزيع مختلف
              أنواعها وتقديمها بما يحسن تلقي كتاب الله في المسلمين في جميع
              أنحاء المعمورة المختلفة.
            </p>
          </div>
        </section>

        <section className={styles.imagesSection}>
          <Image
            src="/libya.png"
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
            {[1, 2, 3, 4, 5].map((member) => (
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
              أعضاء سابقين
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}