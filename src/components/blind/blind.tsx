import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import Image from 'next/image';
import styles from './blind.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const BlindComponent = () => {
  return (
    <Box className={styles.container}>
      {/* Hero Section with Laptop Image */}
      <Box className={styles.heroSection}>
        <Typography className={styles.mainTitle}>
          مصحف المدينة النبوية بالخط البارز (Braille)
        </Typography>
        
        <Box className={styles.laptopContainer}>
          <Image
            src="/libya.png"
            alt="مصحف المدينة النبوية بالخط البارز"
            width={1000}
            height={300}
            className={styles.laptopImage}
          />
        </Box>
      </Box>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
       

          {/* Download Button */}
          <Button className={styles.downloadButton}>
            <PictureAsPdfIcon className={styles.downloadIcon} />
            تحميل المصحف
          </Button>
             <Box className={styles.sharingSection}>
         
            
            <Stack direction="row" className={styles.socialButtons}>
                 <Typography className={styles.shareText}>
              مشاركة:
            </Typography>
              <IconButton className={styles.socialButton}>
                <TwitterIcon className={styles.socialIcon} />
              </IconButton>
              <IconButton className={styles.socialButton}>
                <FacebookIcon className={styles.socialIcon} />
              </IconButton>
              <IconButton className={styles.socialButton}>
                <WhatsAppIcon className={styles.socialIcon} />
              </IconButton>
              <IconButton className={styles.socialButton}>
                <EmailIcon className={styles.socialIcon} />
              </IconButton>
              <IconButton className={styles.socialButton}>
                <LinkIcon className={styles.socialIcon} />
              </IconButton>
            </Stack>
          </Box>
        </Box>
      {/* Content Section */}
      <Box className={styles.contentSection}>
        <Box className={styles.contentBox}>
          <Typography className={styles.sectionTitle}>
            تقديم
          </Typography>
          
          <Typography className={styles.description}>
            انطلاقًا من ريادة مجمع الملك فهد لطباعة المصحف الشريف بالمدينة المنورة واستشعاراً منه لأهمية وشرف الرسالة التي
            يقدمها؛ فإنه يهدي لعموم مكفوفي العالم الإسلامي الإصدار رقم 1.3 من نسخة القرآن الكريم برواية حفص بن سليمان
            الأسدي عن عاصم بن أبي النجود الكوفي من طريق الشاطبية بالرسم الإملائي وذلك بالخط البارز (Braille) وبصيغته
            الإلكترونية المدعومة (BRF).
          </Typography>

          <Typography className={styles.standardsTitle}>
            معايير نشر المصحف الشريف بالصيغة الإلكترونية للمكفوفين:
          </Typography>

          <Box className={styles.standardsList}>
            <Typography className={styles.standardItem}>
              • الإصدار: المصحف الشريف
            </Typography>
            <Typography className={styles.standardItem}>
              • الرواية: حفص عن عاصم
            </Typography>
            <Typography className={styles.standardItem}>
              • بيئة التشغيل: الأسطر الإلكترونية المحتوية على جداول الخط البارز والقادرة على معالجة ملفات الـ BRF
            </Typography>
            <Typography className={styles.standardItem}>
              • الجدول المستخدم: الجدول العربي Arabic 01
            </Typography>
            <Typography className={styles.standardItem}>
              • الدرجة: الدرجة الأولى بدون اختصارات Grade 01
            </Typography>
          </Box>
        </Box>

        {/* Social Sharing Section */}
      
      </Box>
    </Box>
  );
};

export default BlindComponent;

