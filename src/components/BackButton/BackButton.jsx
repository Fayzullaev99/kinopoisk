import "./BackButton.css";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className='return' onClick={() => navigate(-1)}>
      <span className='return__span' />
      Назад
    </button>
  );
}
