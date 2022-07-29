import React from "react";

export function ScaleUpYourTeamForStaffCard({ icon, label, info }) {
  return (
    <div className="scaleup__startup__card engagement__models__card ">
      <div className="scaleup__startup__card__icon">{icon}</div>
      <div className="scaleup__startup__card__label">{label}</div>
      <div className="scaleup__startup__card__info">{info}</div>
    </div>
  );
}
