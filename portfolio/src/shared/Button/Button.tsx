'use client';

import styles from './Button.module.scss';

type TButton = {
  text: string
  color?: string
}

export default function Button(data: TButton) {
  const { text, color } = data;

  return (
    <button type="button" className={styles.button}>{text}</button>
  );
}
