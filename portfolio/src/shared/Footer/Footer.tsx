import Container from '../Container/Container';
import styles from './Footer.module.scss';

interface ImageProps {
    text: string

}

export default function Footer({ text, }: ImageProps) {
    return (
        <Container className={styles.footer}>
            <p className={styles.footerText}>{text}</p>
        </Container>
    );
}

