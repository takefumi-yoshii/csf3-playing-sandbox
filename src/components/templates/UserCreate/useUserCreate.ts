import type { Fields } from "@/components/organisms/UserCreateForm";
import axios from "axios";
import React from "react";

type State = {
  errors: Partial<Fields> | undefined;
  succeed: boolean | undefined;
};

const reducer = (state: State, action: Partial<State>): State => ({
  ...state,
  ...action,
});

export function useUserCreate() {
  const [state, dispatch] = React.useReducer(reducer, {
    errors: undefined,
    succeed: undefined,
  });
  const handleSubmit = async (data: Fields) => {
    try {
      const res = await axios.post("https://api-server.com/user", data);
      dispatch({
        errors: undefined,
        succeed: true,
      });
    } catch (err) {
      if (!axios.isAxiosError(err)) throw err;
      dispatch({
        errors: Object.fromEntries(err.response?.data.err.items),
        succeed: false,
      });
    }
  };
  return [state, { handleSubmit }] as const;
}
