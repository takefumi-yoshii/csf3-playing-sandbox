import { rest } from "msw";

export const handlers = [
  rest.post<{ mail: string }>(
    "https://api-server.com/user",
    (req, res, ctx) => {
      const data = req.body;
      if (data.mail === "example-409@gmail.com") {
        return res(
          ctx.status(409),
          ctx.json({
            err: {
              message: "conflict",
              items: [["mail", "登録済みのアドレスです"]],
            },
          })
        );
      }
      return res(ctx.status(201), ctx.json(data));
    }
  ),
];
