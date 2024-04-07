import flashMessage from "../../component/flashmessage";
import axios from "axios";

export default function useAPIClient() {
  const headers = {
    "Content-Type": "application/json",
    "Accept-Language": "en",
  };
  if (localStorage.getItem("authToken")) {
    headers.authorization = localStorage.getItem("authToken");
  }
  if (localStorage.getItem("refreshToken")) {
    headers.RefreshToken = localStorage.getItem("refreshToken");
  }
  // if (moment.tz.guess()) {
  //   headers.timezone = moment.tz.guess();
  // }
  const reqHandler = async ({
    url,
    data,
    method = "GET",
    enableFlashMessage = true,
  }) => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers,
        method,
        url,
        data,
      });
      if (enableFlashMessage) {
        flashMessage({
          message: res?.data?.message,
          status: res?.data?.status,
        });
      }
      return res.data;
    } catch (err) {
      const data = err?.response?.data;
      const statusCode = err?.response?.status;
      if (enableFlashMessage) {
        flashMessage({ message: data?.message, status: data?.status });
      }
      if (statusCode === 401) {
        localStorage.clear();
        window.location.replace("/");
      }
      return { error: true, status: false, data };
    }
  };
  const post = async (url, data = {}, { enableFlashMessage = true } = {}) => {
    return reqHandler({ url, data, enableFlashMessage, method: "POST" });
  };
  const get = async (url, { enableFlashMessage = true } = {}) => {
    return reqHandler({ url, data: {}, enableFlashMessage, method: "GET" });
  };
  const put = async (url, data = {}, { enableFlashMessage = true } = {}) => {
    try {
      const res = await axios({
        baseURL: process.env.REACT_APP_BASE_URL,
        headers,
        method: "PUT",
        url,
        data,
      });
      if (enableFlashMessage) {
        flashMessage({ message: res.data.message, status: res.data.status });
      }
      return res.data;
    } catch (err) {
      const data = err?.response?.data;
      if (enableFlashMessage) {
        flashMessage({ message: data?.message, status: data?.status });
      }
      return { error: true, data };
    }
  };
  const apiClient = {
    get,
    post,
    put,
  };
  return apiClient;
}
