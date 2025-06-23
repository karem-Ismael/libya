"use client";

import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { Container } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
interface State extends SnackbarOrigin {
  open: boolean;
}
export default function Contact() {
  const [email,setEmail] = useState("")
  const[message,setMessage]=useState("")
  const[name,setName]=useState("")
  const [open, setOpen] = useState(false);

 
const handelSubmit=(e)=>{
  e.preventDefault()
  axios.post(`https://libya-awqaf-api.slsal.co/pgenquiries/contactus/createmail/ar?name=${name}&email=${email}&message=${message}`).then((res)=>{
    console.log(res,"contact res")
    if(res.data.success){
   setOpen(true)
    }
  })
}
const handleClose=()=>{
  setOpen(false)
}
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
       

        <form onSubmit= {handelSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>الاسم</label>
            <input 
              type="text" 
              className={styles.input}
              placeholder="أدخل اسمك الكامل"
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>البريد الإلكتروني</label>
            <input 
              type="email" 
              className={styles.input}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
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
              onChange={(e)=>{
                setMessage(e.target.value)
              }}
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          تم الارسال بنجاح
        </Alert>
      </Snackbar>
      </Container>
    
      <Footer />
</>
  );
}