import axios from "axios";
import store from "../store";
import { SIGNOUT } from "../actions/types";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.data.msg === "Token is not valid") {
//       store.dispatch({ type: SIGNOUT });
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
