import "./RangeSlider.css";
import { useState, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import { changeDoubleInput } from "../../store/filterSlice";

export default function RangeSlider({
  rtl,
  from,
  to,
  step,
  min,
  max,
  handleChange,
}) {
  const [values, setValues] = useState([from, to]);

  useEffect(() => setValues([from, to]), [from, to]);

  return (
    <div className='range'>
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        rtl={rtl}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            className='range__track'
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
          >
            <div
              className='range__background'
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values,
                  colors: ["#2f2f2f", "#ccc", "#2f2f2f"],
                  min,
                  max,
                  rtl,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            className='range__thumb'
            {...props}
            style={{
              ...props.style,
            }}
          />
        )}
      />
    </div>
  );
}
