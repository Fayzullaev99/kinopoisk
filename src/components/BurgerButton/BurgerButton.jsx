import "./BurgerButton.css";

export default function BurgerButton({ isOpen, setIsOpen }) {
  return (
    <div
      className={`burger ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className='burger__button' />
    </div>
  );
}
