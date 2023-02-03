import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";
import About from "../About/About";
import NotFound from "../NotFound/NotFound";
import MovieSearch from "../MovieSearch/MovieSearch";
import { useLocation } from "react-router-dom";

export default function App() {
  const location = useLocation();
  const pageClassName = !location.pathname.startsWith("/movie/")
    ? "page"
    : "page overflow";

  return (
    <div className={pageClassName}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='/movies' element={<MovieSearch />} />
          <Route path='/movie/:id' element={<About />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
