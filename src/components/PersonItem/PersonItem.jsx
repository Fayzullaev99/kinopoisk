import "./PersonItem.css";

export default function PersonItem({ data }) {
  return (
    <article className='slider__slide noselect grabbable'>
      <img src={data.photo} />
      <h3 className='slider__slide-title'>{data.name || data.enName || ""}</h3>
    </article>
  );
}
