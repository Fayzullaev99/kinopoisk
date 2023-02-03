import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation({ setIsOpen }) {
  return (
    <div className='navigation'>
      <nav className='navigation__nav'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive
              ? "navigation__link navigation__link-active"
              : "navigation__link"
          }
          onClick={() => setIsOpen(false)}
        >
          Главная
          <span className='navigation__link-span' />
        </NavLink>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            isActive
              ? "navigation__link navigation__link-active"
              : "navigation__link"
          }
          onClick={() => setIsOpen(false)}
        >
          Каталог
          <span className='navigation__link-span' />
        </NavLink>
      </nav>

      <form className='navigation__form'>
        <input
          className='navigation__input'
          type='search'
          placeholder='Быстрый поиск...'
          onChange={(e) => console.log(e.target.value)}
        />
      </form>
    </div>
  );
}
