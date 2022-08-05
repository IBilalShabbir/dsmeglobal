import React, { useEffect, useState } from "react";
import ApplyForJobPopup from "../components/ApplyForJobPopup";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { CareerBanner } from "../components/CareerBanner";
import { CareeersFeature } from "../components/CareeersFeature";
import { CareersVacencies } from "../components/CareersVacencies";
import { CareersViewOpenings } from "../components/CareersViewOpenings";
import noData from "../assets/noData.webp";
import career from "../assets/career.svg";

export default function Careers({ setLightHeader, data, CategoryData }) {
  const [slidesPerPage, setSlidesPerPage] = useState(3.5);
  const [department, setDeparment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectItem, setSelectedItem] = useState([]);
  const [careerDataFiltered, setCareerDataFiltered] = useState([]);

  useEffect(() => {
    setCareerDataFiltered(
      data.filter((item) =>
        item.position
          .toLowerCase()
          .replace(" ", "")
          .includes(searchQuery.toLocaleLowerCase().replace(" ", ""))
      )
    );
  }, [searchQuery, data]);

  useEffect(() => {
    setLightHeader(true);
    return () => {
      setLightHeader(false);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 650) {
      setSlidesPerPage(1);
    } else if (window.innerWidth <= 900) {
      setSlidesPerPage(2);
    } else if (window.innerWidth <= 1150) {
      setSlidesPerPage(3);
    } else {
      setSlidesPerPage(3.5);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 650) {
        setSlidesPerPage(1);
      } else if (window.innerWidth <= 900) {
        setSlidesPerPage(2);
      } else if (window.innerWidth <= 1150) {
        setSlidesPerPage(3);
      } else {
        setSlidesPerPage(3.5);
      }
    });
  }, []);
  const [careerBanner, setCareerBanner] = useState(true);

  useEffect(() => {
    setCareerBanner(true);
    return () => {
      setCareerBanner(true);
    };
  }, []);

  return (
    <>
      {careerBanner ? (
        <CareerBanner
          setLightHeader={setLightHeader}
          setCareerBanner={setCareerBanner}
        />
      ) : (
        <>
          <div className="container">
            <HomeJumbotron
              taglinesLine="Good things should grow, and so do we"
              info="There are jobs and then there are careers. We welcome you to find your best fit at DSME Global Links and become part of the fastest-growing technology leaders in the region. Join us to be surrounded by smart, ambitious, and motivated people at DSME Global Links."
              img={career}
            />
          </div>
          <CareeersFeature />
          <CareersViewOpenings
            slidesPerPage={slidesPerPage}
            setIsApplyOpen={setIsApplyOpen}
            data={data}
            setSelectedItem={setSelectedItem}
          />
          <CareersVacencies
            setDeparment={setDeparment}
            setSearchQuery={setSearchQuery}
            noData={noData}
            data={data}
            CategoryData={CategoryData}
            department={department}
            setIsApplyOpen={setIsApplyOpen}
            careerDataFiltered={careerDataFiltered}
            setSelectedItem={setSelectedItem}
          />
          {isApplyOpen ? (
            <ApplyForJobPopup
              selectItem={selectItem}
              setIsApplyOpen={setIsApplyOpen}
            />
          ) : null}
        </>
      )}
    </>
  );
}
