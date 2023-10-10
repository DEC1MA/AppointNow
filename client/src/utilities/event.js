import axios from "axios";

const api_url = "test";

export const createEvent = async (businessId, startTime) => {
  try {
    const { data } = await axios.post(`${api_url}/event/create`, {
      businessId,
      startTime,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const searchEvent = async (search) => {
  try {
    const { data } = await axios.post(`${api_url}/event/search`, {
      search,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const cancelUserEvent = async () => {
  try {
    const { data } = await axios.post(`${api_url}/event/cancel`, {});

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const cancelBusinessEvent = async (businessId) => {
  try {
    const { data } = await axios.post(`${api_url}/event/cancelUserEvent`, {
      businessId,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const cancelEvent = async (eventId) => {
  try {
    const { data } = await axios.post(`${api_url}/event/cancelEvent`, {
      eventId,
    });

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
