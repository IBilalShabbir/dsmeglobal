export function WebdevArrEntry({ label, svg, selected, setSelected }) {
  return (
    <>
      <div className="container__emerging__technologies__section__wrapper">
        <input
          type="radio"
          name="container__emerging__technologies__section__wrapper"
          defaultChecked={selected === label}
          onChange={() => {
            setSelected(label);
          }}
          title={label}
          className="container__emerging__technologies__section__wrapper__input"
        />
        <div className="container__emerging__technologies__section__entry">
          <div className="container__emerging__technologies__section__entry__img">
            {svg}
          </div>
          <div className="container__emerging__technologies__section__entry__text">
            {label}
          </div>
        </div>
      </div>
    </>
  );
}
