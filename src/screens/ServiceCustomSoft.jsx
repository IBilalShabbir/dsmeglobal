import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { ServicesFeatureListItem } from "../components/ServicesFeatureListItem";

export default function ServiceCustomSoft() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Custom software Development"
          info="Web applications that are visually amazing and provide seamless user experience for the desktop, mobile and tablet."
          img={JSON.parse(window.localStorage.getItem("servicesData"))}
          talk={true}
        />
      </div>
      <div className="customsoft_all_main_container">
        <div className="customsoft_content">
          <div className="customsoft_content_one">
            Our dynamic team members experienced across multiple tech stacks can
            help you to rapidly build or maintain your applications / enterprise
            systems.
          </div>
        </div>
        <div className="customsoft_main">
          <div className="customsoft_first_container_main">
            <div className="customsoft_first_container">
              <div className="customsoft_first_container_svg">
                <div className="svg_coustsoft">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke=" #189366"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-airplay"
                  >
                    <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
                    <polygon points="12 15 17 21 7 21 12 15"></polygon>
                  </svg>
                </div>
                <span>Web App Development</span>
              </div>
              <div className="customsoft_first_container_content">
                Looking to build custom web applications? With our expertise in
                delivering end-to-end solutions for the web using technology
                stacks like React Js, .NET, MySql, MSSQL, Node.js, etc, we are
                set to do that.
              </div>
              <div className="customsoft_first_container_button">
                <a className="learn_more" href="">
                  Learn more
                </a>
                <div className="svg__two__coustm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-arrow-right"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="customsoft_second_container_all_main">
            <div className="customsoft_second_container">
              <div className="customsoft_second_container_svg">
                <div className="svg__three_coustm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <span>Mobile App Development</span>
              </div>
              <div className="customsoft_second_container_content">
                Developed over 300+ enterprise and consumer-facing mobile
                applications. Work with DSME Global Links to formulate winning
                mobile strategies and develop trendsetting mobile apps to help
                you transform your business, cut down on costs, and reap higher
                profits.
              </div>
              <div className="customsoft_second_container_button">
                <a className="learn_more" href="">
                  Learn more
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="customsoft_third_container">
          <div className="customsoft_third_container_headind">
            For All{" "}
            <span className="customsoft_third_container_headindspan">
              {" "}
              Business Sizes
            </span>
          </div>
          <div className="customsoft_third_container_content">
            <span>
              We empower innovative startups, rapidly expanding businesses and
              enterprises to build amazing custom applications
            </span>
          </div>
          <div className="customsoft_third_container_first_box_main">
            <div className="customsoft_third_container_first_box">
              <div className="customsoft_third_container_first_box_first_main">
                <div className="customsoft_third_container_first_box_start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-shield"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Enterprise</span>
                </div>
                <div className="customsoft_third_container_first_box_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>
                    Fixed Price Custom Software Development for your enterprise.
                  </span>
                </div>
                <div className="customsoft_third_container_first_box_svg_one">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>
                    Professional consulting and assistance with Enterprise
                    Mobility strategies.
                  </span>
                </div>
                <div className="customsoft_third_container_first_box_svg_two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Dedicated teams for long-term engagements.</span>
                </div>
                <div className="customsoft_third_container_first_box_svg_three">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Legacy app upgrade and enhancements. </span>
                </div>
                <div className="customsoft_third_container_first_box_svg_fourth">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>
                    Migration to newer platforms, integration with third-party
                    products.
                  </span>
                </div>
              </div>

              <div className="customsoft_third_container_first_box_svg_main_text">
                <div className="customsoft_third_container_second_box_main">
                  <div className="customsoft_third_container_second_box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span>SMBs</span>
                  </div>

                  <div className="customsoft_third_container_first_box_svg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>
                      Provide Dedicated Development Teams for short & long term
                      engagements.
                    </span>
                  </div>
                  <div className="customsoft_third_container_first_box_svg_one">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>
                      Flexible fixed price engagement depending on your needs.
                    </span>
                  </div>
                  <div className="customsoft_third_container_first_box_svg_two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>
                      Solutions for existing Business Process Automation.
                    </span>
                  </div>
                  <div className="customsoft_third_container_first_box_svg_three">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Ability to carry out rescue missions.</span>
                  </div>
                  <div className="customsoft_third_container_first_box_svg_fourth">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-check-circle"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>
                      Hands-on domain experience and value-added industry
                      knowledge.
                    </span>
                  </div>
                </div>
              </div>

              <div className="customsoft_third_container_third_box_main">
                <div className="customsoft_third_container_third_box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-flag"
                  >
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                  <span>Startups</span>
                </div>
                <div className="customsoft_third_container_first_box_svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>
                    Agile Discovery Workshop the first step to building a
                    successful tech startup.
                  </span>
                </div>
                <div className="customsoft_third_container_first_box_svg_one">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>
                    Flexible & scalable Dedicated Teams capacity to rapidly grow
                    the development team.
                  </span>
                </div>
                <div className="customsoft_third_container_first_box_svg_two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>
                    Flexible fixed price engagement - enable rapid delivery of a
                    fully verified MVP.
                  </span>
                </div>
                <div className="customsoft_third_container_first_box_svg_three">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Agile delivery model to deliver faster, better.</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Custome__methodologies__section">
          <div className="Custome__methodologies__section__heading">
            End-to-End Software <span>Development Methodologies</span>
          </div>
          <div className="Custome__methodologies__section__detail">
            <div className="Custome__methodologies__section__detail__card">
              <div className="Custome__methodologies__section__detail__card__heading">
              <svg xmlns="http://www.w3.org/2000/svg" width="44.207" height="44.233" viewBox="0 0 24.207 27.233" fill="#189366">
  <path id="Union_1" data-name="Union 1" d="M3399.012,1680.232a.972.972,0,0,1-1.012-1.018q0-11.051,0-22.1a.99.99,0,0,1,1.012-1.021c.068,0,.142,0,.231,0l.292,0c0-.021,0-.042,0-.063,0-.112,0-.218,0-.324a.978.978,0,0,1,1.02-.978c.166,0,.33,0,.5,0h.179v-.153c0-.159,0-.311,0-.464a1.006,1.006,0,0,1,1.1-1.1h3.694c2.285,0,4.74,0,7.21,0a1.187,1.187,0,0,1,.9.391l0,.005c1.222,1.257,2.486,2.557,3.74,3.824a1.372,1.372,0,0,1,.417,1.031c0,1.313,0,2.648,0,3.939,0,1.427,0,2.9-.006,4.352,0,.2.031.236.233.252a4.205,4.205,0,0,1,3.628,3.456,4.183,4.183,0,0,1-3.421,4.834c-.218.044-.35.07-.391.121a.9.9,0,0,0-.042.412c0,.05,0,.1,0,.152,0,.136,0,.277,0,.418a1,1,0,0,1-1.018,1.015c-.08,0-.166,0-.27,0l-.347,0c-.006.1-.006.2-.006.3a1.313,1.313,0,0,1-.27.981,1.277,1.277,0,0,1-1.045.331c-.077,0-.158,0-.238.005,0,.023,0,.048,0,.072,0,.11,0,.222,0,.334a.979.979,0,0,1-1.018,1.008l-7.538,0Zm-.129-23.23a1.04,1.04,0,0,0-.036.412v21.564c0,.411,0,.411.4.411h14.621c.064,0,.124,0,.187,0,.146,0,.205-.058.209-.2,0-.105,0-.207,0-.324v-.056h-.3q-6.569,0-13.138,0a2.952,2.952,0,0,1-.5-.034.951.951,0,0,1-.766-.791,3.256,3.256,0,0,1-.023-.47v-20.554h-.321C3399.046,1656.959,3398.914,1656.963,3398.883,1657Zm1.554-1.392a.793.793,0,0,0-.038.35v21.613a.805.805,0,0,0,.033.339.791.791,0,0,0,.332.033h14.672c.024,0,.048,0,.07,0a.483.483,0,0,0,.051,0h.012c.011-.008.023-.015.035-.023.053-.035.165-.109.171-.149a2.308,2.308,0,0,0,.016-.459c0-.039,0-.077,0-.117h-13.273c-.9,0-1.274-.365-1.274-1.263v-20.371h-.462A.763.763,0,0,0,3400.437,1655.609Zm1.712-1.722a.813.813,0,0,0-.04.364v21.7a.824.824,0,0,0,.035.352.815.815,0,0,0,.346.034h14.594c.025,0,.052,0,.08,0s.044,0,.065,0,.04,0,.042-.006a.4.4,0,0,0,.165-.142c.016-.283.014-.572.011-.852,0-.077,0-.154,0-.23l-.058-.013c-.064-.013-.122-.026-.179-.037a4.192,4.192,0,0,1-3-5.861c.116-.241.262-.364.435-.364a.417.417,0,0,1,.163.036c.348.147.239.513.193.67-.022.077-.047.153-.07.23a4.408,4.408,0,0,0-.239,1.094,3.238,3.238,0,0,0,.906,2.384,3.409,3.409,0,0,0,2.578,1.028,3.336,3.336,0,0,0,3.12-4,3.346,3.346,0,0,0-3.252-2.669,3.5,3.5,0,0,0-1.616.4.733.733,0,0,1-.331.1.372.372,0,0,1-.341-.214.412.412,0,0,1-.031-.336.51.51,0,0,1,.306-.3c.338-.141.676-.266,1.034-.4l.363-.134v-8.472l-1.258,0c-.324,0-.59,0-.84,0a2.323,2.323,0,0,1-2.249-2.14c-.021-.462-.02-.932-.019-1.386,0-.226,0-.46,0-.69,0-.062,0-.124-.008-.191v-.005h-10.544A.794.794,0,0,0,3402.149,1653.888Zm11.768.841c0,.428,0,.833,0,1.235a1.4,1.4,0,0,0,1.169,1.4,6.632,6.632,0,0,0,.758.037c.2,0,.4-.005.6-.011.127,0,.257-.006.388-.008l-2.918-2.992C3413.918,1654.5,3413.918,1654.616,3413.917,1654.728Zm-5.357,18.948a.436.436,0,0,1-.506-.406.384.384,0,0,1,.1-.3.554.554,0,0,1,.419-.149c1.11,0,2.222,0,3.334,0,.321,0,.493.139.511.41a.387.387,0,0,1-.094.3.558.558,0,0,1-.42.141H3409.4l-.828,0Zm-1.98,0h-.351c-.089,0-.179,0-.268,0a.393.393,0,0,1-.425-.408.4.4,0,0,1,.43-.438c.19,0,.391-.005.6-.005s.427,0,.667.005a.424.424,0,1,1-.007.848l-.215,0Zm-1.981,0a.556.556,0,0,1-.415-.134.4.4,0,0,1-.106-.3c0-.158.077-.422.527-.422h.007a.574.574,0,0,1,.418.148.4.4,0,0,1,.11.289c0,.125-.059.417-.534.417Zm12.21-1.027c-.245-.239-.49-.486-.727-.724l-.321-.323a.416.416,0,0,1-.033-.637.4.4,0,0,1,.291-.136.5.5,0,0,1,.345.167c.179.179.357.359.541.546l.246.248,1.189-1.191,1.2-1.2.053-.054a1.473,1.473,0,0,1,.148-.14.45.45,0,0,1,.283-.11.415.415,0,0,1,.286.124.409.409,0,0,1,.043.566.389.389,0,0,1-.07.076l-.774.776c-.662.662-1.346,1.347-2.021,2.019a.475.475,0,0,1-.336.164A.5.5,0,0,1,3416.81,1672.648ZM3410.53,1671a.418.418,0,0,1-.455-.42.423.423,0,0,1,.464-.442c.084,0,.174,0,.282,0l.419,0h.4c.1,0,.2,0,.3,0,.405.009.472.268.477.421a.412.412,0,0,1-.106.31.488.488,0,0,1-.354.131c-.236,0-.475.006-.713.006S3410.767,1671.008,3410.53,1671Zm-4.4,0a.585.585,0,0,1-.436-.142.4.4,0,0,1-.105-.307c.006-.188.1-.414.539-.416l.769,0h1.523l.77,0c.433,0,.533.225.54.414a.4.4,0,0,1-.105.309.582.582,0,0,1-.434.142l-1.53,0Zm-1.487,0c-.366,0-.556-.145-.564-.419a.388.388,0,0,1,.1-.294.729.729,0,0,1,.539-.155h.058a.286.286,0,0,1,.194.058.669.669,0,0,1,.264.38.324.324,0,0,1-.075.265.652.652,0,0,1-.5.168Zm6.549-2.684a.426.426,0,1,1,.021-.851h.806c.089,0,.18,0,.27,0a.4.4,0,0,1,.436.4.427.427,0,0,1-.106.314.449.449,0,0,1-.322.133c-.176.006-.362.009-.553.009C3411.568,1668.332,3411.388,1668.33,3411.192,1668.325Zm-6.659,0a.474.474,0,0,1-.346-.131.424.424,0,0,1-.106-.319c.005-.149.072-.4.462-.4h1.424a.41.41,0,0,1,.459.412.417.417,0,0,1-.114.309.486.486,0,0,1-.354.132c-.281,0-.532,0-.765,0S3404.743,1668.329,3404.533,1668.326Zm3.62,0h-.878c-.4,0-.5-.229-.5-.421a.382.382,0,0,1,.1-.293.534.534,0,0,1,.4-.14h1.759c.292,0,.586,0,.878,0h.014c.383,0,.482.224.5.412a.369.369,0,0,1-.1.286.542.542,0,0,1-.4.158h-1.759Zm.046-2.7a.62.62,0,0,1-.423-.216.422.422,0,0,1,.015-.435.5.5,0,0,1,.375-.18c1.164-.005,2.316-.007,3.687-.007h1.452a.4.4,0,0,1,.45.419c0,.272-.172.427-.471.427h-3.744C3409.172,1665.642,3408.688,1665.641,3408.2,1665.632Zm-1.344.01c-.275,0-.551,0-.826,0h-.708c-.251,0-.5,0-.753,0h-.014a.41.41,0,0,1-.473-.4.4.4,0,0,1,.1-.305.514.514,0,0,1,.391-.138h2.288a.5.5,0,0,1,.368.128.4.4,0,0,1,.11.3.414.414,0,0,1-.471.426Zm7.947,0h-.036a.752.752,0,0,1-.56-.156.371.371,0,0,1-.094-.284c.016-.356.338-.4.651-.4h.12l.125,0a.421.421,0,0,1,0,.842c-.031,0-.061,0-.092,0Zm-1.1-2.681h-2.49q-.627,0-1.253,0a.514.514,0,0,1-.412-.159.4.4,0,0,1-.073-.342.416.416,0,0,1,.447-.348q2.519,0,5.036,0a.484.484,0,0,1,.356.13.416.416,0,0,1,.111.309c-.006.264-.183.414-.484.414Zm-6.37,0-.68,0h-2.094c-.377,0-.466-.223-.475-.41a.4.4,0,0,1,.1-.3.52.52,0,0,1,.39-.139q1.385,0,2.769,0a.523.523,0,0,1,.394.139.4.4,0,0,1,.1.3c-.012.275-.183.415-.5.415Zm1.31,0h-.006a.47.47,0,0,1-.351-.132.4.4,0,0,1-.1-.3.413.413,0,0,1,.451-.415h.016a.475.475,0,0,1,.352.148.387.387,0,0,1,.1.3.408.408,0,0,1-.445.4Zm-5.769-.22a.459.459,0,0,1-.071-.315v-.033q0-2.516,0-5.031c0-.016,0-.033,0-.051a.283.283,0,0,1,.048-.226l.017-.018c.105-.115.237-.259.382-.259h.006c.149.006.273.167.375.323a.376.376,0,0,1,.035.248c0,.024,0,.049,0,.072q0,1.222,0,2.448t0,2.448c0,.021,0,.042,0,.065a.408.408,0,0,1-.039.254.579.579,0,0,1-.345.284h-.026A.594.594,0,0,1,3402.87,1662.737Zm1.533-2.48a.711.711,0,0,1-.311-.366.33.33,0,0,1,.035-.261.471.471,0,0,1,.316-.192.817.817,0,0,1,.17-.014h6.146c.35.005.564.175.563.44s-.217.427-.569.428c-.677,0-1.353,0-2.029,0h-4c-.021,0-.045,0-.068,0s-.058,0-.085,0A.29.29,0,0,1,3404.4,1660.257Zm9.243.033c-.3-.014-.463-.175-.456-.444a.411.411,0,0,1,.453-.418c.423-.009.866-.01,1.317,0a.49.49,0,0,1,.355.136.439.439,0,0,1-.346.726c-.078,0-.161,0-.262,0l-.413,0-.4,0C3413.8,1660.295,3413.719,1660.293,3413.646,1660.29Zm-1.387,0a.611.611,0,0,1-.5-.2.371.371,0,0,1-.059-.329.5.5,0,0,1,.537-.344c.177,0,.473,0,.565.334a.381.381,0,0,1-.054.344.59.59,0,0,1-.486.193Zm-.254-2.67c-.024,0-.053,0-.084,0a.371.371,0,0,1-.251-.066c-.059-.049-.255-.23-.238-.409.013-.158.2-.3.318-.358a.444.444,0,0,1,.2-.037c.041,0,.082,0,.122.005s.065.005.1.005a.458.458,0,0,1,.336.127.4.4,0,0,1,.107.3.423.423,0,0,1-.447.426h-.053l0,.023Zm-7.577-.015a.406.406,0,0,1-.4-.43.4.4,0,0,1,.422-.416c.267-.006.541-.006.808,0a.4.4,0,0,1,.426.411.413.413,0,0,1-.429.438c-.047,0-.094,0-.152,0l-.232,0h-.128l-.133,0A1.725,1.725,0,0,1,3404.428,1657.607Zm2.089,0a.517.517,0,0,1-.425-.192.39.39,0,0,1-.053-.356.468.468,0,0,1,.51-.307h3.462l.509,0c.138,0,.557,0,.56.421a.393.393,0,0,1-.108.292.609.609,0,0,1-.447.142h-3.132Zm-3.7-1.548a.724.724,0,0,1-.018-.184c0-.028,0-.057,0-.085v-.016c0-.02,0-.041,0-.063a.686.686,0,0,1,.023-.185.4.4,0,0,1,.388-.316.433.433,0,0,1,.1.01c.355.072.355.363.354.575a.515.515,0,0,0,0,.055c0,.147,0,.49-.378.537a.551.551,0,0,1-.065,0A.4.4,0,0,1,3402.814,1656.063Z" transform="translate(-3398 -1653)"/>
