import axios from "axios";

const API_URL = "/everything/";

export const getNews = async (query) => {
  return await axios
    .get(API_URL + query)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
