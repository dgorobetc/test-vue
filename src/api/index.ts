import axios from "axios";

const BASE_URL = 'https://mysterious-reef-29460.herokuapp.com/api/v1';
const compareUrlString = (path: string) => BASE_URL + path;

type LoginType = {
  email: string,
  password: string,
}
const loginHandlerAsync = async ({ email, password }: LoginType) => {
  const { data } = await axios.post(compareUrlString("/validate"), {
    email,
    password,
  });
  return data;
};

export const getProfileInfo = async (userId: number) => {
  const { data } = await axios.get(compareUrlString(`/user-info/${userId}`));
  return data;
};

export const getNews = async () => {
  const { data: respnse } = await axios.get(compareUrlString(`/news`));
  return respnse.data;
};

export default {
  loginHandlerAsync,
  getNews,
  getProfileInfo,
};
