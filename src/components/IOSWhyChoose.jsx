import React from "react";
import { AndroidIosWhyChoose } from "./AndroidIosWhyChoose";

export function IOSWhyChoose({}) {
  const svg = (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.86945e-06 18.9397C-0.00826964 9.5364 6.51441 1.76382 15.2886 0.273869C24.4683 -1.2823 33.1349 3.91597 36.1148 12.7481C36.1893 12.9716 36.4293 13.2365 36.6446 13.311C43.6556 15.8604 47.8937 20.8021 49.127 28.136C50.7329 37.6965 44.144 47.017 34.6166 48.9208C25.3457 50.775 16.3895 45.5932 13.3516 36.637C13.2771 36.4135 13.0288 36.1652 12.8053 36.0907C5.82738 33.5577 1.63068 28.6575 0.248333 21.3732C0.066228 20.4213 0.0496729 19.4529 7.86945e-06 18.9397ZM18.9307 37.1088C21.1573 41.6945 26.6784 45.2539 33.1928 44.1612C39.103 43.1679 43.7963 38.1021 44.3344 32.2747C44.9635 25.421 40.7336 20.5372 37.1412 18.9148C35.8582 29.7584 29.8073 35.8092 18.9307 37.1088ZM29.6087 15.2396C29.6169 13.6752 28.1684 12.4501 26.6453 12.8557C19.3942 14.7761 14.8002 19.3866 12.8798 26.6295C12.4659 28.1856 13.7903 29.659 15.4045 29.5597C16.5881 29.4852 17.3828 28.7651 17.747 27.3744C18.3099 25.2306 19.3363 23.3433 20.818 21.7043C22.6969 19.635 25.0146 18.3106 27.7131 17.6153C28.8885 17.309 29.6004 16.3736 29.6087 15.2396Z"
        fill="#2ECC82"
      />
    </svg>
  );
  return (
    <div className="androidios__why__choose androidios__why__choose__reverse">
      <div className="androidios__why__choose__content">
        <div className="androidios__why__choose__content__heading heading">
          Why choose native IOS app development?
        </div>
        <div className="androidios__why__choose__content__info">
          What are the pros of building a native application for iOS? See our
          list and make sure your choice is well-informed.
        </div>
        <div className="androidios__why__choose__content__details">
          <AndroidIosWhyChoose
            svg={svg}
            title="Impressive performance"
            info="If application speed and top-notch performance are your priorities, you should go for native development. Native iOS apps tend to run faster than cross-platform ones, as they are written in Swift, which is supported by the platform’s ecosystem"
          />
          <AndroidIosWhyChoose
            svg={svg}
            title="Platform-specific features"
            info="Are you planning to equip your app with functions like biometrics, geolocation, or features based on a Bluetooth connection? If so, it’s better to develop a native iOS application. These are what we call native application features, and they usually are more difficult to develop for cross-platform. Even seemingly simple functionalities tend to perform better within native applications."
          />
          <AndroidIosWhyChoose
            svg={svg}
            title="Dependability and support"
            info="As Swift is a more mature language than any of the cross-platform ones, it is more dependable when it comes to community support or available development resources. They are also less prone to dynamic changes. Also, note that Swift is officially supported by Apple. It is in their best interest to keep the language up-to-date and dependable in terms of maintenance and development."
          />
          <AndroidIosWhyChoose
            svg={svg}
            title="Future-proof and scalable"
            info="Thinking about a product that you can expand over the years? Native iOS development will be a safe bet here. As a mature, well-supported language, Swift is less likely to change as dynamically as cross-platform frameworks. Also, note that native apps are faster to scale, implement changes, and add new features into, as there is only one platform that needs to be configured. Keep that in mind if you’re expecting your iOS app to grow rapidly or change in the future."
          />
          <AndroidIosWhyChoose
            svg={svg}
            title="In-house transfer options"
            info="If you plan to transfer the project to in-house in the future, it’s a good idea to go for native iOS development. It might be more challenging to find skilled cross-platform developers, while building your own team of native iOS developers shouldn’t pose a big challenge."
          />
          <AndroidIosWhyChoose
            svg={svg}
            title="Excellent UI/UX"
            info="Native iOS development results in a better app experience for your users. As native applications are written with only one platform in mind, there is no need to compromise on the user interface to work well on both platforms."
          />
        </div>
      </div>
    </div>
  );
}
