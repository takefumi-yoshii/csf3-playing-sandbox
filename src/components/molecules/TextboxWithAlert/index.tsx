import { Alert } from "@/components/atoms/Alert";
import React from "react";
import styles from "./style.module.css";

type Props = {
  inputProps: React.ComponentProps<"input">;
  errorMessage?: string;
};

export const TextboxWithAlert = ({
  inputProps: { type, ...inputArgs },
  errorMessage,
}: Props) => {
  return (
    <div className={styles.module}>
      <input type="text" {...inputArgs} />
      <Alert message={errorMessage} />
    </div>
  );
};
