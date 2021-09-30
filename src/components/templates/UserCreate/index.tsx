import { UserCreateForm } from "@/components/organisms/UserCreateForm";
import React from "react";
import { useUserCreate } from "./useUserCreate";

export const UserCreate = () => {
  const [values, handlers] = useUserCreate();
  return (
    <div>
      <UserCreateForm
        errors={values.errors}
        handleSubmit={handlers.handleSubmit}
      />
      {values.succeed && "OK"}
    </div>
  );
};
