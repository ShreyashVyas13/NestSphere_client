import api from "../api/axios";

export const getFlats = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/flats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createFlat = async (flatData) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/flats",
    flatData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getFlatOptions = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/flats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};