import "./About.css";
import "react-tabs/style/react-tabs.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Slider from "../Slider/Slider";
import PersonItem from "../PersonItem/PersonItem";
import BackButton from "../BackButton/BackButton";
import MovieItem from "../MovieItem/MovieItem";
import Room from "../Room/Room";
import formatTime from "../../utils/formatTime";
import { navigateToTop } from "../../utils/navigateTo";
import { fetchImages, fetchMovie } from "../../store/movieSlice";
import { useDispatch, useSelector } from "react-redux";

export default function About() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLoading, error, movie } = useSelector((state) => state.movie);

  //
  useEffect(() => {
    dispatch(fetchMovie(id));
    navigateToTop();
  }, [id]);

  useEffect(() => {
    error && console.log(error);
  }, [error]);

  // альтернативный бэкграунд на случай отсутствия в бд
  useEffect(() => {
    if (movie.backdrop?.url === null || movie.backdrop === null)
      dispatch(fetchImages(id));
  }, [movie.backdrop]);

  const ratingKp = movie.rating?.kp.toString().substring(0, 3);
  const duration = formatTime(movie.movieLength);
  const countries = movie.countries?.map((item) => item.name).join(", ");
  const genres = movie.genres?.map((item) => item.name).join(", ");
  const sequels = movie.sequelsAndPrequels?.filter(
    (item) => item.hasOwnProperty("id") && item.type === "sequel"
  );
  const prequels =
    movie.sequelsAndPrequels?.filter(
      (item) => item.hasOwnProperty("id") && item.type === "prequel"
    ) || [];
  const actors = movie.persons
    ?.slice(0, 31)
    .filter((x) => x.enProfession === "actor");

  const backgroundNode = movie.backdrop?.url && (
    <div className='about__background'>
      <div className='about__background-wrapper'>
        <img
          className='about__background-image'
          src={movie.backdrop.url}
          alt='постер, задний план'
        />
      </div>
    </div>
  );

  return (
    <section className='about'>
      {backgroundNode}

      <div className='about__main-wrapper'>
        <BackButton />
        {movie.poster?.url && (
          <img
            className='about__poster'
            src={movie.poster.url}
            alt='постер фильма'
          />
        )}
        <div className='about__text-wrapper'>
          <h1 className='about__text about__text_type_title'>
            {movie.name || "Без названия"}
          </h1>
          <h2 className='about__text about__text_type_subtitle'>
            <span className='about__span'>
              {movie.enName || movie.alternativeName}
            </span>
          </h2>
          <ul className='about__list'>
            <li className='about__list-item about__text'>{movie.year}</li>
            <li className='about__list-item about__text'>{duration}</li>
            <li>
              <span className='about__span'>IMDB</span>
              {movie.rating?.imdb}
            </li>
            <li>
              <span className='about__span'>КП</span>
              {ratingKp}
            </li>
            {movie.ageRating && (
              <li className='about__list-item about__text about__list-item_type_age'>
                {movie.ageRating ? `${movie.ageRating}+` : ""}
              </li>
            )}
          </ul>
          <p className='about__text'>
            <span className='about__span'>Страна: </span>
            {countries}
          </p>
          <p className='about__text'>
            <span className='about__span'>Жанр: </span>
            {genres}
          </p>
        </div>
      </div>
      <div className='about__description-wrapper'>
        <span className='about__text about__span'>Описание:</span>
        <p className='about__text about__text_type_descriprion'>
          {movie.description}
        </p>
      </div>

      <Room id={id} />

      <Tabs
        focusTabOnClick={false}
        selectedTabClassName='tablist__tab-selected'
      >
        <TabList className='tablist'>
          {movie.similarMovies?.length > 0 && (
            <Tab className='tablist__tab'>Похожие</Tab>
          )}
          {actors?.length > 0 && <Tab className='tablist__tab'>Актеры</Tab>}
          {sequels?.length > 0 && <Tab className='tablist__tab'>Сиквелы</Tab>}
          {prequels?.length > 0 && <Tab className='tablist__tab'>Приквелы</Tab>}
        </TabList>

        {movie.similarMovies?.length > 0 && (
          <TabPanel>
            <Slider>
              {movie.similarMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieItem data={movie} />
                </SwiperSlide>
              ))}
            </Slider>
          </TabPanel>
        )}

        {actors?.length > 0 && (
          <TabPanel>
            <Slider>
              {actors.map((actor) => (
                <SwiperSlide key={actor.id}>
                  <PersonItem data={actor} />
                </SwiperSlide>
              ))}
            </Slider>
          </TabPanel>
        )}

        {sequels?.length > 0 && (
          <TabPanel>
            <Slider>
              {sequels.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieItem data={movie} />
                </SwiperSlide>
              ))}
            </Slider>
          </TabPanel>
        )}

        {prequels?.length > 0 && (
          <TabPanel>
            <Slider>
              {prequels.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <MovieItem data={movie} />
                </SwiperSlide>
              ))}
            </Slider>
          </TabPanel>
        )}
      </Tabs>
    </section>
  );
}
