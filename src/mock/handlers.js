import { http, HttpResponse } from "msw";

import user from "./data/user.json";

export const handlers = [
  http.get("https://api.github.com/users/eddiejaoude", () =>
    HttpResponse.json(user)
  ),
];
