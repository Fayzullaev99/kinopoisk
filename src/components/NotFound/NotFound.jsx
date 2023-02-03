import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='not-found__container'>
      <h1 className='not-found__title'>404</h1>
      <h2 className='not-found__subtitle'>Страница не найдена :(</h2>
      <button className='not-found__link' onClick={() => navigate("/")}>
        На главную
      </button>
    </div>
  );
}
