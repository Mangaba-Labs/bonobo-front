import Axios from "axios";
import { toast } from "react-toastify";

const UNAUTHORIZED = 401;
const INTERNAL_SERVER_ERROR = 500;

export interface Response {
  status: string;
}

const axios = Axios.create({
  baseURL: "http://localhost:8080",
  timeout: 10000,
});

axios.interceptors.request.use((config) => {
  const headers = {
    ...config.headers,
    "access-token": `Bearer ${localStorage.getItem("access_token")}`,
  };

  return {
    ...config,
    headers,
  };
});

axios.interceptors.response.use(
  (response) => response,
  async (err) => {
    const { status } = err.response;

    if (status === UNAUTHORIZED) {
      toast.error("🔐 Unauthorized", {
        autoClose: 5000,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        onClose: () => {
          localStorage.removeItem("access_token");
          window.location.href = `${process.env.DOMAIN}/login`;
        },
      });
    }

    if (status === INTERNAL_SERVER_ERROR) {
      toast.error("😭 An error has occurred on server", {
        autoClose: 5000,
        position: "top-center",
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }

    return Promise.reject(err.response);
  }
);

export { axios };
