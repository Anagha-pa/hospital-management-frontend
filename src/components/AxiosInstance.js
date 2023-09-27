
import axios from "axios";
import { useSelector } from "react-redux";

const AxiosInstance = () => {
  const authToken = useSelector((state) => state.user.token);

  const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken.access}`,
    },
  });

  return axiosInstance;
};

export default AxiosInstance;




