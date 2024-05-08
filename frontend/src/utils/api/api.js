const BASE_URL = "https://twitter-clone-deploy.onrender.com"; // Replace with your actual backend URL

export const getApiUrl = (endpoint) => {
  return `${BASE_URL}/${endpoint}`;
};
