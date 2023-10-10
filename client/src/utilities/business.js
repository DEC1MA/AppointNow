import axios from "axios";

const api_url = "test";

export const createBusiness = async (
  name,
  about,
  location,
  phone,
  workingDays,
  workingHours,
  duration
) => {
  try {
    const { data } = await axios.post(`${api_url}/business/create`, {
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

export const updateBusiness = async (
  name,
  about,
  location,
  phone,
  workingDays,
  workingHours,
  duration
) => {
  try {
    const { data } = await axios.post(`${api_url}/business/create`, {
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
