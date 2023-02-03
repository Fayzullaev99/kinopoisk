import "./Main.css";
import Movies from "../Movies/Movies";
import { useEffect, useState } from "react";
import { getNewCartoons, getNewMovies, getNewSerials } from "../../utils/api";
import Slider from "../Slider/Slider";
import { SwiperSlide } from "swiper/react";
import SeriesItem from "../SeriesItem/SeriesItem";
import MovieItem from "../MovieItem/MovieItem";
import SliderMoreButton from "../SliderMoreButton/SliderMoreButton";

export default function Main() {
  const [mainMovies, setMainMovies] = useState([]);
  const [serials, setSerials] = useState([]);
  const [cartoons, setCartoons] = useState([]);
  const [moviePage, setMoviePage] = useState(1);
  const [serialsPage, setSerialsPage] = useState(1);
  const [cartoonsPage, setCartoonsPage] = useState(1);
  const [isLoadingMovies, setIsLoadingMovies] = useState(false);
  const [isLoadingSerials, setIsLoadingSerials] = useState(false);
  const [isLoadingCartoons, setIsLoadingCartoons] = useState(false);
  const [totalMoviesPages, setTotalMoviesPages] = useState(0);
  const [totalSerialsPages, setTotalSerialsPages] = useState(0);
  const [totalCartoonsPages, setTotalCartoonsPages] = useState(0);

  useEffect(() => {
    getMovies();
    getSerials();
    getCartoons();
  }, []);

  // фильмы года
  const getMovies = () => {
    setIsLoadingMovies(true);

    getNewMovies(moviePage)
      .then(({ data }) => {
        setMainMovies([...mainMovies, ...data.docs]);
        setTotalMoviesPages(data.pages);
        setMoviePage((prev) => prev + 1);
      })
      .catch((err) => console.log(err))
      .then(() => setIsLoadingMovies(false));
  };

  // сериалы года
  const getSerials = () => {
    setIsLoadingSerials(true);

    getNewSerials(serialsPage)
      .then(({ data }) => {
        setSerials([...serials, ...data.docs]);
        setTotalSerialsPages(data.pages);
        setSerialsPage((prev) => prev + 1);
      })
      .catch((err) => console.log(err))
      .then(() => setIsLoadingSerials(false));
  };

  // мультфильмы года
  const getCartoons = () => {
    setIsLoadingCartoons(true);

    getNewCartoons(cartoonsPage)
      .then(({ data }) => {
        setCartoons([...cartoons, ...data.docs]);
        setTotalCartoonsPages(data.pages);
        setCartoonsPage((prev) => prev + 1);
      })
      .catch((err) => console.log(err))
      .then(() => setIsLoadingCartoons(false));
  };

  return (
    <>
      <Movies
        mainMovies={mainMovies}
        page={moviePage}
        totalPages={totalMoviesPages}
        isLoading={isLoadingMovies}
        handleRequest={getMovies}
      />
      {serials?.length > 0 && (
        <Slider title='Новые сериалы'>
          {serials.map((series) => (
            <SwiperSlide key={series.id}>
              <SeriesItem data={series} />
            </SwiperSlide>
          ))}
          {totalSerialsPages >= serialsPage && (
            <SwiperSlide>
              <SliderMoreButton
                handleRequest={getSerials}
                isLoading={isLoadingSerials}
              />
            </SwiperSlide>
          )}
        </Slider>
      )}
      {cartoons?.length > 0 && (
        <Slider title='Новые мультфильмы'>
          {cartoons.map((cartoon) => (
            <SwiperSlide key={cartoon.id}>
              <MovieItem data={cartoon} />
            </SwiperSlide>
          ))}
          {totalCartoonsPages >= cartoonsPage && (
            <SwiperSlide>
              <SliderMoreButton
                handleRequest={getCartoons}
                isLoading={isLoadingCartoons}
              />
            </SwiperSlide>
          )}
        </Slider>
      )}
    </>
  );
}
