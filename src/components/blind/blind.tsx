import { Box, Typography, Button, Stack, IconButton } from '@mui/material';
import styles from './blind.module.css';
const BlindComponent = () => {
  return (
    <Box className={styles.container}>
      <Typography className={styles.title}>
        مصحف المدينة النبوية بالخط البارز (Braille)
      </Typography>
      
      <Box className={styles.contentBox}>
        <Typography 
          variant="h4" 
          component="h2" 
          className={styles.heading}
        >
          تقديم
        </Typography>
        
        <Typography className={styles.content}>
          انطلاقًا من ريادة مجمع الملك فهد لطباعة المصحف الشريف بالمدينة المنورة واستشعاراً منه لأهمية وشرف الرسالة التي يقدمها؛ فإنه يهدي لعموم مكفوفي العالم الإسلامي الإصدار رقم 1.3 من نسخة القرآن الكريم برواية حفص بن سليمان الأسدي عن عاصم بن أبي النجود الكوفي من طريق الشاطبية بالرسم الإملائي وذلك بالخط البارز (Braille) وبصيغته الإلكترونية المدعومة (BRF).
        </Typography>
        
        {/* Additional content typography components... */}
      </Box>

      <Typography className={styles.shareText}>
        مشاركة:
      </Typography>
      
      <Stack className={styles.socialButtons}>
        {/* Replace div elements with IconButton components */}
        <IconButton className={styles.socialButtonWhite} />
        <IconButton className={styles.socialButtonGold} />
        {/* Additional social buttons... */}
      </Stack>

      <Button className={styles.downloadButton}>
        تحميل المصحف
      </Button>
    </Box>
  );
};

export default BlindComponent;

