import api from "../api/axios";

export const getMembers = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/members", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.data;
};

export const createMember = async (memberData) => {
  const token = localStorage.getItem("token");

  const response = await api.post(
    "/members",
    memberData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};