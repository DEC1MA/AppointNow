import axios from "axios";

const api_url = process.env.REACT_APP_SERVER_URL;

export const connectTelegram = async (t, firstName, lastName) => {
  try {
    const { data } = await axios.post(`${api_url}/user/connectTelegram`, {
      t,
      firstName,
      lastName,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
