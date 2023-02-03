import "./Header.css";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";
import BurgerButton from "../BurgerButton/BurgerButton";

export default function Header({ isOpen, setIsOpen }) {
  const [isScroll, setIsScroll] = useState(false);
  const [isOut, setIsOut] = useState(false);
  let scrollPrev = window.scrollY;

  // задник шапки
  function scroll() {
    window.scrollY >= 120 ? setIsScroll(true) : setIsScroll(false);
  }

  // спрятать шапку
  function setHideHeader() {
    window.scrollY >= 100 && window.scrollY > scrollPrev
      ? setIsOut(true)
      : setIsOut(false);
    scrollPrev = window.scrollY;
  }

  useEffect(() => {
    window.addEventListener("scroll", setHideHeader);
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", setHideHeader);
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div className='page__header'>
      <header
        className={`header ${isScroll ? "scroll" : ""} ${isOut ? "out" : ""}`}
      >
        <div className='header__container'>
          <h2>Sanjar</h2>
          <Navigation setIsOpen={setIsOpen} />
          <BurgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </header>
    </div>
  );
}
