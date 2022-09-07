import React from "react";
import { AboutTeamCard } from "./AboutTeamCard";
import { fetcher } from "../utils/fetcher";
import { teamSvg } from "../assets";
import useSWR from "swr";

export function AboutTeam({ style }) {
  const { data } = useSWR(
    `${import.meta.env.VITE_REACT_APP_API_URL}api/v1/get_team`,
    fetcher
  );

  return (
    <div className="about__team" style={style}>
      <img
        loading="lazy"
        src={teamSvg}
        alt="teamSvg"
        className="about__team__svg"
      />
      <div className="about__team__heading heading">
        Teamwork, Makes the dream work
      </div>
      <div className="about__team__content">
        {data?.map((item, i) => (
          <AboutTeamCard
            key={i}
            image={item.image}
            name={item.name}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
}
