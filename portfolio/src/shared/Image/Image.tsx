import NextImage from 'next/image';

import styles from './Image.module.scss';
import clsx from 'clsx';

interface ImageProps {
  image: {
    src: string,
    height: number,
    width: number,
  },
  altImg: string,
  className?: string,
  fullscreen?: boolean,
  grayscale?: boolean
}

export default function Image({ image, altImg, className, fullscreen, grayscale }: ImageProps) {
  return (
    <NextImage
      src={image.src}
      height={image.height}
      width={image.width}
      alt={altImg}
      className={clsx(styles.image, className, { [styles.fullscreen]: fullscreen }, { [styles.grayscale]: grayscale })}
      layout="responsive"
    />
  );
}

