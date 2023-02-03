import { useNavigate } from "react-router-dom";
import "./MoreButton.css";

export default function MoreButton({
  page,
  totalPages,
  isLoading,
  handleRequest,
}) {
  const navigate = useNavigate();

  return (
    <div className='more'>
      {page <= totalPages ? (
        <button
          className='more__button'
          type='button'
          onClick={() => handleRequest(page)}
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Еще"}
        </button>
      ) : (
        <button
          className='more__button'
          type='button'
          onClick={() => navigate("/movies")}
        >
          Перейти в каталог
        </button>
      )}
    </div>
  );
}