</svg>

                Requirements Gathering
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Work Breakdown Structure
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Project Plan
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Project Budget
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Requirements Docs
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Use Cases
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                User Stories
              </div>
            </div>
            <div className="Custome__methodologies__section__detail__card">
              <div className="Custome__methodologies__section__detail__card__heading">
              <svg xmlns="http://www.w3.org/2000/svg" width="44.745" height="44.104" viewBox="0 0 22.745 23.104" fill="#189366">
  <g id="Group_55" data-name="Group 55" transform="translate(-1190.029 -777.092)">
    <path id="Path_519" data-name="Path 519" d="M549.413,232.013a1.383,1.383,0,0,0-.957-.426l-.018-.31c-.448,0-.9,0-1.345,0a1.277,1.277,0,0,1-.3-.019.729.729,0,0,1-.552-.7,3.872,3.872,0,0,1,0-.55.411.411,0,0,0-.291-.482,7.017,7.017,0,0,1-2.711-2.208,7.116,7.116,0,0,1-1.407-4.048.385.385,0,0,0-.236-.4.362.362,0,0,0-.425.138l-.427.451-2.112-2.109c.148-.139.317-.294.482-.454a.336.336,0,0,0,.106-.411.366.366,0,0,0-.369-.219h-.679v-2.936c.146,0,.289.005.432,0,.228-.01.494.071.615-.224s-.14-.419-.289-.587c-.1-.107-.21-.2-.311-.291l2.118-2.113c.147.16.3.329.455.494a.339.339,0,0,0,.409.116.367.367,0,0,0,.228-.385c0-.22,0-.44,0-.67h2.937c0,.22,0,.438,0,.657a.373.373,0,0,0,.216.393.352.352,0,0,0,.429-.117l.487-.5c.459.466.933.892,1.339,1.376a1.245,1.245,0,0,0,1.207.423,9.342,9.342,0,0,1,4.1.391,7.247,7.247,0,0,1,3.838,3.319.579.579,0,0,0,.142.184V218.8h.735v.24c0,1.132-.009,2.265,0,3.4a8.437,8.437,0,0,1-.309,2.669,1.179,1.179,0,0,0,1.125-.332l2,2.009c-.668,1.155-.462,1.66.845,1.982v2.809c-1.326.366-1.528.857-.841,1.991l-2,2c-1.155-.672-1.66-.466-1.986.842h-2.815c-.032-.147-.058-.3-.1-.453a1.008,1.008,0,0,0-.9-.759.356.356,0,0,0-.25.107,3.306,3.306,0,0,1-5.733-1.593,6.3,6.3,0,0,1-.048-1.028.705.705,0,0,1,.714-.666c.719-.005,1.438,0,2.158,0Zm2.7-8.8h2.223v4.643c.116-.107.2-.18.284-.262a6.446,6.446,0,0,0-2.085-10.509,8.047,8.047,0,0,0-4.757-.36,6.428,6.428,0,0,0-3.734,10.4c.211.252.45.48.677.719l.059-.036v-1.662h2.2v4.38h1.481v-3.642h2.2v3.647h1.457Zm.459,11.262a1.84,1.84,0,0,1,1.292,1.133.179.179,0,0,0,.142.071c.451.006.9.008,1.353,0a.247.247,0,0,0,.178-.12,1.788,1.788,0,0,1,2.361-.978.221.221,0,0,0,.192-.029c.358-.344.707-.7,1.055-1.043-.011-.038-.015-.06-.023-.081a1.777,1.777,0,0,1,.948-2.4.266.266,0,0,0,.124-.2c.012-.436,0-.872.009-1.308,0-.124-.053-.167-.153-.212a1.777,1.777,0,0,1-.959-2.327.266.266,0,0,0-.046-.227c-.3-.322-.62-.635-.94-.941a.278.278,0,0,0-.21-.043c-.217.035-.449.165-.642.119-.517-.123-.716.15-.851.56a.153.153,0,0,0,0,.043,4.062,4.062,0,1,1-3.6,7.282Zm-13.665-16.413v1.451a1.1,1.1,0,0,1,.786,1.863l1,1a2.747,2.747,0,0,1,.554-.247,3.156,3.156,0,0,1,.64-.01l.124-.69c-.078-.044-.151-.085-.222-.127a2.938,2.938,0,1,1,3.528-4.658c.058.054.169.124.219.1.447-.191.886-.4,1.307-.6l-.954-.955a1.111,1.111,0,0,1-1.865-.8h-1.435a1.111,1.111,0,0,1-1.866.8l-1.023,1.022a1.057,1.057,0,0,1,.209,1.177A1.077,1.077,0,0,1,538.908,218.065Zm13.2,14.7h-5.118a2.582,2.582,0,1,0,5.118,0Zm.733-2.723c.017.151.028.3.053.454a1.832,1.832,0,0,0,1.851,1.518,1.853,1.853,0,0,0,1.778-1.713,1.819,1.819,0,0,0-1.428-1.9.5.5,0,0,0-.329.08c-.535.336-1.05.706-1.6,1.022C552.937,229.638,552.775,229.749,552.84,230.039Zm2.687-2.314a2.6,2.6,0,0,1,1.727,2.709,2.589,2.589,0,0,1-4.906.85h-.777c.1.212.192.386.275.563a.275.275,0,0,0,.285.171.7.7,0,0,1,.718.729.274.274,0,0,0,.158.269,3.3,3.3,0,0,0,4.639-4.309,3.235,3.235,0,0,0-1.661-1.565Zm-13.3-7.041c.065-.16.115-.313.188-.454a.232.232,0,0,0-.073-.342,1.442,1.442,0,0,1-.412-1.621,1.4,1.4,0,0,1,1.384-.932,5.636,5.636,0,0,1,1.017.263l.477-.383a2.181,2.181,0,1,0-2.581,3.469Zm10.635,8.162c.2-.115.366-.214.536-.3a.325.325,0,0,0,.2-.34c-.008-1.346-.005-2.692-.005-4.039,0-.073-.007-.147-.01-.221h-.719Zm-2.949-1.222H549.2v2.9h.716Zm-3.686,1.218v-1.96h-.718c0,.491,0,.971,0,1.45a.175.175,0,0,0,.064.132C545.78,228.591,545.992,228.708,546.225,228.842Zm-2.537-10.648a.7.7,0,0,0-.989.192.655.655,0,0,0,.151.934Zm6.1,13.083.543.726h.736c-.083-.225-.155-.439-.243-.647a.184.184,0,0,0-.142-.075C550.386,231.274,550.089,231.277,549.788,231.277Z" transform="translate(651.852 563.775)"/>
    <path id="Path_520" data-name="Path 520" d="M541.852,229.8h.413L541.1,227.94l-1.168,1.865h.419v3.658h-.711v-2.9h-1.053l2.511-4.02,2.5,4h-1.025v5.873h-.721Z" transform="translate(651.852 563.775)"/>
    <path id="Path_521" data-name="Path 521" d="M560.5,217.318h-1.025v5.865h-.723V216.6h.42L558,214.719l-1.162,1.857.412.021v1.448h-.714v-.721h-1.041l2.5-4.007Z" transform="translate(651.852 563.775)"/>
    <path id="Path_522" data-name="Path 522" d="M539.647,234.227h.705V236.4h-.705Z" transform="translate(651.852 563.775)"/>
    <path id="Path_535" data-name="Path 535" d="M547.74,224.666c-.243,0-.473-.013-.7.008a.345.345,0,0,0-.2.164,1.077,1.077,0,0,1-1.1.554,1.046,1.046,0,0,1-.914-.762,1.1,1.1,0,0,1,.6-1.337,1.072,1.072,0,0,1,1.377.429.358.358,0,0,0,.393.215c.174-.017.351,0,.538,0,.026-.074.05-.143.073-.213a1.829,1.829,0,0,1,2.575-1.055.239.239,0,0,0,.344-.06c.27-.282.548-.556.828-.828a.205.205,0,0,0,.054-.29,1.838,1.838,0,1,1,.828.791.3.3,0,0,0-.421.077c-.257.282-.534.547-.809.813a.181.181,0,0,0-.046.253,1.837,1.837,0,1,1-3.387,1.358C547.76,224.749,547.754,224.72,547.74,224.666Zm5.475-5.14a1.1,1.1,0,1,0,1.108,1.089A1.118,1.118,0,0,0,553.215,219.526Zm-2.566,4.765a1.1,1.1,0,1,0-1.087,1.11A1.119,1.119,0,0,0,550.649,224.291Zm-4.771-.356a.365.365,0,1,0,.362.368A.381.381,0,0,0,545.878,223.935Z" transform="translate(651.852 563.775)"/>
    <path id="Path_539" data-name="Path 539" d="M553.229,220.993a.366.366,0,1,1,.358-.369A.359.359,0,0,1,553.229,220.993Z" transform="translate(651.852 563.775)"/>
    <path id="Path_540" data-name="Path 540" d="M549.914,224.291a.366.366,0,1,1-.369-.357A.361.361,0,0,1,549.914,224.291Z" transform="translate(651.852 563.775)"/>
  </g>
