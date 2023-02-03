import "./SliderMoreButton.css";
import SliderLoader from "../SliderLoader/SliderLoader";

// export default function SliderMoreButton({ handleRequest, isLoading }) {
//   return (
//     <button
//       disabled={isLoading}
//       className='slider-more-button'
//       type='button'
//       onClick={handleRequest}
//     />
//   );
// }

export default function SliderMoreButton({ handleRequest, isLoading }) {
  return (
    <>
      {isLoading ? (
        <SliderLoader />
      ) : (
        <button
          disabled={isLoading}
          className='slider-more-button'
          type='button'
          onClick={handleRequest}
        />
      )}
    </>
  );
}
