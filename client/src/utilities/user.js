import axios from "axios";

const api_url = "test";

export const register = async (phone) => {
  try {
    const { data } = await axios.post(`${api_url}/user/register`, {
      phone: phone,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const login = async (phone) => {
  try {
    const { data } = await axios.post(`${api_url}/user/login`, {
      phone: phone,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
