import "./MovieSearch.css";
import Filters from "../Filters/Filters";
import SearchList from "../SearchList/SearchList";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import formatType from "../../utils/formatType";
import formatOrder from "../../utils/formatOrder";
import { fetchContent } from "../../store/searchSlice";

export default function MovieSearch() {
  const [link, setLink] = useState("");
  const dispatch = useDispatch();
  const { isLoading, filters } = useSelector((state) => state.filter);
  const { currentPage, totalPages } = useSelector((state) => state.search);

  // предыдущая страница
  const navigatePrevPage = () => {
    if (currentPage > 1) {
      dispatch(fetchContent(`page=${currentPage - 1}&${link}`));
    }
  };

  // следующая страница
  const navigateNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(fetchContent(`page=${currentPage + 1}&${link}`));
    }
  };

  const genres =
    filters.genres.map((x) => `&field=genres.name&search=${x}`).join("") ||
    null;

  // основа ссылки
  useEffect(() => {
    setLink(
      `field=year&search=${filters.yearFrom}-${
        filters.yearTo
      }&field=rating.kp&search=${filters.ratingFrom}-${
        filters.ratingTo
      }&field=name&search=${
        filters.keyword || "!null"
      }&field=typeNumber&search=${formatType(
        filters.type
      )}&sortField=year&sortType=${formatOrder(filters.order)}${
        filters.genres.length > 0 ? genres : ""
      }`
    );
  }, [filters]);

  return (
    <section className='movieSearch'>
      <Filters link={link} />
      <SearchList toPrevPage={navigatePrevPage} toNextPage={navigateNextPage} />
    </section>
  );
}
