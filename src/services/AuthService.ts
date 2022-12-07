import { axios } from "./axios";
import qs from "querystring";

export class AuthService {
  static auth(username: string, password: string) {
    return axios.post(
      "/login",
      qs.stringify({ username: username, password: password }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  }
}
