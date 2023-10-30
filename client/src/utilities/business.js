import axios from "axios";

export const createBusiness = async (
  name,
  about,
  location,
  phone,
  workingDays,
  workingHours,
  duration,
  token
) => {
  const config = {
    headers: { "Content-type": "application/json", token: token },
    baseURL: process.env.REACT_APP_SERVER_URL,
  };
  try {
    const { data } = await axios.post(
      "business/create",
      {
        name,
        about,
        location,
        phone,
        workingDays,
        workingHours,
        duration,
      },
      config
    );

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const updateBusiness = async (
  businessId,
  name,
  about,
  location,
  phone,
  workingDays,
  workingHours,
  duration,
  token
) => {
  const config = {
    headers: { "Content-type": "application/json", token: token },
    baseURL: process.env.REACT_APP_SERVER_URL,
  };
  try {
    const { data } = await axios.post(
      "/business/update",
      {
        businessId,
        name,
        about,
        location,
        phone,
        workingDays,
        workingHours,
        duration,
      },
      config
    );

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const searchBusiness = async (query, setBusinesses, token) => {
  const config = {
    headers: { "Content-type": "application/json", token: token },
    baseURL: process.env.REACT_APP_SERVER_URL,
  };
  try {
    const { data } = await axios.post(
      "/business/search",
      {
        query,
      },
      config
    );
    setBusinesses(data["data"]["businesses"]);
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const readBusiness = async (setBusinessesList, token) => {
  const config = {
    headers: { "Content-type": "application/json", token: token },
    baseURL: process.env.REACT_APP_SERVER_URL,
  };
  try {
    const { data } = await axios.post("business/readMyBusiness", {}, config);
    setBusinessesList(data["data"]["businesses"]);

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
