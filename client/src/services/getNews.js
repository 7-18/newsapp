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

// const API_URL = "https://newsapi.org/v2/everything";
// const API_KEY = "8b8b82fe85fa47258d54d2a5f7da997a";
// export const getNews = async ({ limit = 6, keyword = "random", page = 0 }) => {
//   const url = `${API_URL}?q=${keyword}${API_KEY}`;
//   return await axios
//     .get(url)
//     .then((response) => {
//       return response.data;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
