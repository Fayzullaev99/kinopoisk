import {
  KINOPOISK_MOVIES,
  API_KEY,
  CURRENT_YEAR,
  KINOPOISK_IMAGES,
  KINOPOISK_SEASONS,
  KINOPOISK_MOVIE,
  KINOPOISK_MOVIE_BY_FILTERS,
} from "./constants";
import axios from "axios";

// фильм
export const getMovie = (id) => {
  return axios.get(`${KINOPOISK_MOVIE}field=id&search=${id}&token=${API_KEY}`);
};

// новинки фильмов
export const getNewMovies = (page) => {
  return axios.get(
    `${KINOPOISK_MOVIES}field=rating.kp&search=5-10&field=year&search=${
      CURRENT_YEAR - 1
    }-${CURRENT_YEAR}&field=typeNumber&search=1&sortField=year&sortType=-1&limit=12&sortField=votes.imdb&sortType=-1&page=${page}&token=${API_KEY}`
  );
};

// новинки сериалов
export const getNewSerials = (page) => {
  return axios.get(
    `${KINOPOISK_MOVIES}field=rating.kp&search=5-10&field=year&search=${
      CURRENT_YEAR - 1
    }-${CURRENT_YEAR}&field=typeNumber&search=2&sortField=year&sortType=-1&limit=10&sortField=votes.imdb&sortType=-1&page=${page}&token=${API_KEY}`
  );
};

// новинки мультфильмов
export const getNewCartoons = (page) => {
  return axios.get(
    `${KINOPOISK_MOVIES}field=rating.imdb&search=5-10&field=year&search=${
      CURRENT_YEAR - 1
    }-${CURRENT_YEAR}&field=typeNumber&search=3&sortField=year&sortType=-1&limit=10&sortField=votes.imdb&sortType=-1&page=${page}&token=${API_KEY}`
  );
};

// фильтры
export const getMovieByFilters = (link) => {
  return axios.get(
    `${KINOPOISK_MOVIE_BY_FILTERS}${link}&limit=20&token=${API_KEY}`
  );
};

// изображения
export const getMovieImages = (id) => {
  return axios.get(
    `${KINOPOISK_IMAGES}field=movieId&search=${id}&limit=40&token=${API_KEY}`
  );
};

// // колво сезонов сериала для about
// export const getSeasonsNum = (id) => {
//   return axios.get(
//     `${KINOPOISK_SEASONS}field=movieId&search=${id}&token=${API_KEY}`
//   );
// };
