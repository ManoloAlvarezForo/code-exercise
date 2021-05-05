import React from "react";
import { Navbar } from "react-bootstrap";
import styles from "./NavigationBar.module.css";

export interface NavigationBarProps {
  title?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ title }) => {
  return (
    <Navbar className={styles.mainContainer}>
      <h1>{title}</h1>
    </Navbar>
  );
};

export default NavigationBar;
