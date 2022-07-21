import React, { useState } from "react";
import { WebdevArrEntry } from "../components/WebdevArrEntry";

export function EmergingTechnologiesKnowHowMobDev() {
  const [selected, setSelected] = useState("Wearable Tech");

  const array = [
    {
      label: "Wearable Tech",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 144.341 144.374"
        >
          <g
            id="Group_29"
            data-name="Group 29"
            transform="translate(-157.648 -1512)"
          >
            <g
              id="Group_9"
              data-name="Group 9"
              transform="translate(157.648 1512)"
            >
              <path
                id="Path_72"
                data-name="Path 72"
                d="M856.589,206.967c.545-4.646,1.666-5.631,6.178-5.632q18.171,0,36.343,0c4.178,0,5.564,1.382,5.565,5.544q.012,24.068,0,48.136c0,4-1.426,5.441-5.383,5.445q-18.171.019-36.343,0c-4.7,0-5.686-.837-6.456-5.629-10.94,0-21.915-.021-32.889.05a3.771,3.771,0,0,0-2.1,1.125c-2.029,1.812-3.941,3.756-5.968,5.571-8.639,7.737-20.868,6.741-27.52-2.732-2.348-3.343-4.779-4.385-8.528-4.057-5.51.482-10.666-.43-14.725-4.7a15.062,15.062,0,0,1-4.383-10.635c-.035-9.477-.061-18.954,0-28.431a15.43,15.43,0,0,1,15.2-15.31c8.451-.079,16.909-.191,25.352.086,2.6.085,5.161,1.384,7.727,2.169a5.114,5.114,0,0,1,1.2.725c4.148,2.727,7.974,6.536,12.529,7.885,4.667,1.382,10.049.368,15.118.379C843.8,206.978,850.082,206.967,856.589,206.967ZM831.16,215.4c-2.5,0-4.848-.134-7.175.034a11.254,11.254,0,0,1-7.846-2.325c-3.546-2.6-7.255-5.007-11.013-7.3a9.9,9.9,0,0,0-4.664-1.6c-8.165-.157-16.336-.133-24.5-.049-4.617.047-7.423,3.477-6.909,8.44,3.8,0,7.633-.016,11.465,0,3.249.017,5.2,1.622,5.2,4.215s-1.95,4.191-5.207,4.208c-3.819.02-7.639,0-11.516,0V229.5c3.923,0,7.665-.012,11.406,0,3.315.014,5.241,1.514,5.314,4.1.076,2.691-1.922,4.315-5.366,4.329-3.813.015-7.627,0-11.416,0-.2,5.386,2.57,8.428,7.487,8.455,7.793.042,15.586-.022,23.379.032,2.754.019,4.592,1.877,4.521,4.309-.068,2.332-1.839,3.979-4.468,4.092-1.242.054-2.487.009-4.125.009,4.18,4.256,9.637,4.468,13.743.836,2.6-2.3,4.931-4.921,7.651-7.057a10.787,10.787,0,0,1,5.172-2.116,76.367,76.367,0,0,1,8.86-.093c.619-2.333.085-3.532-1.968-4.707a12.437,12.437,0,0,1-.015-21.578C831.209,218.941,831.755,217.742,831.16,215.4Zm34.256-5.507v41.912h30.671V209.893Zm-25.4,5.617c-.427,2.194-.09,3.4,1.936,4.538a12.429,12.429,0,0,1,.019,21.707c-2.087,1.182-2.49,2.417-1.892,4.468h16.5V215.51Zm-.161,15.374a4.227,4.227,0,1,0-4.353,4.236A4.337,4.337,0,0,0,839.851,230.884Z"
                transform="translate(-760.342 -122.372)"
              />
              <path
                id="Path_73"
                data-name="Path 73"
                d="M888.769,102.413c2.169,0,4.036-.032,5.9.007,2.982.061,4.882,1.777,4.832,4.3-.048,2.452-1.857,4.065-4.71,4.113-3.473.059-7.417-.952-10.285.377-2.739,1.27-4.263,5.034-6.487,7.555a145.167,145.167,0,0,1-24.356,21.655c-2.282,1.641-4.34,1.812-6.67.112-11.117-8.114-21.489-16.987-29.656-28.209a4.426,4.426,0,0,0-2.99-1.415c-2.9-.191-5.819-.021-8.73-.082-2.787-.059-4.646-1.8-4.646-4.215,0-2.461,1.812-4.128,4.635-4.194,1.871-.043,3.744-.008,5.935-.008-.556-2.115-1.116-4.029-1.562-5.969-3.194-13.887,5.572-27.725,19.381-30.321,7.123-1.339,13.307,1.017,18.689,5.687.7.608,1.345,1.277,2.126,2.024,8.744-8.48,18.472-10.914,29.338-4.5,5.58,3.293,8.96,8.464,10.662,14.651C891.875,90.148,891.094,96.227,888.769,102.413Zm-32.879,4.653c4.166-5.127,2.635-4.63,9.837-4.653,2.442-.008,4.883,0,7.325,0,6.954,0,8.049-.926,9.269-7.919a22.889,22.889,0,0,0,.263-2.8c.385-7.816-4.394-14.958-11.3-16.912-6.815-1.928-12.965,1.175-17.013,8.585-.135.246-.237.513-.388.747a4.18,4.18,0,0,1-7.228.061c-.51-.781-.869-1.659-1.351-2.461-6.045-10.062-19.164-9.962-25.018.219-3.178,5.527-2.966,11.207-.758,17.047.937,2.48,2.234,3.223,4.988,3.6,7.1.962,11.449-1.58,14.587-7.971,2.475-5.041,5.866-4.734,8.95.127C850.645,98.816,853.242,102.9,855.891,107.066Zm-28.5,3.9a107.4,107.4,0,0,0,21.777,20.593,2.813,2.813,0,0,0,2.581-.278c3.627-2.817,7.271-5.64,10.641-8.753,3.806-3.516,7.327-7.339,11.272-11.331-6.219-.984-11.365-1.067-13.731,5.413a3.323,3.323,0,0,1-.649.915c-2.075,2.454-4.975,2.426-6.888-.176-1.217-1.657-2.238-3.46-3.344-5.2-1.836-2.884-3.67-5.769-6.017-9.459C840.685,111.825,834.139,111.435,827.39,110.967Z"
                transform="translate(-778.064 -65.7)"
              />
            </g>
          </g>
        </svg>
      ),
      info: "We'll help you ideate, design, develop and launch your Wearable app. Apps would be supported by strong back-end, cloud based web systems.",
    },
    {
      label: "Geo Tracking",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 135.396 135.374"
        >
          <g
            id="Group_30"
            data-name="Group 30"
            transform="translate(-421.925 -1521)"
          >
            <g
              id="Group_10"
              data-name="Group 10"
              transform="translate(421.925 1521)"
            >
              <path
                id="Path_74"
                data-name="Path 74"
                d="M1296.872,71.943a67.667,67.667,0,0,1,67.591,68.169c-.043,37.215-30.571,67.271-68.259,67.2-37.2-.065-67.2-30.595-67.137-68.321C1229.125,102.124,1259.7,71.893,1296.872,71.943Zm-.063,9.653a58.034,58.034,0,1,0,58,58A58.118,58.118,0,0,0,1296.809,81.6Z"
                transform="translate(-1229.066 -71.943)"
              />
              <path
                id="Path_75"
                data-name="Path 75"
                d="M1348.082,141.39c-.171.572-.446,1.739-.863,2.853q-9.285,24.8-18.606,49.593c-.176.47-.236,1.077-.569,1.377-1.406,1.262-2.73,3.037-4.392,3.486-2.26.611-3.872-1.138-4.811-3.246-2.734-6.143-5.381-12.329-8.284-18.392a7.772,7.772,0,0,0-3.393-3.4c-5.882-2.816-11.876-5.4-17.862-7.994-2.31-1-4.077-2.454-3.966-5.1.11-2.627,1.942-3.906,4.328-4.794,17.019-6.334,34-12.77,51.006-19.142C1344.714,135.114,1348.011,137.005,1348.082,141.39Zm-25.124,39.653,11.955-31.917-31.876,11.985c3.989,1.7,7.27,3.2,10.622,4.507a7.794,7.794,0,0,1,4.74,4.672C1319.741,173.731,1321.272,177.1,1322.958,181.043Z"
                transform="translate(-1251.33 -97.336)"
              />
            </g>
          </g>
        </svg>
      ),
      info: "We have leveraged GPS technology for apps built for mobile workforce management, fleet tracking to geo-fencing, geo-targeting and location aware in-app messaging.",
    },
    {
      label: "Internet of Things",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 143.757 144.452"
        >
          <g
            id="Group_31"
            data-name="Group 31"
            transform="translate(-707.142 -1512)"
          >
            <g
              id="Group_11"
              data-name="Group 11"
              transform="translate(707.142 1512)"
            >
              <path
                id="Path_76"
                data-name="Path 76"
                d="M1776.94,146.931c-5.021,0-9.888.006-14.755,0-13.592-.018-25.21-9.7-26.97-22.481-1.942-14.09,6.162-26.49,19.855-30.2,1.732-.469,2.52-1.02,2.869-2.993,3.39-19.155,16.036-32.611,34.731-36.466,13.571-2.8,25.806.606,36.605,9.337a6.04,6.04,0,0,0,4.169,1.346c17.873-2.86,34.425,11.68,33.818,29.942a4.609,4.609,0,0,0,1.789,4.262,26.738,26.738,0,0,1-17.583,47.255c-4.872.007-9.745,0-14.808,0a20.937,20.937,0,0,0-.267,2.278c-.02,5.92-.12,11.842.074,17.755.041,1.251,1.056,2.559,1.862,3.665.525.719,1.551,1.049,2.237,1.678,2.272,2.082,4.351,2.718,7.6,1.309,5.091-2.2,10.926.149,14.091,4.718a12.763,12.763,0,0,1-.531,15.207,12.583,12.583,0,0,1-14.471,3.8,12.209,12.209,0,0,1-7.9-12.658c.213-2.074-.263-3.314-2.029-4.374-1.924-1.155-3.575-2.784-5.534-3.861-3.142-1.727-4.028-4.251-3.935-7.692.193-7.13.058-14.268.058-21.616H1811.01v17.762c0,1.128.083,2.263-.016,3.381-.287,3.231.249,5.573,3.589,7.517,4.528,2.635,5.928,8.988,4.091,14.057a12.63,12.63,0,0,1-23.942-.447c-1.663-5.128.021-11.212,4.6-13.926,2.836-1.68,3.354-3.605,3.277-6.545-.187-7.217-.061-14.442-.061-21.837h-16.914v5.214c0,6.013-.042,12.027.016,18.04a5.663,5.663,0,0,1-2.671,5.218c-2.424,1.605-4.7,3.443-7.139,5.017a3.414,3.414,0,0,0-1.674,3.719,12.524,12.524,0,0,1-11.028,13.886c-6.567.774-12.969-4.019-13.9-10.406-1.052-7.212,3.216-13.624,10.3-14.637,2.528-.362,5.255.767,7.905,1.106a4.794,4.794,0,0,0,2.9-.187c6.861-4.437,6.84-4.473,6.836-12.654q0-6.624-.033-13.247A10.583,10.583,0,0,0,1776.94,146.931Zm45.265-77.6c-8.908-6.26-18.406-8.515-28.76-6.084-21,4.929-32.361,25.8-25.431,46.435,1.138,3.388.387,5.66-2.173,6.583-2.441.88-4.731-.515-5.78-3.837-1.033-3.273-1.8-6.63-2.679-9.95-9.248,2.14-14.873,10.41-13.793,20.265.957,8.737,8.881,15.719,18.068,15.73q45.075.057,90.151,0a18.16,18.16,0,0,0,18.337-17.88,16.828,16.828,0,0,0-5.107-13.058c-2.268,2.907-4.128,5.765-6.5,8.1a4.909,4.909,0,0,1-4.479.7,5.509,5.509,0,0,1-2.391-3.927c-.123-1.1,1.049-2.515,1.935-3.539,9.373-10.842,5.876-27.634-7.185-33.354-8.484-3.716-16.3-2.067-23.231,3.993-2.25,1.966-4.8,1.993-6.476.1-1.57-1.774-1.338-4.282.717-6.229C1818.845,72.034,1820.41,70.841,1822.206,69.332Zm-56.373,116.145a4.162,4.162,0,1,0-4.208,4.319A4.237,4.237,0,0,0,1765.832,185.477Zm40.923,4.319a4.228,4.228,0,1,0-4.133-4.392A4.221,4.221,0,0,0,1806.756,189.8Zm49.293-4.267a4.167,4.167,0,1,0-4.265,4.267A4.25,4.25,0,0,0,1856.049,185.529Z"
                transform="translate(-1734.929 -53.831)"
              />
              <path
                id="Path_77"
                data-name="Path 77"
                d="M1840.492,115.043c10.046.3,18.907,3.546,26.244,10.555,2.4,2.292,2.632,4.729.748,6.632-1.831,1.848-4.1,1.691-6.476-.447-12.179-10.979-28.757-11.02-40.77-.1-2.49,2.264-4.856,2.426-6.68.456-1.809-1.953-1.518-4.3.939-6.629C1821.78,118.606,1830.558,115.385,1840.492,115.043Z"
                transform="translate(-1768.718 -80.53)"
              />
              <path
                id="Path_78"
                data-name="Path 78"
                d="M1849.841,145.059a21.939,21.939,0,0,1,14.189,5.537c2.277,2.038,2.621,4.482.979,6.451-1.62,1.944-4,1.947-6.464.008-5.917-4.664-11.51-4.68-17.371-.051-2.491,1.967-4.823,2-6.47.1-1.74-2.011-1.344-4.507,1.086-6.641A21.849,21.849,0,0,1,1849.841,145.059Z"
                transform="translate(-1777.982 -93.622)"
              />
              <path
                id="Path_79"
                data-name="Path 79"
                d="M1863.309,179.268a4.158,4.158,0,0,1-8.312.246,4.159,4.159,0,1,1,8.312-.246Z"
                transform="translate(-1787.299 -106.74)"
              />
            </g>
          </g>
        </svg>
      ),
      info: "We deliver mobile-enabled IoT, solutions for equipment and appliances controlled via mobile, including connected home solutions, real-time tracking and monitoring services, and many more.",
    },
    {
      label: "Location Tracking",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 120.788 142.938"
        >
          <g
            id="Group_32"
            data-name="Group 32"
            transform="translate(-987.321 -1521)"
          >
            <g
              id="Group_12"
              data-name="Group 12"
              transform="translate(987.321 1521)"
            >
              <path
                id="Path_80"
                data-name="Path 80"
                d="M2352.644,90.5c-.085,13.116-4.827,24.666-11.635,35.518-8.03,12.8-18.61,23.363-29.7,33.46q-6.079,5.538-12.311,10.908c-3.947,3.387-9.243,3.8-13.03.533-13.513-11.656-27.033-23.339-37.79-37.753-7.048-9.445-12.847-19.567-15.171-31.276a59.924,59.924,0,0,1,37.207-67.555c35.52-13.845,75.311,8.693,81.475,46.2C2352.233,83.816,2352.337,87.174,2352.644,90.5ZM2240.3,90.417c0,1.579-.022,3.158.012,4.736a13.5,13.5,0,0,0,.248,1.649c1.648,11.11,6.685,20.731,13.133,29.713,10.283,14.324,23.627,25.645,36.662,37.267,1.3,1.16,2.4,1.067,3.645-.079,2.462-2.262,4.99-4.454,7.489-6.675,11.757-10.447,23.2-21.2,31.825-34.515,7.759-11.984,12.37-24.744,10.245-39.424-3.5-24.152-24.127-43.186-48.559-44.4A51.85,51.85,0,0,0,2240.3,90.417Z"
                transform="translate(-2231.856 -30.219)"
              />
              <path
                id="Path_81"
                data-name="Path 81"
                d="M2325.133,92.858a26.613,26.613,0,1,1-26.578,26.608A26.751,26.751,0,0,1,2325.133,92.858Zm.771,8.4c-9.883-.524-18.352,7.3-18.962,17.512-.573,9.581,7.469,18.371,17.32,18.934A18.429,18.429,0,0,0,2343.5,120.13C2344.111,110.427,2336.063,101.793,2325.9,101.254Z"
                transform="translate(-2264.946 -61.294)"
              />
            </g>
          </g>
        </svg>
      ),
      info: "We developed enhanced in-store experiences to capture secure contactless payments, indoor location sensing and contextual coupon delivery leveraging technologies like BLE Beacons, NFC etc.",
    },
    {
      label: "AR/VR Reality",
      svg: (
        <svg
          id="Group_13"
          data-name="Group 13"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 165.23 102.883"
        >
          <path
            id="Path_82"
            data-name="Path 82"
            d="M2890.1,81.792q-22.048-.012-44.1,0l-17.391,0h-.226q-9.149,0-18.3-.007c-14.507-.008-29.506-.016-44.259.023a20.022,20.022,0,0,0-19.945,19.9c-.06,21.422-.06,42.654,0,63.106.031,10.064,7.767,18.732,17.246,19.32,10.094.627,20.412.477,30.39.332q2.088-.03,4.174-.058c4.712-.062,9.141-2.188,13.165-6.318,2.856-2.932,5.927-6,9.387-9.387a10.949,10.949,0,0,1,16.446.013c1.671,1.633,3.345,3.318,4.965,4.947,1.671,1.681,3.4,3.419,5.124,5.1,3.708,3.617,7.474,5.417,11.512,5.5q3.1.065,6.2.147c9.21.231,18.734.47,28.045-.1,11.075-.673,18.52-9.04,18.525-20.82q.014-30.421,0-60.842C2911.047,90.57,2902.233,81.8,2890.1,81.792Zm11.816,81.279c0,7.812-4.468,12.329-12.249,12.391-5.569.045-11.232.036-16.706.028q-5.4-.008-10.8,0a13.147,13.147,0,0,1-10-4.217c-3.28-3.457-6.69-6.8-9.593-9.612a19.9,19.9,0,0,0-28.168-.017c-3.727,3.617-6.943,6.834-9.83,9.836a12.5,12.5,0,0,1-9.438,4q-3.442,0-6.884.017c-3.183.009-6.418.019-9.666.019-3.867,0-7.754-.014-11.607-.057-7.593-.085-11.95-4.587-11.954-12.351q-.017-29.934,0-59.869c0-7.81,4.478-12.292,12.272-12.3q21.884-.013,43.769-.006h33.894q22.17,0,44.342,0c8.259,0,12.625,4.356,12.628,12.59Q2901.927,133.3,2901.914,163.071Z"
            transform="translate(-2745.836 -81.776)"
          />
          <path
            id="Path_83"
            data-name="Path 83"
            d="M2836.947,153.871a18.031,18.031,0,0,1-18.217,18.063,18.327,18.327,0,0,1-18.324-18.373,18.6,18.6,0,0,1,18.339-18.182A18.315,18.315,0,0,1,2836.947,153.871Zm-8.693-.042a9.554,9.554,0,0,0-9.325-9.758,9.889,9.889,0,0,0-9.835,9.674,9.579,9.579,0,0,0,9.594,9.5A9.326,9.326,0,0,0,2828.254,153.829Z"
            transform="translate(-2770.367 -105.872)"
          />
          <path
            id="Path_84"
            data-name="Path 84"
            d="M2918.889,153.727a18.318,18.318,0,0,1,18.062-18.347,18.586,18.586,0,0,1,18.48,18.326,18.331,18.331,0,0,1-18.468,18.228A18.034,18.034,0,0,1,2918.889,153.727Zm8.692-.049a9.321,9.321,0,0,0,9.414,9.561,9.577,9.577,0,0,0,9.748-9.342,9.884,9.884,0,0,0-9.681-9.827A9.56,9.56,0,0,0,2927.581,153.678Z"
            transform="translate(-2823.628 -105.872)"
          />
        </svg>
      ),
      info: "With the new ARKit coming out from Apple and Android, we are set to deliver compelling AR mobile apps overlaying information and interactivity over real-world scenes.",
    },
  ];
  return (
    <div
      className="container__emerging__technologies"
      style={{
        marginTop: "5em",
      }}
    >
      <div className="container__emerging__technologies__heading__main">
        Emerging Technologies <span> Know -How</span>
      </div>
      <div className="container__emerging__technologies__text__main">
        We understand the potential value of emerging technologies for both
        corporates and consumers and thus help you choose the right set of
        technologies.
      </div>
      <div className="container__emerging__technologies__section">
        {array.map((item) => (
          <WebdevArrEntry
            label={item.label}
            svg={item.svg}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </div>
      {array
        .filter((item) => item.label === selected)
        .map((item) => (
          <div className="container__emerging__technologies__section__entry__data">
            <div className="container__emerging__technologies__section__entry__data___heading">
              {item.label}
            </div>
            <div className="container__emerging__technologies__section__entry__data__text">
              {item.info}
            </div>
          </div>
        ))}
    </div>
  );
}
