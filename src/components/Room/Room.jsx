import "./Room.css";
import { useEffect } from "react";

export default function Room({ id }) {
  //
  useEffect(() => {
    document.querySelector(".room__video").setAttribute("data-kinopoisk", id);

    const script = document.createElement("script");
    script.src = "https://kinobd.ru/js/player_.js";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [id]);

  return (
    <div className='room'>
      <div className='room__container'>
        <div className='room__video' id='kinobd' />
      </div>
    </div>
  );
}
