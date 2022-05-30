import axios from "axios";

const API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "8b8b82fe85fa47258d54d2a5f7da997a";

export const getTopHeadlines = async (country) => {
  const url = `${API_URL}?country=${country}&apiKey=${API_KEY}`;
  return await axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
