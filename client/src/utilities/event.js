import axios from "axios";

export const createEvent = async (businessId, startTime, token) => {
  try {
    if (process.env.REACT_APP_DEV === "true") {
      token = "2222";
    }
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
  if (process.env.REACT_APP_DEV === "true") {
    token = "2222";
  }
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
    setEvents(data["events"]);
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const cancelEvent = async (eventId, token) => {
  try {
    if (process.env.REACT_APP_DEV === "true") {
      token = "2222";
    }
    const config = {
      headers: { "Content-type": "application/json", token: token },
      baseURL: process.env.REACT_APP_SERVER_URL,
    };

    const { data } = await axios.post(
      "/event/cancel",
      {
        eventId,
      },
      config
    );

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const readFreeTimes = async (businessId, token) => {
  try {
    if (process.env.REACT_APP_DEV === "true") {
      token = "2222";
    }
    const config = {
      headers: { "Content-type": "application/json", token: token },
      baseURL: process.env.REACT_APP_SERVER_URL,
    };

    const { data } = await axios.post(
      "event/readFreeTimes",
      {
        businessId,
      },
      config
    );

    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};

export const businessEvents = async (businessId, setEvents, token) => {
  try {
    if (process.env.REACT_APP_DEV === "true") {
      token = "2222";
    }
    const config = {
      headers: { "Content-type": "application/json", token: token },
      baseURL: process.env.REACT_APP_SERVER_URL,
    };

    const { data } = await axios.post(
      "event/businessEvents",
      {
        businessId,
      },
      config
    );
    setEvents(data["events"]);
    return data;
  } catch (error) {
    console.log(error?.response?.data?.message);
  }
};