</svg>

                Design & Development
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Low-Fi Design
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Hi-Fi Design
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                User Experience Design
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Source Code
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Compiled Code
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Code Documentation
              </div>
            </div>
            <div className="Custome__methodologies__section__detail__card">
              <div className="Custome__methodologies__section__detail__card__heading">
              <svg xmlns="http://www.w3.org/2000/svg" width="44.629" height="44.601" viewBox="0 0 21.629 21.601" fill="#189366">
  <g id="Group_54" data-name="Group 54" transform="translate(-1228.317 -777.988)">
    <g id="Group_53" data-name="Group 53">
      <path id="Path_484" data-name="Path 484" d="M511.176,235.828c0-1.285-.072-2.543.02-3.79a3.728,3.728,0,0,1,1.856-2.895.32.32,0,0,0,.179-.327c-.014-.231.067-.5-.026-.686-.085-.168-.351-.242-.531-.365a3.327,3.327,0,0,1-1.534-2.82c-.011-.587,0-1.175,0-1.763a2.483,2.483,0,0,1,.781-2.039c-1.614-1.553-2.023-3.31-.782-5.258a3.738,3.738,0,0,1,4.045-1.546,3.883,3.883,0,0,1,2.938,3.716h4.859c.04-.192.071-.391.122-.584a3.832,3.832,0,0,1,7.487.27,1.409,1.409,0,0,1,.022.194c.006.115.059.168.174.205a1.718,1.718,0,0,1,1.253,1.731v8.922a1.731,1.731,0,0,1-1.8,1.811h-1.678a3.529,3.529,0,0,0,0,.372c.024.212.17.324.415.325.668,0,1.336,0,2,0a1.043,1.043,0,0,1,.253,2.06,1.392,1.392,0,0,1-.323.026q-2.493,0-4.985,0a.289.289,0,0,0-.3.171.978.978,0,0,1-.91.528c-.421,0-.842-.005-1.262,0a.73.73,0,0,0-.278.086c-.282.13-.559.272-.841.4-.7.323-1.41.641-2.114.964a3.143,3.143,0,0,1-1.327.286q-3.732,0-7.466,0Zm19.45-16.97a3.909,3.909,0,0,1-.628,1.688,3.8,3.8,0,0,1-1.334,1.224,3.826,3.826,0,0,1-4.016-.194,3.84,3.84,0,0,1-1.661-2.8h-4.951a3.842,3.842,0,0,1-1.618,2.464l.287.656c.229,0,.468,0,.707,0a1.044,1.044,0,0,1,0,2.087c-.216,0-.432,0-.646,0,.049,1.057.271,2.077.232,3.12h14.347v-5.391c0-.624,0-1.248,0-1.872A.984.984,0,0,0,530.626,218.858Zm-18.755,16.257h5.182c-.948-.808-.989-1.978-1.387-3.015l.677-.2c.025.074.046.127.062.181.16.526.306,1.056.481,1.577a2.168,2.168,0,0,0,2.222,1.468,7.976,7.976,0,0,0,1.957-.735l-.409-.915-2.061.934-.289-.637a2.476,2.476,0,0,0,.337-.163.232.232,0,0,0,.1-.174c-.068-.517-.121-1.038-.234-1.545a3.374,3.374,0,0,0-3.831-2.633,3.32,3.32,0,0,0-2.8,2.893C511.815,233.129,511.871,234.118,511.871,235.115Zm4.147-6.523a4.045,4.045,0,0,1,2.109,1.162.468.468,0,0,0,.377.158q5.821-.006,11.642,0c.058,0,.116,0,.174,0a1,1,0,0,0,.967-.764,12.467,12.467,0,0,0,.074-1.325h-.329c-4.671,0-9.342.005-14.014-.009a1.619,1.619,0,0,0-1,.307Zm10.8-13.311a3.135,3.135,0,1,0,3.134,3.131A3.152,3.152,0,0,0,526.814,215.281Zm-12.538-.368a6.777,6.777,0,0,0-.685.105,3.127,3.127,0,0,0-1.144,5.586.324.324,0,0,0,.319.045,4.115,4.115,0,0,1,.807-.137,13.757,13.757,0,0,1,1.392,0,2.569,2.569,0,0,1,.733.163.333.333,0,0,0,.352-.039,3.124,3.124,0,0,0,1.217-3.49A3.2,3.2,0,0,0,514.276,214.913Zm.351,12.558c.316,0,.613.006.909,0a.771.771,0,0,0,.768-.9c-.046-.381-.076-.764-.115-1.146-.048-.473-.1-.946-.149-1.436h-2.252a.137.137,0,0,0-.08.023c-.505.4-.7,1-.216,1.458a1.239,1.239,0,0,1,.432,1.161,1.112,1.112,0,0,0,0,.153v1.9l1.38-.207v-.319h-.676Zm13.212,3.148H525.07c0,.326,0,.636,0,.947a.191.191,0,0,0,.056.13,1.856,1.856,0,0,1,.611.992c.046,0,.074.007.1.007q2.533,0,5.067,0c.07,0,.166,0,.207-.039.089-.091.2-.208.206-.318s-.112-.219-.2-.3a.425.425,0,0,0-.25-.041c-.659,0-1.319,0-1.979,0a1,1,0,0,1-.989-.761A4.1,4.1,0,0,1,527.839,230.619Zm-11.9-8.72a1.025,1.025,0,0,0-.989-.7c-.45,0-.9-.007-1.349,0a1.767,1.767,0,0,0-1.738,2.09c.7,0,1.4,0,2.1-.005.052,0,.121-.067.15-.12.125-.229.232-.467.356-.7a1.015,1.015,0,0,1,.952-.572Zm3.505,11.352c.478-.216.919-.414,1.358-.618a.176.176,0,0,0,.09-.123c.006-.628,0-1.257,0-1.895h-2.047c.131.425.286.844.384,1.276S519.367,232.771,519.439,233.251Zm-7.589-9.258c-.162,1.544.438,2.957,1.378,3.243,0-.227-.017-.453,0-.674a.648.648,0,0,0-.228-.567,1.582,1.582,0,0,1-.312-1.842c.022-.048.038-.1.062-.16Zm9.744,8.162a2.935,2.935,0,0,1,2.769-.832v-.705h-2.769Zm2.076,1.234c.371,0,.717.01,1.062,0a.345.345,0,0,0,.335-.4.981.981,0,0,0-.648-.9,2.639,2.639,0,0,0-1.411-.025c-.006,0-.007.025-.012.046A1.229,1.229,0,0,1,523.67,233.389Zm-8.831-10.1c.873,0,1.7,0,2.523,0a.35.35,0,1,0-.005-.694c-.638,0-1.275-.01-1.912.006a.483.483,0,0,0-.328.163A3.214,3.214,0,0,0,514.839,223.292Zm6.866,10.8c.353-.163.691-.307,1.018-.473a.461.461,0,0,0,.225-.574.454.454,0,0,0-.514-.338c-.385.128-.754.3-1.139.463Z" transform="translate(717.906 563.76)"/>
      <path id="Path_499" data-name="Path 499" d="M522.621,223.655v2.759h-3.454v-2.759Zm-2.764.69v1.371h2.064v-1.371Z" transform="translate(717.906 563.76)"/>
      <path id="Path_500" data-name="Path 500" d="M530.634,224.352v.668h-7.293v-.668Z" transform="translate(717.906 563.76)"/>
      <path id="Path_501" data-name="Path 501" d="M530.633,222.959v.669H523.34v-.669Z" transform="translate(717.906 563.76)"/>
      <path id="Path_502" data-name="Path 502" d="M530.638,225.744v.663h-5.9v-.663Z" transform="translate(717.906 563.76)"/>
      <path id="Path_503" data-name="Path 503" d="M522.621,219.476v.669h-3.454v-.669Z" transform="translate(717.906 563.76)"/>
      <path id="Path_504" data-name="Path 504" d="M519.161,221.535v-.67h3.453v.67Z" transform="translate(717.906 563.76)"/>
      <path id="Path_505" data-name="Path 505" d="M519.161,222.928v-.67h3.453v.67Z" transform="translate(717.906 563.76)"/>
      <path id="Path_506" data-name="Path 506" d="M523.343,225.734h.665v.676h-.665Z" transform="translate(717.906 563.76)"/>
      <path id="Path_507" data-name="Path 507" d="M527.174,228.527h.667v.67h-.667Z" transform="translate(717.906 563.76)"/>
      <path id="Path_508" data-name="Path 508" d="M528.563,229.194v-.664h.676v.664Z" transform="translate(717.906 563.76)"/>
      <path id="Path_509" data-name="Path 509" d="M529.953,229.193v-.66h.676v.66Z" transform="translate(717.906 563.76)"/>
      <path id="Path_510" data-name="Path 510" d="M526.128,216.684h2.758v.673h-2.758Z" transform="translate(717.906 563.76)"/>
      <path id="Path_511" data-name="Path 511" d="M526.127,218.076h2.761v.676h-2.761Z" transform="translate(717.906 563.76)"/>
      <path id="Path_512" data-name="Path 512" d="M528.884,220.152h-2.75v-.676h2.75Z" transform="translate(717.906 563.76)"/>
      <path id="Path_513" data-name="Path 513" d="M525.4,217.362h-.666v-.676h.666Z" transform="translate(717.906 563.76)"/>
      <path id="Path_514" data-name="Path 514" d="M525.4,218.755h-.666v-.676h.666Z" transform="translate(717.906 563.76)"/>
      <path id="Path_515" data-name="Path 515" d="M525.408,220.148h-.671v-.674h.671Z" transform="translate(717.906 563.76)"/>
      <path id="Path_516" data-name="Path 516" d="M511.844,218.415v-.694c.4,0,.787,0,1.176.006.05,0,.114.075.144.13.114.209.217.423.346.681l1.1-3.3c.044.113.071.175.093.239.271.809.545,1.617.809,2.429a.2.2,0,0,0,.228.166c.311-.01.623,0,.95,0v.683H515.06l-.414-1.229-.047-.01-.957,2.857c-.1-.192-.176-.344-.253-.5-.212-.42-.429-.838-.63-1.263a.277.277,0,0,0-.308-.2C512.257,218.427,512.061,218.415,511.844,218.415Z" transform="translate(717.906 563.76)"/>
    </g>
  </g>
