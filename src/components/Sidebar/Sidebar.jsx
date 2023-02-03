import "./Sidebar.css";
import Navigation from "../Navigation/Navigation";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className='sidebar__wrapper'>
        <Navigation setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
