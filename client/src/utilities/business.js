import axios from "axios";

export const createBusiness = async (
  name,
  about,
  location,
  phone,
  workingDays,
  workingHours,
  duration
) => {
  const config = {
    headers: { "Content-type": "application/json", token: "1234" },
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
  duration
) => {
  try {
    const { data } = await axios.post(`/business/update`, {
      businessId,
      name,
      about,
      location,
      phone,
      workingDays,
      workingHours,
      duration,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const searchBusiness = async (query, setBusinesses) => {
  const config = {
    headers: { "Content-type": "application/json", token: "1234" },
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

export const readBusiness = async (setBusinessesList) => {
  const config = {
    headers: { "Content-type": "application/json", token: "1234" },
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
