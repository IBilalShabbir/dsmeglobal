import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BlogsCard from "../components/BlogCard";
import BlogsFilter from "../components/BlogsFilter";
import blog from "../assets/blog.svg";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { Fade } from "react-reveal";

export default function Blogs({ data }) {
  const navigate = useNavigate();
  const [noOfItems, setNoOfItems] = useState(9);
  const [filter, setFilter] = useState("");

  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Blogs"
          info={
            <>
              Keep up with the most trending tech news articles. Stay ahead of
              the curve and up-to-date with the latest technology to advance and
              innovate your business at DSME Global Link Blog.
            </>
          }
          img={blog}
        />
      </div>
      <div className="blog__page" style={{ marginTop: "-8em" }}>
        <div className="blog__page__filter">
          <BlogsFilter
            title="All"
            defaultChecked={true}
            onChange={() => {
              setFilter("");
            }}
          />
          <BlogsFilter
            title="Web Apps"
            onChange={() => {
              setFilter("Web App Development");
            }}
          />
          <BlogsFilter
            title="Mobile Apps"
            onChange={() => {
              setFilter("Mobile App Development");
            }}
          />
          <BlogsFilter
            title="Ecommerce"
            onChange={() => {
              setFilter("Ecommerce Solutions");
            }}
          />
          <BlogsFilter
            title="UI/UX Design"
            onChange={() => {
              setFilter("UI & UX Services");
            }}
          />
        </div>
        <div className="blog__page__content">
          {data
            ?.filter((item, i) => (filter === "" ? i < noOfItems : i))
            ?.map((item) => (
              <BlogsCard
                data={item}
                key={JSON.stringify(item)}
                filter={filter}
              />
            ))}
        </div>
        {filter === "" && data.length > 6 ? (
          <div className="blog__page__content__button">
            <button
              className="button"
              onClick={() => {
                setNoOfItems(noOfItems + noOfItems);
              }}
            >
              Load More
            </button>
          </div>
        ) : null}
        <div className="blog__greenbox__container">
          <Fade up>
            <div className="blog__greenbox__container__heading">
              Delivering software solutions beyond expectations
            </div>
            <div className="blog__greenbox__container__subheading">
              Have a project in mind?
            </div>
            <button
              className="blog__greenbox__container__button"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Free Consultation
            </button>
          </Fade>
        </div>
      </div>
    </>
  );
}
