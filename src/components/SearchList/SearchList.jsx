import "./SearchList.css";
import SearchItem from "../SearchItem/SearchItem";
import { useSelector } from "react-redux";

export default function SearchList({ toPrevPage, toNextPage }) {
  //
  const { isLoading, totalPages, currentPage, content } = useSelector(
    (state) => state.search
  );

  const listNode = content.length ? (
    <ul className='search-list__list'>
      {content.map((item) => (
        <SearchItem data={item} key={item.id} />
      ))}
    </ul>
  ) : null;

  const buttonsNode = content.length ? (
    <div className='search-list__controller'>
      <button
        className='search-list__button search-list__button_type_prev'
        type='button'
        onClick={toPrevPage}
        disabled={isLoading}
      />
      <p className='search-list__text'>
        Страница {currentPage}/{totalPages}
      </p>
      <button
        className='search-list__button search-list__button_type_next'
        type='button'
        onClick={toNextPage}
        disabled={isLoading}
      />
    </div>
  ) : null;

  return (
    <div className='search-list'>
      {listNode}
      {buttonsNode}
    </div>
  );
}
