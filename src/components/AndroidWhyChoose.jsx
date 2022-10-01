import React from "react";
import { AndroidIosWhyChoose } from "./AndroidIosWhyChoose";

export function AndroidWhyChoose({}) {
  return (
    <div className="androidios__why__choose">
      <div className="androidios__why__choose__content">
        <div className="androidios__why__choose__content__heading heading">
          Why choose native Android app development?
        </div>
        <div className="androidios__why__choose__content__info">
          Why is it worth building a native application for Android? See our
          reasons to make a well-informed choice.
        </div>
        <div className="androidios__why__choose__content__details">
          <AndroidIosWhyChoose
            svg={
              <svg
                width="42"
                height="51"
                viewBox="0 0 42 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.77225 36.9875C4.12177 36.9875 2.56628 36.9994 1.01079 36.9756C0.476465 36.9638 0.0846341 36.56 0.0371384 36.0138C0.0133905 35.8239 0.0252528 35.622 0.0252528 35.4202C0.0252528 31.7155 0.0846355 27.9989 0.00151801 24.2943C-0.0459777 21.9195 1.02267 20.3165 2.98187 19.1647C4.63235 18.1911 6.46094 17.7874 8.3014 17.4193C11.0087 16.8849 13.7396 16.7187 16.4825 16.8968C19.3085 17.0749 22.0989 17.4905 24.7705 18.4879C24.9487 18.5592 25.1267 18.6423 25.3405 18.7373C24.8774 19.2479 24.4499 19.6278 23.69 19.5566C22.3008 19.4141 21.3271 20.1265 20.7334 21.3495C20.5434 21.7295 20.3178 21.9551 19.8903 22.0738C18.4892 22.4657 17.6699 23.38 17.5393 24.8642C17.5037 25.2679 17.3612 25.5767 16.9931 25.8379C15.7938 26.6809 15.3545 27.8327 15.7345 29.2576C15.8413 29.6613 15.8057 29.9938 15.5445 30.35C14.7014 31.5493 14.6896 32.7841 15.5207 33.9953C15.782 34.3634 15.8176 34.7077 15.7345 35.1352C15.6276 35.717 15.6395 36.3344 15.592 36.9638C12.9678 36.9638 10.2487 36.9638 7.45833 36.9638C7.45833 36.75 7.45833 36.56 7.45833 36.3701C7.45833 33.3185 7.45833 30.2787 7.45833 27.2271C7.45833 27.0609 7.47023 26.9065 7.44648 26.7403C7.38711 26.301 7.13773 26.016 6.67464 25.9922C6.22344 25.9566 5.90286 26.1585 5.80787 26.6097C5.76038 26.8115 5.76037 27.0372 5.76037 27.2509C5.76037 30.2669 5.76037 33.271 5.76037 36.2869C5.77224 36.5007 5.77225 36.7144 5.77225 36.9875Z"
                  fill="#2ECC82"
                />
                <path
                  d="M34.2027 43.1256C33.4546 43.0187 32.8253 43.2443 32.3147 43.8024C31.6854 44.503 30.9611 44.6811 30.1061 44.2061C29.4649 43.8618 28.8 43.838 28.1469 44.1942C27.2801 44.6692 26.544 44.5267 25.8909 43.8024C25.3803 43.2325 24.7391 43.0306 24.003 43.1375C23.0887 43.2681 22.4831 42.9 22.1506 42.0569C21.8775 41.3564 21.3669 40.917 20.6189 40.7627C19.6808 40.5727 19.2177 40.0146 19.1821 39.041C19.1584 38.3641 18.8853 37.7823 18.2797 37.4261C17.3773 36.8799 17.1042 36.1437 17.4604 35.1463C17.686 34.517 17.5554 33.8995 17.1279 33.3771C16.4749 32.5697 16.4986 31.7979 17.1398 31.0023C17.5792 30.4561 17.6504 29.8268 17.4367 29.1737C17.1398 28.2594 17.3535 27.5589 18.1847 27.0602C18.8734 26.6446 19.1703 26.0034 19.2059 25.2197C19.2415 24.4123 19.6333 23.8661 20.4408 23.688C21.2957 23.5098 21.8775 23.023 22.21 22.2156C22.5306 21.42 23.1599 21.1232 23.9792 21.2419C24.7629 21.3488 25.4278 21.1351 25.9621 20.5414C26.5677 19.8527 27.2801 19.7458 28.0876 20.1733C28.7762 20.5414 29.4531 20.5414 30.1418 20.1733C30.9729 19.7221 31.6854 19.8764 32.3028 20.577C32.8015 21.1469 33.4427 21.3488 34.1908 21.2419C35.0576 21.1232 35.6987 21.4319 36.0312 22.275C36.3399 23.0586 36.9099 23.5098 37.7292 23.688C38.5485 23.8661 38.9878 24.3766 39.0116 25.2316C39.0353 26.0271 39.3797 26.6683 40.0802 27.1077C40.8639 27.5826 41.0777 28.2713 40.7927 29.1381C40.5552 29.8505 40.6502 30.5273 41.1251 31.1092C41.7307 31.8691 41.707 32.6053 41.1133 33.3533C40.662 33.9352 40.5552 34.5882 40.7808 35.2769C41.0658 36.1675 40.8521 36.8561 40.0328 37.343C39.2966 37.7823 39.0235 38.471 38.976 39.2784C38.9285 40.0384 38.5723 40.5252 37.8242 40.6914C36.9099 40.8933 36.2925 41.4039 35.9481 42.2707C35.6394 43.0543 34.9982 43.2562 34.2027 43.1256ZM21.3075 32.1541C21.2957 36.4643 24.7629 39.979 29.0494 39.9909C33.3715 40.0027 36.898 36.5237 36.9218 32.2016C36.9455 27.9151 33.4546 24.3885 29.1562 24.3766C24.7985 24.3766 21.3313 27.8201 21.3075 32.1541Z"
                  fill="#2ECC82"
                />
                <path
                  d="M14.5982 0C17.6379 0 19.8702 1.38925 20.6539 3.93027C20.9745 4.97518 21.1051 6.11508 21.0932 7.20748C21.0694 9.30917 20.452 11.2684 19.134 12.9426C17.8872 14.5337 16.2961 15.4955 14.1944 15.3649C12.7814 15.2818 11.5822 14.6762 10.656 13.655C8.04373 10.7815 7.39067 7.43308 8.54244 3.77591C9.26675 1.48424 11.4041 0.0831175 13.8976 0C14.1351 0 14.3607 0 14.5982 0Z"
                  fill="#2ECC82"
                />
                <path
                  d="M26.3883 46.2258C25.7233 47.6506 25.0465 49.1111 24.3578 50.5716C24.0847 51.1416 23.6098 51.1416 23.2654 50.5835C22.8023 49.7998 22.3274 49.0161 21.8881 48.2206C21.7337 47.9356 21.5793 47.8644 21.2587 47.9356C20.38 48.1137 19.5014 48.2681 18.6108 48.3868C18.3734 48.4224 18.0172 48.3512 17.9103 48.1968C17.7915 48.0425 17.839 47.6744 17.934 47.4606C18.6346 45.8933 19.3708 44.3497 20.0951 42.7942C20.1426 42.6873 20.2138 42.5923 20.3325 42.4023C20.475 42.6398 20.6057 42.7942 20.6888 42.9723C21.33 44.3022 22.363 44.9909 23.871 44.8721C24.3103 44.8365 24.6309 44.9552 24.9753 45.264C25.379 45.6083 25.8658 45.8695 26.3883 46.2258Z"
                  fill="#2ECC82"
                />
                <path
                  d="M32.3945 45.9523C32.7982 45.608 33.1545 45.2874 33.5463 45.0024C33.6888 44.8955 33.9144 44.848 34.0925 44.8599C35.7668 45.0143 36.9066 44.3256 37.6309 42.8057C37.7616 42.5326 38.1772 42.3901 38.5334 42.1289C38.8896 42.9363 39.1864 43.625 39.4833 44.3018C39.7564 44.943 40.0532 45.5723 40.3026 46.2254C40.3976 46.4629 40.4688 46.8666 40.3382 46.9972C40.172 47.1635 39.792 47.2109 39.5308 47.1753C38.7233 47.0447 37.9159 46.8547 37.1204 46.6766C36.7523 46.5935 36.5148 46.641 36.3011 47.021C35.8855 47.769 35.4224 48.4933 34.9356 49.2058C34.805 49.4076 34.52 49.6332 34.33 49.6214C34.1281 49.6095 33.8907 49.3364 33.7838 49.1227C33.2851 48.0659 32.8457 46.9972 32.3945 45.9523Z"
                  fill="#2ECC82"
                />
                <path
                  d="M29.0957 26.0879C32.4442 26.0761 35.1989 28.8071 35.2108 32.1318C35.2227 35.5158 32.5035 38.2587 29.1432 38.2706C25.7591 38.2825 23.0163 35.5752 22.9925 32.203C22.9569 28.8783 25.7235 26.0998 29.0957 26.0879Z"
                  fill="#2ECC82"
                />
              </svg>
            }
            title="Unique user experience"
            info="If one of your top goals is to create an Android application that delivers excellent, platform-specific user experience, it’s best to pick native development. When it comes to Android native development, it’s easier and faster to develop certain platform-specific features that may affect the UX. Also, keep in mind that the smooth and fast performance of a native application makes the user experience more satisfying."
          />
          <AndroidIosWhyChoose
            svg={
              <svg
                width="26"
                height="43"
                viewBox="0 0 26 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.9984 34.1904C17.3106 34.1904 8.67943 34.1904 0.00195312 34.1904C0.00195312 34.0206 0.00195312 33.8715 0.00195312 33.7172C0.00195312 23.6715 0.00195312 13.6257 0.00195312 3.58004C0.00195312 1.44024 1.45249 0 3.60257 0C9.87278 0 16.143 0 22.4132 0C24.553 0 25.9984 1.44539 25.9984 3.59033C25.9984 13.636 25.9984 23.6817 25.9984 33.7275C25.9984 33.8715 25.9984 34.0104 25.9984 34.1904ZM12.959 32.1586C15.8344 32.1586 18.7149 32.1586 21.5902 32.1586C22.3618 32.1586 22.5829 31.9426 22.5829 31.171C22.5829 28.6352 22.5829 26.0993 22.5829 23.5634C22.5829 22.7919 22.3669 22.5758 21.5902 22.5758C15.8652 22.5758 10.1403 22.5758 4.41014 22.5758C3.63343 22.5758 3.4174 22.7919 3.4174 23.5634C3.4174 26.0993 3.4174 28.6352 3.4174 31.171C3.4174 31.9426 3.63343 32.1586 4.41014 32.1586C7.25976 32.1586 10.1094 32.1586 12.959 32.1586ZM13.0002 6.15705C10.1248 6.15705 7.24433 6.15705 4.36899 6.15705C3.65401 6.15705 3.42254 6.38852 3.4174 7.09835C3.4174 8.74949 3.4174 10.4006 3.4174 12.0569C3.4174 12.7719 3.64886 13.0034 4.36384 13.0034C10.1197 13.0034 15.8704 13.0034 21.6262 13.0034C22.3412 13.0034 22.5778 12.7719 22.5778 12.0621C22.5778 10.4263 22.5778 8.7855 22.5778 7.14979C22.5778 6.37823 22.3618 6.16219 21.5851 6.16219C18.7251 6.15705 15.8652 6.15705 13.0002 6.15705ZM16.467 14.3664C14.7182 14.3664 12.9642 14.3664 11.2153 14.3664C10.4952 14.3664 10.2637 14.5979 10.2637 15.3077C10.2637 16.9589 10.2637 18.61 10.2637 20.2612C10.2637 20.9761 10.4952 21.2076 11.205 21.2076C14.677 21.2076 18.1542 21.2076 21.6262 21.2076C22.3412 21.2076 22.5778 20.9761 22.5778 20.2663C22.5778 18.6152 22.5778 16.964 22.5778 15.3129C22.5778 14.5979 22.3463 14.3664 21.6314 14.3664C19.9133 14.3664 18.1902 14.3664 16.467 14.3664ZM8.89547 17.787C8.89547 16.9332 8.90061 16.0793 8.89547 15.2255C8.89032 14.6236 8.63828 14.3664 8.03647 14.3664C6.78654 14.3613 5.53147 14.3613 4.28154 14.3664C3.67973 14.3664 3.42254 14.6236 3.42254 15.2255C3.41739 16.9332 3.41739 18.6409 3.42254 20.3486C3.42254 20.9504 3.67973 21.2076 4.28154 21.2076C5.53147 21.2128 6.78654 21.2128 8.03647 21.2076C8.63828 21.2076 8.89032 20.9504 8.89547 20.3486C8.90061 19.4947 8.89547 18.6409 8.89547 17.787ZM12.9847 2.73647C12.1463 2.73647 11.3079 2.73647 10.4695 2.73647C9.90879 2.73647 9.57444 3.00908 9.58473 3.43601C9.59502 3.84751 9.92422 4.1047 10.4592 4.1047C12.1515 4.10984 13.8437 4.1047 15.536 4.1047C16.0915 4.1047 16.431 3.83208 16.4207 3.40515C16.4105 2.99365 16.0813 2.73647 15.5463 2.73647C14.6925 2.73132 13.8386 2.73647 12.9847 2.73647ZM19.1572 3.40515C19.1469 3.05023 18.8126 2.72618 18.4628 2.73647C18.1079 2.74675 17.789 3.0811 17.7941 3.43087C17.8044 3.78579 18.1388 4.1047 18.4885 4.09956C18.8434 4.09441 19.1624 3.75492 19.1572 3.40515Z"
                  fill="#2ECC82"
                />
                <path
                  d="M0.0022861 35.5996C8.67976 35.5996 17.311 35.5996 25.9987 35.5996C25.9987 36.7569 26.0039 37.904 25.9936 39.0511C25.9936 39.2774 25.9627 39.5037 25.9164 39.7249C25.5821 41.2937 24.2138 42.4099 22.609 42.4151C16.2102 42.4202 9.81139 42.4202 3.40744 42.4151C1.51969 42.4151 0.0125736 40.9079 0.0022861 39.0253C-0.00285763 37.8989 0.0022861 36.7724 0.0022861 35.5996ZM12.9748 36.9473C11.874 36.9576 10.9327 37.9143 10.9482 39.0099C10.9636 40.1209 11.8946 41.052 13.0005 41.0468C14.1064 41.0468 15.0426 40.1107 15.0477 39.0048C15.058 37.8834 14.1013 36.937 12.9748 36.9473ZM6.18506 38.3104C5.75813 38.3104 5.33119 38.3052 4.90941 38.3104C4.42075 38.3206 4.10184 38.6087 4.11213 39.0099C4.12242 39.3957 4.43619 39.6734 4.89912 39.6786C5.73755 39.6889 6.57598 39.6889 7.40926 39.6786C7.89277 39.6734 8.21683 39.3803 8.20654 38.979C8.19625 38.5933 7.88249 38.3206 7.41955 38.3104C7.00805 38.3052 6.59655 38.3104 6.18506 38.3104ZM19.8417 38.3104C19.4147 38.3104 18.9878 38.3001 18.566 38.3104C18.1082 38.3206 17.7945 38.6035 17.7945 38.9945C17.7945 39.3803 18.1082 39.6734 18.566 39.6786C19.4199 39.6889 20.2686 39.6889 21.1225 39.6786C21.5802 39.6734 21.894 39.3803 21.894 38.9945C21.894 38.6087 21.5802 38.3206 21.1225 38.3104C20.6955 38.3052 20.2686 38.3104 19.8417 38.3104Z"
                  fill="#2ECC82"
                />
                <path
                  d="M21.1794 30.7651C17.0798 30.7651 13.0111 30.7651 8.92188 30.7651C8.92188 28.5018 8.92188 26.2591 8.92188 23.9805C12.9957 23.9805 17.0747 23.9805 21.1794 23.9805C21.1794 26.2231 21.1794 28.4812 21.1794 30.7651Z"
                  fill="#2ECC82"
                />
                <path
                  d="M7.50729 23.9746C7.50729 26.2379 7.50729 28.4805 7.50729 30.754C6.62257 30.754 5.73785 30.754 4.82227 30.754C4.82227 28.5062 4.82227 26.2533 4.82227 23.9746C5.70184 23.9746 6.57628 23.9746 7.50729 23.9746Z"
                  fill="#2ECC82"
                />
                <path
                  d="M21.1882 7.55664C21.1882 8.91459 21.1882 10.252 21.1882 11.6048C15.7255 11.6048 10.2783 11.6048 4.81055 11.6048C4.81055 10.252 4.81055 8.91973 4.81055 7.55664C10.2578 7.55664 15.705 7.55664 21.1882 7.55664ZM16.456 8.89401C15.5867 8.89401 14.7225 8.88887 13.8532 8.89401C13.3286 8.89915 12.9994 9.17177 13.0045 9.58841C13.0097 9.99991 13.3389 10.2622 13.8687 10.2622C15.5764 10.2674 17.279 10.2674 18.9867 10.2622C19.5113 10.2622 19.8405 9.98448 19.8354 9.56784C19.8302 9.15634 19.5011 8.89401 18.9661 8.89401C18.1328 8.88887 17.2944 8.89401 16.456 8.89401Z"
                  fill="#2ECC82"
                />
                <path
                  d="M11.6523 19.8079C11.6523 18.4499 11.6523 17.1177 11.6523 15.7598C14.8363 15.7598 17.9997 15.7598 21.1888 15.7598C21.1888 17.1126 21.1888 18.4448 21.1888 19.8079C18.0203 19.8079 14.8569 19.8079 11.6523 19.8079Z"
                  fill="#2ECC82"
                />
                <path
                  d="M7.49629 19.8196C6.591 19.8196 5.71142 19.8196 4.81641 19.8196C4.81641 18.4668 4.81641 17.1346 4.81641 15.7715C5.69598 15.7715 6.58071 15.7715 7.49629 15.7715C7.49629 17.1037 7.49629 18.4462 7.49629 19.8196Z"
                  fill="#2ECC82"
                />
                <path
                  d="M13.684 38.9831C13.6891 39.3638 13.4062 39.6673 13.0256 39.6775C12.6449 39.6878 12.3363 39.4049 12.3209 39.0294C12.3055 38.6282 12.6038 38.3145 12.9999 38.3145C13.3805 38.3145 13.6788 38.6025 13.684 38.9831Z"
                  fill="#2ECC82"
                />
              </svg>
            }
            title="Native Android features"
            info="Planning to equip your app with functions like biometrics, geolocation, or features based on Bluetooth connection? The more native features your Android app needs, the better to go for the native product. Even seemingly simple functionalities such as push notifications tend to perform better within native applications."
          />
          <AndroidIosWhyChoose
            svg={
              <svg
                width="42"
                height="49"
                viewBox="0 0 42 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.9448 48.305C26.4925 48.305 15.0476 48.305 3.59535 48.305C3.52856 48.2753 3.46176 48.2308 3.38754 48.2159C0.88629 47.6667 -0.590707 45.21 0.225724 42.7904C0.723004 41.3208 1.28708 39.8661 1.98476 38.493C3.24652 36.014 5.2579 34.4479 8.08572 34.1733C9.45881 34.0397 10.8467 34.0991 12.2272 34.0694C12.3905 34.0694 12.5464 34.0694 12.7023 34.0694C11.9823 33.2975 11.255 32.5998 10.6315 31.8205C10.2975 31.3974 9.98578 31.2193 9.43654 31.2193C5.51025 31.2267 2.38555 28.0946 2.37071 24.1609C2.36329 22.0827 2.3336 20.012 2.38555 17.9338C2.41524 16.9169 2.54884 15.9001 2.73439 14.8981C3.15003 12.6567 4.00357 10.5711 5.22079 8.64131C6.9353 5.93225 9.19161 3.77984 12.012 2.24347C15.3 0.454742 18.8181 -0.272624 22.5514 0.0910585C25.1343 0.34341 27.5539 1.12273 29.8028 2.40675C32.8087 4.12126 35.1467 6.51117 36.8389 9.52454C38.264 12.0703 39.0507 14.8239 39.1472 17.7408C39.2214 19.9377 39.1917 22.1421 39.1546 24.3465C39.1249 26.3133 38.353 27.9759 36.9206 29.3193C35.54 30.6107 33.8923 31.2639 31.9997 31.2193C31.5173 31.2119 31.2501 31.3826 30.9606 31.7389C30.4262 32.392 29.8102 32.9858 29.2313 33.5944C29.0977 33.7354 28.9492 33.8542 28.7117 34.0694C30.1368 34.0694 31.4208 34.0249 32.7048 34.0768C35.2506 34.1807 37.3436 35.2124 38.8429 37.3203C40.0527 39.0199 40.7504 40.9497 41.359 42.9165C41.8414 44.4826 41.4332 45.8557 40.3125 47.0358C39.6667 47.7261 38.828 48.0526 37.9448 48.305ZM10.8839 22.7359C10.5053 28.1614 13.3777 31.8279 17.1258 33.342C21.1486 34.9749 25.4237 33.5499 27.5761 31.2267C26.3218 31.2267 25.1194 31.2267 23.917 31.2267C23.7167 31.2267 23.5014 31.2342 23.3084 31.1971C22.5885 31.0412 22.1357 30.3955 22.2025 29.6681C22.2693 28.963 22.8631 28.4138 23.6127 28.4138C25.498 28.4063 27.3906 28.4138 29.2758 28.3989C29.4465 28.3989 29.6989 28.3099 29.7582 28.1837C30.5895 26.4766 30.7676 24.6508 30.6712 22.7433C30.4856 22.7433 30.3297 22.7433 30.1813 22.7433C28.9047 22.7433 27.6355 22.7433 26.3589 22.7433C25.1194 22.7359 23.9467 22.4464 22.9151 21.7636C22.1432 21.2514 21.4529 20.6057 20.733 20.0268C20.3767 20.3682 19.9833 20.7987 19.538 21.1624C18.2095 22.246 16.6805 22.7656 14.966 22.7507C13.6078 22.7284 12.2644 22.7359 10.8839 22.7359ZM36.2006 17.1767C36.0819 13.3024 33.7291 8.10692 28.9492 5.23457C23.4495 1.92432 17.8309 1.94658 12.398 5.36074C8.07088 8.07723 5.84425 12.1668 5.33955 17.1693C6.21535 17.1396 7.00952 17.1025 7.80368 17.0951C8.0783 17.0951 8.17479 17.0134 8.22674 16.7314C8.35292 16.0263 8.46425 15.2989 8.70175 14.6235C10.4163 9.76205 13.7488 6.71899 18.87 5.83576C22.4104 5.22715 25.6464 6.13264 28.4668 8.337C31.1981 10.4671 32.8013 13.295 33.3134 16.724C33.3505 16.9615 33.4099 17.0802 33.6845 17.0877C34.5232 17.0951 35.3693 17.147 36.2006 17.1767ZM20.7701 44.5197C22.6701 41.9591 24.5182 39.4578 26.396 36.9121C22.5959 36.9121 18.9146 36.9121 15.1367 36.9121C17.0293 39.4653 18.8774 41.9591 20.7701 44.5197Z"
                  fill="#2ECC82"
                />
              </svg>
            }
            title="Dependability and support"
            info="As native languages are more mature than cross-platform ones, they are generally more dependable as well, when it comes to community support or available resources. Also, if you’re thinking about expanding your app over the years, native development is a future-proof choice. Both Kotlin and Java are well-supported languages with rich ecosystems, offering a wide variety of open-source libraries, patterns, and articles."
          />
          <AndroidIosWhyChoose
            svg={
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.00390625 39.6431C0.303677 38.9759 0.811358 38.6858 1.54145 38.7535C1.84605 38.7825 2.15066 38.7583 2.49878 38.7583C2.49878 38.5649 2.49878 38.4102 2.49878 38.2555C2.49878 34.8661 2.49878 31.4768 2.49878 28.0874C2.49878 27.1591 2.93877 26.7336 3.86709 26.6901C5.37562 26.6127 6.88897 26.516 8.3975 26.4097C9.13242 26.3565 9.73197 26.898 9.73197 27.6765C9.7368 30.6935 9.73197 33.7057 9.73197 36.7228C9.73197 37.39 9.73197 38.0572 9.73197 38.7438C10.5394 38.7438 11.313 38.7438 12.1495 38.7438C12.1495 38.5939 12.1495 38.4392 12.1495 38.2893C12.1495 34.5373 12.1495 30.7854 12.1495 27.0334C12.1495 26.1341 12.4299 25.8053 13.3002 25.5635C14.7652 25.1526 16.2254 24.7126 17.6807 24.2726C18.3045 24.084 18.846 24.1952 19.1409 24.6787C19.2908 24.9253 19.373 25.2541 19.373 25.5442C19.3875 29.7797 19.3827 34.0103 19.3827 38.2458C19.3827 38.4054 19.3827 38.5601 19.3827 38.7438C20.1949 38.7438 20.9782 38.7438 21.8002 38.7438C21.8002 38.5746 21.8002 38.415 21.8002 38.2603C21.8002 33.3576 21.805 28.4501 21.7905 23.5473C21.7905 22.8753 22.0613 22.4643 22.6415 22.1404C24.1113 21.3184 25.5667 20.4626 27.0123 19.5971C27.4717 19.3215 27.9165 19.1958 28.4096 19.4618C28.9028 19.7277 29.043 20.1725 29.043 20.7092C29.0334 26.5499 29.0382 32.3954 29.0382 38.2361C29.0382 38.3957 29.0382 38.5552 29.0382 38.7438C29.8408 38.7438 30.6241 38.7438 31.4557 38.7438C31.4557 38.5891 31.4557 38.4295 31.4557 38.2748C31.4557 31.1722 31.4605 24.0695 31.4509 16.9717C31.4509 16.4447 31.6443 16.0772 32.0069 15.7049C33.4767 14.1867 34.9273 12.6444 36.3681 11.0923C36.7017 10.7345 37.0208 10.4299 37.5527 10.4589C38.1716 10.4928 38.6599 10.9666 38.6937 11.5903C38.6986 11.7257 38.6937 11.8563 38.6937 11.9916C38.6937 20.7285 38.6937 29.4654 38.6937 38.2023C38.6937 38.3763 38.6937 38.5456 38.6937 38.7777C39.0854 38.7777 39.4528 38.7777 39.8251 38.7777C40.5552 38.7777 41.0387 39.1258 41.1693 39.735C41.295 40.32 41.0049 40.8132 40.357 41.1323C40.3328 41.142 40.3231 41.171 40.3038 41.1903C27.167 41.1903 14.0351 41.1903 0.898388 41.1903C0.492246 41.0066 0.192474 40.7165 0.0135784 40.3055C0.00390832 40.0686 0.00390625 39.8559 0.00390625 39.6431Z"
                  fill="#2ECC82"
                />
                <path
                  d="M0.00483236 22.1939C0.328779 21.5267 0.841295 21.2511 1.59556 21.3236C3.5344 21.517 5.47324 21.4832 7.41209 21.3333C10.8208 21.0674 14.1231 20.3373 17.3239 19.1382C23.1549 16.9528 28.1205 13.5103 32.2496 8.85896C34.053 6.82342 35.8565 4.78788 37.66 2.75233C37.7373 2.6653 37.8098 2.57344 37.9259 2.43322C37.7615 2.42355 37.6503 2.41388 37.5391 2.41388C36.722 2.41388 35.9049 2.42355 35.0877 2.40905C34.435 2.39454 33.9418 1.85786 33.9418 1.20029C33.9467 0.562071 34.4302 0.0157138 35.0587 0.0108788C36.722 -0.00362626 38.3804 -0.00362626 40.0436 0.0108788C40.6045 0.0157138 41.0977 0.460536 41.1073 1.01656C41.146 2.72816 41.1654 4.44459 41.1605 6.16102C41.1557 6.78474 40.5755 7.25374 39.9373 7.24407C39.3232 7.2344 38.8059 6.7509 38.7672 6.14168C38.7527 5.86125 38.7623 5.58082 38.7623 5.17951C38.5786 5.38259 38.4626 5.5083 38.3465 5.63884C36.5527 7.64537 34.8121 9.70509 32.9555 11.6536C27.7047 17.151 21.3514 20.7918 13.9925 22.6823C10.3905 23.6058 6.73034 23.9877 3.01221 23.8765C2.46586 23.862 1.91467 23.7943 1.36831 23.775C0.705914 23.7557 0.256256 23.4511 0 22.8467C0.00483502 22.6243 0.00483236 22.4067 0.00483236 22.1939Z"
                  fill="#2ECC82"
                />
              </svg>
            }
            title="Stability and performance"
            info="Native Android development equals stable performance. Native SDKs and platforms for Android have been around for over 10 years, which makes them well-optimized and battle-tested. There are plenty of development and testing tools available, and it’s easy to find solutions to most problems that may arise during the development."
          />
          <AndroidIosWhyChoose
            svg={
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 29.4547C0.0897041 29.0465 0.165953 28.6339 0.278083 28.2302C1.28277 24.6286 4.59734 22.2514 8.32454 22.4578C12.0876 22.6641 15.2542 25.6781 15.6489 29.4233C16.0974 33.6977 13.0744 37.5415 8.83585 38.0887C4.59285 38.6359 0.623444 35.5904 0.0717633 31.3743C0.0627929 31.3026 0.022426 31.2398 0 31.1725C0 30.5984 0 30.0288 0 29.4547Z"
                  fill="#2ECC82"
                />
                <path
                  d="M8.12694 0C8.4409 0.0627929 8.75487 0.11213 9.06434 0.192864C11.2756 0.775941 12.8499 2.87502 12.7243 5.07277C12.5897 7.49029 10.8898 9.39202 8.54406 9.75084C5.61971 10.1994 2.94204 7.86256 2.96895 4.87542C2.99138 2.38164 4.84825 0.331905 7.3196 0.0672779C7.41827 0.0583075 7.51246 0.022426 7.60665 0C7.78158 0 7.9565 0 8.12694 0Z"
                  fill="#2ECC82"
                />
                <path
                  d="M33.3113 25.4258C36.0204 25.4258 38.1823 27.5921 38.1778 30.3057C38.1778 32.9968 35.989 35.1901 33.2979 35.1856C30.6247 35.1856 28.418 32.9699 28.418 30.2922C28.4225 27.6056 30.6157 25.4258 33.3113 25.4258Z"
                  fill="#2ECC82"
                />
                <path
                  d="M28.1464 14.8581C25.4284 14.8491 23.262 12.6558 23.2755 9.93331C23.2889 7.28256 25.5091 5.08481 28.1688 5.09378C30.8868 5.10275 33.0532 7.31395 33.0353 10.0679C33.0173 12.7007 30.8106 14.867 28.1464 14.8581Z"
                  fill="#2ECC82"
                />
                <path
                  d="M23.8265 15.8055C21.1713 18.4607 18.4263 21.2057 15.7442 23.8878C15.2553 23.4034 14.7395 22.8921 14.2461 22.3987C16.9462 19.6987 19.6911 16.9537 22.3284 14.3164C22.8173 14.8053 23.3331 15.3166 23.8265 15.8055Z"
                  fill="#2ECC82"
                />
                <path
                  d="M17.877 29.1855C20.6712 29.1855 23.4476 29.1855 26.2419 29.1855C26.2419 29.9166 26.2419 30.6432 26.2419 31.3923C23.4655 31.3923 20.6757 31.3923 17.877 31.3923C17.877 30.6612 17.877 29.948 17.877 29.1855Z"
                  fill="#2ECC82"
                />
                <path
                  d="M8.92959 20.2498C8.18953 20.2498 7.4719 20.2498 6.73633 20.2498C6.73633 17.4824 6.73633 14.724 6.73633 11.9746C7.4719 11.9746 8.18505 11.9746 8.92959 11.9746C8.92959 14.7106 8.92959 17.4735 8.92959 20.2498Z"
                  fill="#2ECC82"
                />
              </svg>
            }
            title="In-house transfer options"
            info="If you plan to transfer the project to in-house in the future, it’s a good idea to go for native development. It might be more challenging to find skilled cross-platform developers, while building your own team of native Android developers shouldn’t pose a big problem."
          />
        </div>
      </div>
    </div>
  );
}
