import React from "react";
import { Fade } from "react-reveal";

export function CareersFilters({ setDeparment, setSearchQuery, data }) {
  return (
    <div className="hot__offers__section__content__filters">
      <Fade up>
        <input
          list="departments"
          name="department"
          id="department"
          placeholder="Department"
          onChange={(e) => {
            setDeparment(e.target.value);
          }}
        />
      </Fade>
      <datalist id="departments">
        {data.map((category) => (
          <option key={JSON.stringify(category)} value={category.name} />
        ))}
      </datalist>
      <Fade up>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
      </Fade>
    </div>
  );
}
