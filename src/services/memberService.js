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

export const deleteMember = async (id) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(`/members/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const updateMember = async (
  id,
  memberData
) => {
  const token = localStorage.getItem("token");

  const response = await api.put(
    `/members/${id}`,
    memberData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};