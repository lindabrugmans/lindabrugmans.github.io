import React from 'react';

import styles from './Container.module.scss';

interface IContainer{

  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: IContainer) {
  return (

    <div className={`${styles.container} ${className}`}>{children}</div>
  );
}
