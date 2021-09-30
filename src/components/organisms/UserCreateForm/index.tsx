import { TextboxWithAlert } from "@/components/molecules/TextboxWithAlert";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { validationSchema } from "./resolver";
import styles from "./style.module.css";

export type Fields = {
  lastName: string;
  firstName: string;
  mail: string;
};
type Props = {
  errors?: Partial<Fields>;
  handleSubmit: (data: Fields) => void;
};

export const UserCreateForm = (props: Props) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <form onSubmit={handleSubmit(props.handleSubmit)} className={styles.module}>
      <TextboxWithAlert
        inputProps={{ ...register("lastName"), placeholder: "姓" }}
        errorMessage={errors.lastName?.message || props.errors?.lastName}
      />
      <TextboxWithAlert
        inputProps={{ ...register("firstName"), placeholder: "名" }}
        errorMessage={errors.firstName?.message || props.errors?.firstName}
      />
      <TextboxWithAlert
        inputProps={{ ...register("mail"), placeholder: "メールアドレス" }}
        errorMessage={errors.mail?.message || props.errors?.mail}
      />
      <div>
        <button>submit</button>
      </div>
    </form>
  );
};
