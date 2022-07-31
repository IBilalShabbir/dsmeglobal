import React from "react";
import { Fade } from "react-reveal";
import { CareersFilters } from "../components/CareersFilters";
import VacencyCard from "../components/VacencyCard";

export function CareersVacencies({
  setDeparment,
  setSearchQuery,
  noData,
  department,
  setIsApplyOpen,
  careerDataFiltered,
  setSelectedItem,
}) {
  return (
    <div className="hot__offers__section">
      <Fade up down>
        <div className="hot__offers__section__text">
          <div className="hot__offers__section__header">
            Open Vacancies{" "}
            <span className="hot__offers__section__header">- Join us</span>
          </div>
          <div className="hot__offers__section__header__text">
            We give you opportunities to excel and achieve the global
            recognition that you deserve!
          </div>
        </div>
      </Fade>
      <div className="hot__offers__section__content">
        <CareersFilters
          setDeparment={setDeparment}
          setSearchQuery={setSearchQuery}
        />
        {careerDataFiltered.length === 0 ? (
          <div
            style={{
              width: "100%",
              height: "400px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              loading="lazy"
              src={noData}
              alt="nodata"
              style={{
                width: 400,
              }}
            />
          </div>
        ) : (
          careerDataFiltered.map((item, i) => (
            <VacencyCard
              item={item}
              key={JSON.stringify(item)}
              noOfItems={i}
              department={department}
              onApply={() => {
                setIsApplyOpen(true);
                setSelectedItem(item);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
