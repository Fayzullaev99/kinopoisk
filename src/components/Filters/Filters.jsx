import "./Filters.css";
import { useCallback } from "react";
import RangeSlider from "../RangeSlider/RangeSlider";
import {
  OPTIONS_GENRES,
  OPTIONS_ORDER,
  OPTIONS_TYPE,
} from "../../utils/constants";
import SelectFilter from "../SelectFilter/SelectFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDoubleInput,
  changeGenresInput,
  changeSingleInput,
} from "../../store/filterSlice";
import { CURRENT_YEAR } from "../../utils/constants";
import { navigateToBottom, navigateToTop } from "../../utils/navigateTo";
import { fetchContent } from "../../store/searchSlice";

export default function Filters({ link }) {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.filter);
  const { isLoading, content } = useSelector((state) => state.search);

  const orderItems = OPTIONS_ORDER.map((text, i) => (
    <option key={i}>{text}</option>
  ));

  const typeItems = OPTIONS_TYPE.map((text, i) => (
    <option key={i}>{text}</option>
  ));

  const genreItems = OPTIONS_GENRES.map((text, i) => (
    <option key={i}>{text}</option>
  ));

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      name === "ratingFrom" ||
      name === "ratingTo" ||
      name === "yearFrom" ||
      name === "yearTo" ||
      name === "page"
        ? dispatch(changeSingleInput({ name, value: +value }))
        : dispatch(changeSingleInput({ name, value: value }));
    },
    [filters]
  );

  const handleChangeRating = useCallback(
    (value) =>
      dispatch(changeDoubleInput({ ratingFrom: value[0], ratingTo: value[1] })),
    [filters]
  );

  const handleChangeYear = useCallback(
    (value) =>
      dispatch(changeDoubleInput({ yearFrom: value[0], yearTo: value[1] })),
    [filters]
  );

  const handleChangeGenres = useCallback(
    (value) => {
      dispatch(changeGenresInput(value.map((genre) => genre.value)));
    },
    [filters]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchContent(`page=1&${link}`));
  };

  const navigateNode = content.length ? (
    <div className='filters__navigation'>
      <button
        className='filters__button filters__button_type_up'
        type='button'
        onClick={navigateToTop}
        disabled={isLoading}
      />
      <button
        className='filters__button filters__button_type_down'
        type='button'
        onClick={navigateToBottom}
        disabled={isLoading}
      />
    </div>
  ) : null;

  return (
    <div className='filters'>
      <form className='filters__form' onSubmit={handleSubmit}>
        <div className='filter'>
          <div className='filter__group'>
            <input
              className='filter__text-input'
              type='search'
              name='keyword'
              minLength={1}
              maxLength={50}
              autoComplete='off'
              onChange={handleChange}
              // required
            />
            <span className='filter__highlight'></span>
            <span className='filter__bar'></span>
            <label className='label'>Название</label>
          </div>
        </div>

        <div className='filter'>
          <p className='filter__filter-name'>Рейтинг</p>
          <RangeSlider
            from={filters.ratingFrom}
            to={filters.ratingTo}
            step={1}
            min={1}
            max={10}
            handleChange={handleChangeRating}
          />
          <div className='filter__wrapper'>
            <label className='filter__label'>
              <span className='filter__span'>От</span>
              <input
                className='filter__input'
                type='number'
                name='ratingFrom'
                min={1}
                max={filters.ratingTo}
                value={filters.ratingFrom}
                onChange={handleChange}
              />
            </label>
            <label className='filter__label'>
              <span className='filter__span'>До</span>
              <input
                className='filter__input'
                type='number'
                name='ratingTo'
                min={filters?.ratingFrom}
                max={10}
                value={filters?.ratingTo}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className='filter'>
          <p className='filter__filter-name'>Год</p>
          <RangeSlider
            from={filters.yearFrom}
            to={filters.yearTo}
            set
            step={1}
            min={1960}
            max={CURRENT_YEAR}
            handleChange={handleChangeYear}
          />
          <div className='filter__wrapper'>
            <label className='filter__label'>
              <span className='filter__span'>От</span>
              <input
                className='filter__input'
                type='number'
                name='yearFrom'
                min={1960}
                max={filters?.yearTo}
                value={filters?.yearFrom}
                onChange={handleChange}
              />
            </label>
            <label className='filter__label'>
              <span className='filter__span'>До</span>
              <input
                className='filter__input'
                type='number'
                name='yearTo'
                min={filters?.yearFrom}
                max={CURRENT_YEAR}
                value={filters?.yearTo}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className='filter flex'>
          <p className='filter__filter-name'>Сначала</p>
          <select
            className='filter__select'
            name='order'
            value={filters?.order}
            onChange={handleChange}
          >
            {orderItems}
          </select>
        </div>

        <div className='filter flex'>
          <p className='filter__filter-name'>Тип</p>
          <select
            className='filter__select'
            name='type'
            value={filters?.type}
            onChange={handleChange}
          >
            {typeItems}
          </select>
        </div>

        <div className='filter flex'>
          <p className='filter__filter-name'>Жанр</p>
          <SelectFilter onChange={handleChangeGenres} />
        </div>

        <button className='filters__submit' type='submit' disabled={isLoading}>
          {isLoading ? "Загрузка..." : "Найти"}
        </button>
      </form>
      {navigateNode}
    </div>
  );
}
