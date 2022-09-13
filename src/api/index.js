import axios from "axios";

const BASE_URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1';
const compareUrlString = (path) => BASE_URL + path;

const loginHandlerAsync = async ({ email, password }) => {
  const { data } = await axios.post(compareUrlString("/validate"), {
    email,
    password,
  });
  return data;
};

export const getProfileInfo = async (userId) => {
  const { data } = await axios.get(compareUrlString(`/user-info/${userId}`));
  return data;
};

export default {
  loginHandlerAsync,
  getProfileInfo,
};
