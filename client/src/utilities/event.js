import axios from "axios";

const api_url = "test";

export const createEvent = async (businessId, startTime, token) => {
  try {
    const config = {
      headers: { "Content-type": "application/json", token: token },
      baseURL: process.env.REACT_APP_SERVER_URL,
    };
    const { data } = await axios.post(
      "/event/create",
      {
        businessId,
        startTime,
      },
      config
    );

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const searchEvent = async (query, setEvents, token) => {
  const config = {
    headers: { "Content-type": "application/json", token: token },
    baseURL: process.env.REACT_APP_SERVER_URL,
  };
  try {
    const { data } = await axios.post(
      "/event/search",
      {
        query,
      },
      config
    );
    setEvents(data["data"]["events"]);
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
