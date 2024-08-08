import styles from './TextCol1.module.scss';
import Container from '@/shared/Container/Container';

interface TextProps{
  title:string,
  subtitle:string
}

export default function Text({ title, subtitle }:TextProps) {
  return (
    <Container>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p>{subtitle}</p>
      </div>
    </Container>
  );
}
