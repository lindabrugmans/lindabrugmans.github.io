import NextImage from 'next/image';

import styles from './Image.module.scss';

interface ImageProps {
  image: {
    src: string,
    height: number,
    width: number,
  },
  altImg: string,
  className?: string,
}

export default function Image({ image, altImg, className }: ImageProps) {
  return (
    <NextImage
      src={image.src}
      height={image.height}
      width={image.width}
      alt={altImg}
      className={`${styles.image} ${className}`}
    />
  );
}

