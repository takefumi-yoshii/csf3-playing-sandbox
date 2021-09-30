import React from "react";
import styles from "./style.module.css";

type Props = {
  message?: string;
};

export const Alert = (props: Props) => {
  if (!props.message) return null;
  return (
    <span role="alert" className={styles.module}>
      {props.message}
    </span>
  );
};
