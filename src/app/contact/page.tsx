"use client";

import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { Container } from "@mui/material";

export default function Contact() {
  return (
<>

    <Header />

    <Container maxWidth="xl">
        <div>
        <h1 className={styles.title}>تواصل معنا</h1>
        <p className={styles.subtitle}>
          يمكنك التواصل معنا في أي وقت من خلال ملء النموذج أدناه. نحن نسعى دائماً لتقديم أفضل خدمة لعملائنا الكرام.
        </p>
        </div>
        <div className={styles.container2}>

      <div className={styles.mapSection}>
       
          <Image  
          className={styles.map}
          src="/map.png" alt="map" width={300} height={300} />
      </div>

    

      <div className={styles.formSection}>
       

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>الاسم</label>
            <input 
              type="text" 
              className={styles.input}
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>البريد الإلكتروني</label>
            <input 
              type="email" 
              className={styles.input}
              placeholder="example@domain.com"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>رقم الهاتف</label>
            <input 
              type="tel" 
              className={styles.input}
              placeholder="+966 XX XXX XXXX"
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>الرسالة</label>
            <textarea 
              className={styles.textarea}
              placeholder="اكتب رسالتك هنا..."
            ></textarea>
          </div>

          <button type="submit" className={styles.button}>
            إرسال الرسالة
          </button>
        </form>

        <div className={styles.contactInfo}>
     
          <div className={styles.contactItem}>
            <div style={{fontWeight:600,textAlign:"center"}}>
              <p>
              EMAIL
              </p>
          <p>info@example.com</p>

            </div>

            <Image alt="mail" src="/mail.svg"  width={35} height={35}  className={styles.contactIcon} />
          </div>
          <div className={styles.contactItem}>
          <div style={{fontWeight:600,textAlign:"center"}}>
          <p>
            FAX
            </p>
          <p>
          03 5432 1234
          </p>
          </div>

            <Image alt="clock" src="/clock.svg" width={35} height={35} className={styles.contactIcon} />
          </div>
          <div className={styles.contactItem}>
            <div style={{fontWeight:600,textAlign:"center"}}>
                <p>PHONE</p>
          <p>+966 123 456 789</p>
            
            </div>

            <Image alt="phone" width={35} height={35} src="/phone.svg" className={styles.contactIcon} />
          </div>
        </div>
        <button type="submit" className={styles.button}>
            طلب مراجعة نسخة مصحف
          </button>
      </div>

      </div>

      </Container>
    
      <Footer />
</>
  );
}