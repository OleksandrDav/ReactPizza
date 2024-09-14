import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  
  return (
    <div className={styles.containerStyle}>
      <div>NotFound</div>
      <Link to="/" className={styles.linkStyle}>На главную</Link>
    </div>
  );
};

export default NotFoundBlock;
