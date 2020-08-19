import axios from 'axios';

const axiosKey = '17528324-3082acf682c990c8e2fa3d4c7';

const imagesFetchApi = (searchValue, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchValue}&page=${3}$&key=${axiosKey}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
export default { imagesFetchApi };

// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
