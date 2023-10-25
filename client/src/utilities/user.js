import axios from "axios";

export const login = async (token) => {
  const config = {
    headers: { "Content-type": "application/json" },
    baseURL: process.env.REACT_APP_SERVER_URL,
  };
  try {
    const { data } = await axios.post(
      "/user/login",
      {
        token,
      },
      config
    );

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const connectTelegram = async (token, firstName, lastName) => {
  const config = {
    headers: { "Content-type": "application/json" },
    baseURL: process.env.REACT_APP_SERVER_URL,
  };
  try {
    const { data } = await axios.post(
      "/user/connectTelegram",
      {
        token,
        firstName,
        lastName,
      },
      config
    );
    login(token);
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
