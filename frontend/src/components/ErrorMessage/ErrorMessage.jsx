import React from "react";
import { ReactComponent as ErrorIcon } from "../../assets/img/error_icon.svg";
import styles from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => {
  return (
    <div className={styles.container}>
      <ErrorIcon className={styles.icon} />
      <h2 className={styles.title}>Oops! Something went wrong.</h2>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