</svg>

                Delivery & Support
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Release Management
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Change Management
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                User Docs and Training
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Scheduled Maintenance
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Adaptive Maintenance
              </div>
              <div className="Custome__methodologies__section__detail__card__line">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                Software Roadmap
              </div>
            </div>
          </div>
        </div>
        <div className="customsoft_fourth_container">
          <div className="customsoft_fourth_container_first_title">
            TECHNICAL {<span>EXPERTISE</span>}
          </div>
          <div className="customsoft_fourth_container_first_content">
            <div className="customsoft_fourth_container_first_content_main">
              Tech Stacks For Effective & Up-To-Date Web & Mobile Apps
            </div>
          </div>
          <div className="customsoft_fourth_container_first_box_all_main_container">
            <div className="customsoft_fourth_container_first_box">
              <div className="customsoft_fourth_container_first_box_main_con">
                <div className="customsoft_fourth_container_first_box_main">
                  <div className="customsoft_fourth_container_first_box_one">
                    Enterprise
                  </div>
                  <div className="customsoft_fourth_container_first_box_one_button">
                    <a className="button" href="">
                      Web
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_first_box_one_button_two">
                    <a className="button" href="">
                      Enterprise Mobility
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_first_box_one_button_three">
                    <a className="button" href="">
                      Process Automation
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_first_box_one_content">
                    DevOps
                  </div>
                  <div className="customsoft_fourth_container_first_box_one_content_one">
                    Microsoft SharePoint
                  </div>
                  <div className="customsoft_fourth_container_first_box_one_content_two">
                    Blockchain
                  </div>
                  <div className="customsoft_fourth_container_first_box_one_content_three">
                    Software Architecture
                  </div>
                </div>

                <div className="customsoft_fourth_container_first_box_second_main_con">
                  <div className="customsoft_fourth_container_first_box_second_main_con_content">
                    <a className="button" href="">
                      Mobile
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_first_box_second_main_con_content_first">
                    Web Portals
                  </div>
                  <div className="customsoft_fourth_container_first_box_second_main_con_content_second">
                    <a className="button" href="">
                      UI/UX
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_first_box_second_main_con_content_third">
                    IoT
                  </div>
                  <div className="customsoft_fourth_container_first_box_second_main_con_content_fourth">
                    Salesforce
                  </div>
                  <div className="customsoft_fourth_container_first_box_second_main_con_content_fivth">
                    Big Data & Analytics
                  </div>
                </div>
              </div>
            </div>
            <div className="customsoft_fourth_container_second_title_main">
              <div className="customsoft_fourth_container_second_title">
                Domain Knowledge
              </div>
              <div className="customsoft_fourth_container_second_content">
                Healthcare
              </div>
              <div className="customsoft_fourth_container_second_content_one">
                Insurance
              </div>
              <div className="customsoft_fourth_container_second_content_two">
                Real Estate
              </div>
              <div className="customsoft_fourth_container_second_content_three">
                Fintech
              </div>
              <div className="customsoft_fourth_container_second_content_four">
                EdTech
              </div>
              <div className="customsoft_fourth_container_second_content_five">
                Mobility & Logistics
              </div>
              <div className="customsoft_fourth_container_second_content_six">
                Media & Entertainment
              </div>
              <div className="customsoft_fourth_container_second_content_seven">
                Field Force Automation
              </div>
              <div className="customsoft_fourth_container_second_content_eight">
                Retail
              </div>
            </div>
            <div className="customsoft_fourth_container_third_title_main">
              <div className="customsoft_fourth_container_third_title">
                Technologies We Use
              </div>
              <div className="customsoft_fourth_container_third_box_main_all">
                <div className="customsoft_fourth_container_third_box_main">
                  <div className="customsoft_fourth_container_third_box_content_first">
                    JavaScript
                  </div>
                  <div className="customsoft_fourth_container_third_box_content">
                    PHP
                  </div>
                  <div className="customsoft_fourth_container_third_box_content_one">
                    Google Cloud
                  </div>
                  <div className="customsoft_fourth_container_third_box_content_two">
                    <a className="button" href="">
                      Node.js
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_third_box_content_three">
                    <a className="button" href="">
                      Android
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_third_box_content_four">
                    GraphQL
                  </div>
                  <div className="customsoft_fourth_container_third_box_content_five">
                    AWS
                  </div>
                  <div className="customsoft_fourth_container_third_box_content_six">
                    Xamarin
                  </div>
                </div>
                <div className="customsoft_fourth_container_third_box_part_two">
                  <div className="customsoft_fourth_container_third_box_part_two_content_one">
                    Java
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_two_content_two">
                    <a className="button" href="">
                      Ruby, Rails
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_two_content_three">
                    <a className="button" href="">
                      React
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_two_content_four">
                    MySQL
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_two_content_five">
                    <a className="button" href="">
                      iOS
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_two_content_six">
                    IBM Watson
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_two_content_seven">
                    VueJS
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_two_content_eight">
                    Objective-C
                  </div>
                </div>
                <div className="customsoft_fourth_container_third_box_part_three">
                  <div className="customsoft_fourth_container_third_box_part_three_content">
                    <a className="button" href="">
                      DotNet
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_three_content_one">
                    Azure
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_three_content_two">
                    <a className="button" href="">
                      Angular
                    </a>
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_three_content_four">
                    mongoDB
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_three_content_five">
                    WPF
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_three_content_six">
                    React Native
                  </div>
                  <div className="customsoft_fourth_container_third_box_part_three_content_seven">
                    <a className="button" href="">
                      .NET Core
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container__feature">
          <div className="container__feature__col">
            <div className="container__feature__col__heading">
              Why DSME <span>Global Links?</span>
            </div>
            <div className="container__feature__col__info">
              We create a cross-functional team to find the perfect blend of
              tech teams and tested development processes that ensure the
              highest quality custom-built products on time and within budget.
            </div>
          </div>
          <div className="container__feature__col">
            <ServicesFeatureListItem
              label="Worry-free software development"
              info=" We have a standardized development process derived from industry
          best practices and our learnings across projects. Helps you save
          time, money and energy."
            />
            <ServicesFeatureListItem
              label="Complete transparency"
              info="Agile based project management, with 100% online cloud-based tools
          to ensure round the clock visibility & delivery."
            />
          </div>
          <div className="container__feature__col">
            <ServicesFeatureListItem
              label="Fair agreements & Strong IP Protection"
              info=" Standard ‘work for hire’ contracts but flexible enough to allow
          for quick team size adjustments, scope changes in fixed-price
          projects and pay only for work delivered."
            />
            <ServicesFeatureListItem
              label="Strong commitment to delivery"
              info="Every project comes with a delivery commitment. We make sure that
          we deliver the project as promised, no matter what happens."
            />
          </div>
        </div>
      </div>
    </>
  );
}
