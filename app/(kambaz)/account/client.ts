import axios from "axios";

const API = process.env.NEXT_PUBLIC_HTTP_SERVER;

const axiosWithCredentials = axios.create({
  withCredentials: true,
});

export const signin = async (credentials: any) => {
  const response = await axiosWithCredentials.post(
    `${API}/api/users/signin`,
    credentials
  );
  return response.data;
};

export const profile = async () => {
  const response = await axiosWithCredentials.post(
    `${API}/api/users/profile`
  );
  return response.data;
};