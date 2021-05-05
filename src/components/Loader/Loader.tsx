import React from "react";
import { Spinner } from "react-bootstrap";
import styles from './Loader.module.css';

const Loader: React.FC = () => {
  return (
    <div
      className={styles.mainContainer}
    >
      <Spinner className={styles.verticalMargin} animation="grow" variant="primary"/>
      <Spinner className={styles.verticalMargin} animation="grow" variant="primary"/>
      <Spinner className={styles.verticalMargin} animation="grow" variant="primary"/>
    </div>
  );
};

export default Loader;
