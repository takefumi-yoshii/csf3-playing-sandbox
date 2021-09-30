import * as yup from "yup";

export const validationSchema = yup
  .object({
    lastName: yup.string().required("姓が未入力です"),
    firstName: yup.string().required("名が未入力です"),
    mail: yup.string().required("メールアドレスが未入力です"),
  })
  .required();
