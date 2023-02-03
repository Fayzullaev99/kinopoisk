import getCurrentYear from "./getCurrentYear";

export const KINOPOISK_MOVIE = "https://api.kinopoisk.dev/movie?";
export const KINOPOISK_MOVIE_BY_FILTERS =
  "https://api.kinopoisk.dev/movie?field=poster.previewUrl&search=!null&";
export const KINOPOISK_MOVIES =
  "https://api.kinopoisk.dev/movie?field=name&search=!null&field=poster.previewUrl&search=!null&";
export const KINOPOISK_IMAGES = "https://api.kinopoisk.dev/image?";
export const KINOPOISK_SEASONS = "https://api.kinopoisk.dev/season?";
export const API_KEY = "TYKC70P-A41MEW9-N457CJP-D7J7VME";

export const CURRENT_YEAR = getCurrentYear();

export const SWIPER_BREAKPOINTS_MAIN = {
  1480: {
    slidesPerView: 6.3,
  },
  1280: {
    slidesPerView: 5.2,
  },
  1024: {
    slidesPerView: 4.3,
  },
  768: {
    slidesPerView: 3.4,
  },
  320: {
    slidesPerView: 2.3,
  },
};

export const SWIPER_BREAKPOINTS_OTHER = {
  1250: {
    slidesPerView: 5.3,
  },
  1024: {
    slidesPerView: 4.3,
  },
  768: {
    slidesPerView: 3.4,
  },
  320: {
    slidesPerView: 2.3,
  },
};

export const OPTIONS_ORDER = [
  "новые", // убывание
  "старые", // возрастание
];
export const OPTIONS_TYPE = [
  "Фильм",
  "Сериал",
  "Мультфильм",
  "Аниме",
  "Мультсериал",
];

export const OPTIONS_GENRES = [
  "боевик",
  "семейный",
  "мелодрама",
  "драма",
  "приключения",
  "комедия",
  "детектив",
  "детский",
  "криминал",
  "ужасы",
  "фантастика",
  "фэнтези",
  "триллер",
  "фильм-нуар",
  "вестерн",
  "военный",
  "спорт",
  "документальный",
  "биография",
  "короткометражка",
  "история",
  "музыка",
  "мюзикл",
];
