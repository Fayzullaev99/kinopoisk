import "./SelectFilter.css";
import Select from "react-select";
import { OPTIONS_GENRES } from "../../utils/constants";

export default function SelectFilter({ onChange }) {
  //
  const options = OPTIONS_GENRES.map((option) => ({
    value: option,
    label: option[0].toUpperCase() + option.slice(1),
  }));

  return (
    <Select
      placeholder='Все жанры'
      isMulti
      name='genres'
      options={options}
      className='select'
      classNamePrefix='select'
      onChange={onChange}
    />
  );
}
