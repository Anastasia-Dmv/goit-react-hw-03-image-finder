import axios from "axios";

const API_key = "17528324-3082acf682c990c8e2fa3d4c7";

const imagesFetchApi = (input, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${input}&page=${page}&per_page=12&key=${API_key}`
    )
    .then((response) => response.data.hits);
};
export default { imagesFetchApi };
