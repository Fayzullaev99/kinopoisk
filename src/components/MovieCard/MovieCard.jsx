import "./MovieCard.css";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  // const ratingKp = movie.rating.kp.toString().substring(0, 3);
  // const ratingImdb = movie.rating.imdb.toString();
  // const year = movie.year || "";

  // console.log(movie);

  return (
    <Link className='movie-link' to={`/movie/${movie.id}`}>
      <article className='movie'>
        <div className='movie__image-before'>
          <img
            className='movie__image'
            src={movie.poster.previewUrl}
            alt='превью фильма'
          />
        </div>

        <h3 className='movie__title'>{movie.name || movie.enName}</h3>
      </article>
    </Link>
  );
}
