import "./Movies.css";
import MovieCard from "../MovieCard/MovieCard";
import MoreButton from "../MoreButton/MoreButton";
import { CURRENT_YEAR } from "../../utils/constants";

export default function Movies({
  mainMovies,
  page,
  totalPages,
  isLoading,
  handleRequest,
}) {
  //
  const button = mainMovies.length > 0 && (
    <MoreButton
      page={page}
      totalPages={totalPages}
      isLoading={isLoading}
      handleRequest={handleRequest}
    />
  );

  const title =
    mainMovies.length > 0 ? `Новинки ${CURRENT_YEAR - 1}-${CURRENT_YEAR}` : "";

  return (
    <section className='movies'>
      <div className='movies__title-container'>
        <h2 className='movies__title'>{title}</h2>
      </div>
      <div className='movies__list'>
        {mainMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      {button}
    </section>
  );
}
