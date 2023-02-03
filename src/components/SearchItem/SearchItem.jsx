import "./SearchItem.css";
import formatTime from "../../utils/formatTime";
import { Link } from "react-router-dom";

export default function SearchItem({ data }) {
  const duration = data.movieLength ? formatTime(data.movieLength) : null;

  return (
    <li className='search-item'>
      <Link className='search-item__link' to={`/movie/${data.id}`}>
        <img
          className='search-item__poster'
          src={data?.poster?.previewUrl}
          alt='постер'
        />
        <div className='search-item__text-container'>
          <h2 className='search-item__title about__text'>{data.name}</h2>
          <ul className='search-item__list'>
            <li className='about__list-item about__text'>{data.year}</li>
            <li className='about__list-item about__text'>{duration}</li>
            {data.rating.imdb ? (
              <li>
                <span className='about__span'>IMDB</span>
                {data.rating.imdb}
              </li>
            ) : null}
            {data.rating.kp ? (
              <li>
                <span className='about__span'>КП</span>
                {data.rating.kp || ""}
              </li>
            ) : null}
          </ul>
        </div>
      </Link>
    </li>
  );
}
