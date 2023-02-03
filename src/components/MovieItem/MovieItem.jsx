import "./MovieItem.css";
import { Link } from "react-router-dom";

export default function MovieItem({ data }) {
  return (
    <Link className='slider__link' to={`/movie/${data.id}`}>
      <article className='slider__slide noselect'>
        <img src={data?.poster?.previewUrl} />
        <h3 className='slider__slide-title'>
          {data.name || data.enName || ""}
        </h3>
      </article>
    </Link>
  );
}
