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

export const updateFlat = async (
  id,
  flatData
) => {
  const token = localStorage.getItem("token");

  const response = await api.put(
    `/flats/${id}`,
    flatData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteFlat = async (
  id
) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(
    `/flats/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};