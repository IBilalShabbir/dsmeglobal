import React from "react";
import { HomeServicesCard } from "../components/HomeServicesCard";

export function MobileDevelopmentWhy({}) {
  return (
    <section
      className="home__services"
      style={{
        marginTop: "-7em",
        marginBottom: "-7em",
      }}
    >
      <svg
        width="150"
        height="150"
        style={{
          marginBottom: "1em",
        }}
        viewBox="0 0 150 177"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.8497 154.045C16.7711 144.044 15.4289 133.153 19.6806 121.243C23.082 111.672 28.7592 103.505 35.4369 96.0786C51.5601 78.164 70.7261 64.909 93.8938 57.945C95.1461 57.4733 96.4507 57.157 97.7787 57.003C99.0781 56.8834 100.382 57.1714 101.513 57.8277C102.644 58.4841 103.547 59.4767 104.098 60.67C105.465 63.4792 104.932 66.1537 103.064 68.5507C101.472 70.6282 99.1042 71.4187 96.77 72.285C73.0938 81.1414 52.9857 94.9935 38.138 115.835C30.3516 126.769 25.1828 138.771 26.1248 152.699C26.0694 153.154 25.9773 153.604 25.8497 154.045Z"
          fill="#2ECC82"
        />
        <path
          d="M49.0563 169.479C38.0019 162.751 34.6089 150.589 40.1194 137.855C44.6379 127.418 52.0992 119.268 60.4693 111.917C76.5841 97.7788 94.7081 87.3664 115.608 82.2696C118.993 81.4285 122.277 82.8752 123.361 85.6338C124.445 88.3925 123.286 91.6642 119.751 93.2034C115.725 94.936 111.415 95.9874 107.321 97.5854C86.7298 105.592 68.9727 117.552 55.9925 135.896C50.7403 143.331 46.9888 151.455 47.1556 160.934C47.2056 163.861 48.2227 166.544 49.0563 169.479Z"
          fill="#1E1E1E"
        />
        <path
          d="M6.70991 125.272C2.59158 114.506 3.29187 104.54 7.61862 94.7331C12.729 83.1265 21.1907 74.2196 30.5278 66.0529C36.1132 61.2751 41.9971 56.8645 48.1433 52.8483C50.4186 51.1916 53.1857 50.3669 55.9881 50.5101C56.8695 50.5237 57.7323 50.7679 58.4921 51.2187C59.2519 51.6695 59.8828 52.3115 60.323 53.0819C60.7633 53.8524 60.9978 54.7249 61.0036 55.6142C61.0095 56.5034 60.7865 57.3791 60.3565 58.1554C59.3228 60.3169 57.5054 61.6457 55.5796 62.9073C41.2405 72.2683 28.6104 83.4797 18.8982 97.7525C13.5377 105.6 9.26094 113.968 7.48523 123.464C7.27093 124.085 7.01179 124.689 6.70991 125.272Z"
          fill="#1E1E1E"
        />
        <path
          d="M99.8978 175.171C95.0375 176.55 90.1855 176.988 85.3502 175.297C80.1898 173.489 78.0223 169.67 79.2561 164.363C81.0068 156.794 85.9922 151.301 91.461 146.364C102.074 136.802 114.245 129.972 128.184 126.658C133.228 125.456 138.338 124.917 143.465 126.238C144.172 126.367 144.857 126.596 145.499 126.919C147.567 128.164 149.818 129.552 149.093 132.428C148.392 135.162 146.016 136.137 143.482 135.725C136.777 134.513 129.874 135.114 123.474 137.466C110.969 142.168 99.8894 148.888 91.7945 159.872C91.0088 160.962 90.3435 162.135 89.8104 163.371C86.9509 169.864 89.4436 174.212 96.4297 174.977C97.5468 175.112 98.7306 175.112 99.8978 175.171Z"
          fill="#2ECC82"
        />
        <path
          d="M76.9164 176.952C73.1968 177.11 69.4767 176.653 65.9036 175.598C61.085 174.177 58.534 170.552 58.1672 165.455C57.7337 159.416 59.4844 153.949 62.3355 148.785C69.1049 136.548 79.1756 127.59 90.6386 120.097C94.065 117.851 97.383 118.414 99.1254 121.106C100.868 123.797 100.042 127.448 96.7077 129.685C88.1459 135.446 80.3095 141.956 74.2904 150.493C72.4673 153.013 70.9869 155.768 69.8886 158.684C66.804 167.078 68.6714 172.301 76.9164 176.952Z"
          fill="#2ECC82"
        />
        <path
          d="M101.923 161.504C101.589 165.062 103.732 165.272 106.158 165.037C109.112 164.656 111.98 163.766 114.636 162.404C120.713 159.528 126.491 156.147 130.918 150.882C133.677 147.602 133.243 146.281 128.8 145.238C131.151 145.079 132.968 144.515 134.952 144.86C138.187 145.432 139.121 147.063 137.77 150.158C136.42 153.254 134.152 155.466 131.71 157.526C124.29 163.775 116.078 168.519 106.458 170.386C105.856 170.525 105.246 170.623 104.632 170.68C102.74 170.756 100.797 170.68 99.6299 168.939C98.3544 167.055 99.6299 165.39 100.464 163.775C100.914 162.985 101.456 162.253 101.923 161.504Z"
          fill="#1E1E1E"
        />
        <path
          d="M17.7227 45.6327C23.1948 37.2992 30.433 30.2956 38.9145 25.1276C39.5423 24.7758 40.2199 24.5233 40.9237 24.3791C41.5072 24.2445 42.2575 24.1267 42.6577 24.665C42.8613 24.9705 42.9411 25.3431 42.8806 25.7061C42.8201 26.0691 42.624 26.3948 42.3326 26.6163C41.5137 27.5481 40.6031 28.3935 39.6148 29.1395C32.218 33.8381 25.2216 39.1495 18.698 45.0187C18.3924 45.2534 18.0659 45.4589 17.7227 45.6327Z"
          fill="#1E1E1E"
        />
        <path
          d="M1 93.7234C1.49186 91.5534 3.85948 84.825 15.3391 71.4942C17.6734 68.6907 20.1049 66.0133 22.6337 63.462C34.3634 51.6872 48.1273 42.5281 63.2584 35.1099C64.7871 34.4986 66.1979 33.6218 67.4267 32.5194C69.4025 30.4756 70.3112 28.1627 68.8773 25.4797C67.5935 23.0491 64.9841 22.2585 61.8578 23.7135C44.4508 31.7877 27.9275 41.2917 14.9806 55.9262C8.40298 63.3527 3.92618 71.9063 2.27551 81.7298C2.09211 83.0335 1.44184 87.9369 1.12505 91.5451C1.12159 92.2729 1.07985 93 1 93.7234Z"
          fill="#2ECC82"
        />
        <path
          d="M0 71.5556C0.0500201 71.2976 0.0917112 71.037 0.125058 70.7734C0.0622759 71.0303 0.020445 71.2918 0 71.5556Z"
          fill="white"
        />
      </svg>

      <div className="home__services__heading heading">
        Why Work with DSME Global Links?
      </div>
      <div className="home__services__info">
        We create a cross-functional team to find the perfect blend of tech
        teams and tested development processes that ensure the highest quality
        custom-built products on time and within budget.
      </div>
      <div className="home__services__content">
        <HomeServicesCard
          svg={
            <svg
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.4376 48.5346C26.7547 48.4775 24.5 48.2777 22.3166 47.5642C22.0312 47.4643 21.7458 47.3644 21.4747 47.2502C19.0487 46.237 18.4065 45.0383 18.8917 42.4696C19.8336 37.5035 24.0291 34.0073 29.0237 34.0215C34.0041 34.0358 38.1568 37.5321 39.0987 42.4696C39.17 42.8407 39.1986 43.226 39.2414 43.6113C39.3983 44.9384 38.8418 45.9088 37.743 46.6081C36.1447 47.6355 34.3466 48.0351 32.5057 48.2777C31.3641 48.4204 30.1939 48.4775 29.4376 48.5346Z"
                fill="#2ECC82"
              />
              <path
                d="M9.82941 57.9657C7.0324 57.9372 4.66353 57.7088 2.42307 56.7527C2.19474 56.6528 1.98067 56.5529 1.76662 56.4388C0.29676 55.6253 -0.145612 54.7263 0.0399042 53.0709C0.582181 48.3474 4.3353 44.8654 9.10163 44.6371C13.6539 44.423 17.721 47.6196 18.6914 52.1719C18.7627 52.4858 18.7913 52.8141 18.8341 53.128C19.091 54.6978 18.4202 55.768 17.0503 56.4816C15.4948 57.295 13.8109 57.6375 12.0841 57.823C11.1994 57.9086 10.3146 57.9372 9.82941 57.9657Z"
                fill="#2ECC82"
              />
              <path
                d="M48.5426 57.9943C46.3592 57.9515 44.1901 57.766 42.1352 56.9954C39.0385 55.8395 38.7673 54.6693 39.3667 52.0007C40.3514 47.634 44.1901 44.5944 48.5997 44.6372C53.0949 44.68 56.8765 47.7767 57.8041 52.2005C57.8755 52.5145 57.904 52.8427 57.9468 53.1566C58.2037 54.7264 57.5187 55.7824 56.1488 56.4959C54.5933 57.3093 52.8951 57.6518 51.1826 57.8373C50.3121 57.9087 49.4274 57.9372 48.5426 57.9943Z"
                fill="#2ECC82"
              />
              <path
                d="M29.0058 0C29.9476 2.39744 30.8609 4.65217 31.7172 6.92117C31.8884 7.34928 32.1025 7.47772 32.5448 7.49199C34.8138 7.59188 37.0828 7.74886 39.3518 7.87729C39.4945 7.89156 39.623 7.9201 39.8941 8.09135C39.7657 8.1627 39.6087 8.20551 39.4945 8.3054C37.7107 9.77526 35.9269 11.2594 34.1289 12.715C33.8292 12.9576 33.7578 13.1574 33.8577 13.5284C34.4714 15.8402 35.0564 18.152 35.6558 20.4638C35.6701 20.5352 35.6843 20.6065 35.7271 20.7635C35.4845 20.6208 35.2848 20.5209 35.1135 20.4067C33.2298 19.208 31.3461 18.0236 29.4767 16.7963C29.1342 16.568 28.8916 16.5395 28.5206 16.7821C26.6369 18.0093 24.7389 19.208 22.8409 20.421C22.6697 20.5209 22.4984 20.6208 22.2273 20.792C22.5841 19.4078 22.9123 18.1092 23.2405 16.8249C23.5259 15.7403 23.7828 14.6415 24.0967 13.5712C24.2109 13.1859 24.1395 12.9576 23.8256 12.7007C22.0418 11.2594 20.2865 9.78953 18.517 8.33394C18.4028 8.23405 18.2887 8.11989 18.0889 7.94864C19.045 7.87729 19.9012 7.82021 20.7574 7.76313C22.3272 7.66323 23.8827 7.56334 25.4524 7.50626C25.8663 7.49199 26.0803 7.37782 26.2373 6.96398C27.0507 4.85195 27.8927 2.73993 28.7203 0.64217C28.806 0.456654 28.8773 0.299679 29.0058 0Z"
                fill="#2ECC82"
              />
              <path
                d="M33.7182 26.6006C33.6897 29.2264 31.6062 31.2956 28.9804 31.2813C26.3261 31.267 24.2426 29.1693 24.2712 26.515C24.2997 23.8607 26.4117 21.8057 29.0803 21.8343C31.6918 21.8628 33.7467 23.9748 33.7182 26.6006Z"
                fill="#2ECC82"
              />
              <path
                d="M9.42776 33.4219C11.868 33.4219 13.7803 35.3341 13.7803 37.7744C13.7803 40.1718 11.8537 42.1126 9.47057 42.1268C7.0446 42.1411 5.08956 40.2003 5.08956 37.7886C5.07529 35.3484 6.98752 33.4219 9.42776 33.4219Z"
                fill="#2ECC82"
              />
              <path
                d="M52.9125 37.7587C52.9125 40.1847 50.986 42.1255 48.56 42.1255C46.1626 42.1255 44.2218 40.199 44.2218 37.8015C44.2075 35.347 46.1055 33.4205 48.5457 33.4062C50.9717 33.4063 52.9125 35.3185 52.9125 37.7587Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Access to Expert Teams"
          description="Don’t know where to find the best iOS and Android developers? Look no further - we have the top talent available for you anytime."
        />
        <HomeServicesCard
          svg={
            <svg
              width="55"
              height="55"
              viewBox="0 0 55 55"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9197 0C19.9315 0.326389 20.9433 0.663658 21.9551 0.968288C26.9271 2.46968 31.8882 3.97107 36.8711 5.43982C37.2628 5.5595 37.3825 5.72269 37.3607 6.10348C37.3281 6.64746 37.3716 7.18056 37.3281 7.71367C37.3172 7.86598 37.1431 8.09445 37.0017 8.14885C35.8375 8.52964 34.6517 8.86691 33.3787 9.25858C33.5528 8.12709 32.813 7.87686 31.9862 7.64839C27.7431 6.46251 23.5109 5.23311 19.2678 4.04723C18.8871 3.93843 18.4084 3.94931 18.0276 4.07987C13.6431 5.62478 9.25858 7.20232 4.87408 8.76899C4.1125 9.04098 3.97107 9.25858 3.96019 10.0745C3.96019 12.566 3.94931 15.0465 3.97107 17.538C3.97107 17.9405 3.87315 18.1364 3.45973 18.256C2.32824 18.5607 1.20764 18.9197 0.0108796 19.2678C0.0108796 19.0394 0.0108796 18.8653 0.0108796 18.6912C0.0108796 14.5026 0.0217593 10.3139 0 6.13612C0.0108796 5.71181 0.119676 5.54862 0.522223 5.42894C6.41899 3.67732 12.3049 1.89306 18.2016 0.119676C18.2996 0.0979168 18.3975 0.0435186 18.4845 0C18.6368 0 18.7783 0 18.9197 0Z"
                fill="#2ECC82"
              />
              <path
                d="M54.9999 51.0037C53.7052 51.0037 52.3997 51.0037 51.0833 51.0037C51.0833 45.7489 51.0833 40.5593 51.0833 35.3262C52.4106 35.3262 53.7052 35.3262 54.9999 35.3262C54.9999 40.5484 54.9999 45.7815 54.9999 51.0037Z"
                fill="#2ECC82"
              />
              <path
                d="M54.999 23.7279C54.3571 23.6952 53.7152 23.6517 53.0298 23.6082C53.0298 23.0098 53.0298 22.4332 53.0298 21.7369C53.6717 21.726 54.3353 21.7042 54.999 21.6934C54.999 22.3679 54.999 23.0533 54.999 23.7279Z"
                fill="#2ECC82"
              />
              <path
                d="M35.5359 54.9522C32.9248 54.9522 30.3137 54.9631 27.7026 54.9522C26.31 54.9413 25.4396 54.0056 25.5701 52.711C25.6572 51.8515 26.2664 51.2422 27.2565 51.0246C27.8984 50.8832 28.2465 50.5242 28.2248 50.0019C28.2139 49.4797 27.8114 49.0989 27.2347 49.0663C26.8648 49.0445 26.4732 49.0663 26.1141 48.9901C25.1567 48.7834 24.5148 47.9566 24.5583 47.0209C24.6019 46.0526 25.309 45.2693 26.2773 45.117C26.3644 45.1061 26.4514 45.1061 26.5493 45.0952C27.1259 45.0191 27.5067 44.6165 27.4958 44.1052C27.485 43.5721 27.0607 43.1804 26.4514 43.1586C26.125 43.1478 25.8095 43.1586 25.4831 43.1478C24.4604 43.1042 23.6771 42.3536 23.5683 41.32C23.4704 40.3952 24.134 39.5031 25.1023 39.2746C25.2764 39.2311 25.4505 39.2202 25.6354 39.1876C26.1468 39.1005 26.5167 38.7306 26.4949 38.2519C26.4732 37.7515 26.2229 37.3924 25.7116 37.3163C25.3417 37.2619 24.9609 37.2728 24.591 37.2619C23.503 37.2401 22.6653 36.4785 22.5891 35.4232C22.513 34.4223 23.2528 33.5302 24.3081 33.367C24.5583 33.3234 24.8086 33.3234 25.0588 33.3234C29.0299 33.3234 33.0009 33.3234 36.972 33.3234C38.1688 33.3234 38.5387 32.7577 38.0817 31.6371C37.6357 30.5056 37.1352 29.3959 36.7435 28.2535C36.5151 27.5899 36.4063 26.8718 36.3301 26.1755C36.2648 25.4792 36.2975 24.7829 36.3192 24.0866C36.3519 22.6179 37.429 21.5626 38.8324 21.5843C40.2141 21.6061 41.226 22.6723 41.2368 24.1302C41.2368 24.1628 41.2368 24.2063 41.2368 24.2389C40.7581 27.3396 42.1507 29.9834 43.2931 32.6816C43.4236 32.9971 43.8588 33.2691 44.2179 33.3996C45.6975 33.9327 47.188 34.4223 48.6785 34.901C48.9831 34.9989 49.0919 35.1295 49.0919 35.4559C49.0811 40.6781 49.0919 45.9003 49.0702 51.1225C49.0702 51.3184 48.907 51.5904 48.7438 51.71C47.2424 52.7436 45.7301 53.7554 44.1961 54.7455C43.9785 54.8869 43.6739 54.9631 43.4019 54.9739C40.8016 54.9631 38.1688 54.9522 35.5359 54.9522Z"
                fill="#2ECC82"
              />
              <path
                d="M7.22485 26.9925C15.3628 24.5554 23.3485 22.151 31.5082 19.7031C31.2906 21.1936 31.1601 22.5753 30.8881 23.9244C30.3767 26.4485 29.4193 28.7985 28.1138 31.018C27.9506 31.2899 27.7765 31.377 27.4827 31.377C26.3621 31.3879 25.2307 31.3661 24.1101 31.4531C22.6304 31.5728 21.586 32.4105 20.9985 33.7487C20.4219 35.0652 20.5742 36.3599 21.4119 37.5566C21.4989 37.6872 21.6077 37.8177 21.7601 38.0136C20.7809 38.6555 19.8235 39.2974 18.8552 39.9066C18.7682 39.961 18.5506 39.9066 18.4309 39.8413C14.6013 37.5784 11.3482 34.7062 9.12879 30.7786C8.43249 29.5818 7.86675 28.3089 7.22485 26.9925Z"
                fill="#2ECC82"
              />
              <path
                d="M21.7048 40.4066C21.4654 42.2344 22.0856 43.5726 23.5217 44.5626C22.8907 45.3786 22.586 46.2925 22.6187 47.3043C22.6187 47.424 22.4772 47.5872 22.3685 47.6633C21.237 48.3705 20.0946 49.0777 18.9414 49.7522C18.8108 49.8284 18.5606 49.8284 18.4191 49.7631C13.1425 46.9779 8.85594 43.083 5.59204 38.0892C3.7969 35.3367 2.42607 32.3774 1.49042 29.2332C1.4469 29.1027 1.41426 28.9612 1.35986 28.7654C2.71982 28.352 4.05801 27.9494 5.41797 27.5469C5.82052 28.4499 6.16867 29.3203 6.58209 30.158C8.69274 34.5207 11.8478 37.9478 15.9059 40.5698C16.537 40.9724 17.1897 41.3531 17.799 41.7883C18.43 42.2453 18.9849 42.2235 19.605 41.7774C20.236 41.2987 20.9323 40.8962 21.7048 40.4066Z"
                fill="#2ECC82"
              />
              <path
                d="M5.94426 17.4511C5.93338 17.2988 5.9225 17.1791 5.9225 17.0595C5.9225 15.0032 5.9225 12.947 5.91162 10.8907C5.91162 10.5752 5.99866 10.4229 6.30329 10.3141C10.3179 8.88886 14.3325 7.45275 18.3579 6.02751C18.5755 5.95136 18.8475 5.94048 19.076 6.00575C23.0579 7.12636 27.0399 8.26872 31.011 9.41108C31.1742 9.4546 31.3047 9.60692 31.457 9.70483C31.3047 9.79187 31.1742 9.91155 31.0218 9.96594C22.8077 12.4356 14.5936 14.9053 6.36857 17.3641C6.23801 17.4076 6.09657 17.4185 5.94426 17.4511Z"
                fill="#2ECC82"
              />
              <path
                d="M31.4531 11.8906C31.4531 12.4672 31.4966 12.9677 31.4314 13.4573C31.4096 13.6205 31.1594 13.8381 30.9635 13.8925C26.9054 15.1328 22.8364 16.3513 18.7675 17.5698C14.6114 18.8101 10.4663 20.0612 6.31026 21.3015C6.24499 21.3233 6.17971 21.3342 6.11443 21.3559C6.08179 21.3124 6.04915 21.2906 6.04915 21.2689C6.01651 20.714 5.76628 20.0286 6.00563 19.6478C6.23411 19.2888 6.96304 19.2126 7.48526 19.0603C15.2533 16.7212 23.0323 14.3929 30.8003 12.0538C30.9853 11.9994 31.1811 11.9559 31.4531 11.8906Z"
                fill="#2ECC82"
              />
              <path
                d="M31.4539 15.7871C31.4539 16.3964 31.4865 16.9404 31.4321 17.4626C31.4213 17.5931 31.171 17.7563 30.9969 17.8107C28.4076 18.6049 25.8074 19.3883 23.218 20.1607C17.9087 21.7492 12.5995 23.3376 7.27932 24.926C7.10525 24.9804 6.94205 25.0239 6.72446 25.0892C6.58303 24.5126 6.45247 23.9686 6.31104 23.3376C14.6884 20.8244 23.033 18.3221 31.4539 15.7871Z"
                fill="#2ECC82"
              />
              <path
                d="M35.8722 31.3557C33.9356 31.3557 32.0969 31.3557 30.2039 31.3557C30.2909 31.1599 30.3562 31.0076 30.4323 30.8553C31.8793 28.1462 32.7606 25.2631 33.174 22.2277C33.2937 21.3573 33.3154 20.487 33.3481 19.6057C33.359 19.2358 33.5113 19.0944 33.8594 18.9965C34.9909 18.6809 36.1115 18.3328 37.3191 17.9629C37.3191 18.5939 37.33 19.1705 37.3083 19.7472C37.3083 19.8451 37.1342 19.9539 37.0145 20.0083C35.4696 20.7481 34.5557 21.9775 34.436 23.6747C34.3055 25.6874 34.2184 27.711 35.1759 29.6041C35.4478 30.1481 35.6219 30.7247 35.8722 31.3557Z"
                fill="#2ECC82"
              />
              <path
                d="M48.0886 22.5211C47.4467 22.5211 46.8375 22.5211 46.1629 22.5211C46.0106 19.6489 44.5636 17.6579 41.8655 16.57C42.1048 15.9607 42.3333 15.395 42.5618 14.8184C45.4558 15.5799 48.2083 18.8547 48.0886 22.5211Z"
                fill="#2ECC82"
              />
              <path
                d="M37.3408 14.0352C37.3408 14.6444 37.3517 15.1775 37.3299 15.6997C37.3299 15.7977 37.1994 15.95 37.0906 15.9826C35.8829 16.3525 34.6753 16.7115 33.4024 17.0923C33.4024 16.494 33.3915 15.95 33.4133 15.3951C33.4133 15.3081 33.4894 15.1775 33.5656 15.1558C34.795 14.7859 36.0353 14.4159 37.3408 14.0352Z"
                fill="#2ECC82"
              />
              <path
                d="M33.4803 13.1526C33.4367 13.0547 33.415 13.0438 33.415 13.0329C33.415 12.4781 33.2191 11.7927 33.4803 11.4119C33.7305 11.0528 34.4377 10.9876 34.949 10.8244C35.6453 10.5959 36.3416 10.4001 37.0379 10.1933C37.1032 10.1716 37.1685 10.1607 37.3425 10.1172C37.3425 10.7047 37.3534 11.2595 37.3317 11.8253C37.3317 11.9123 37.2011 12.032 37.1032 12.0646C35.8955 12.4237 34.6879 12.7827 33.4803 13.1526Z"
                fill="#2ECC82"
              />
              <path
                d="M4.4285 23.9023C4.56993 24.5225 4.70049 25.0556 4.8528 25.6648C3.54725 26.0565 2.25257 26.4482 0.892613 26.8616C0.772937 26.2632 0.653261 25.6866 0.522705 25.0773C1.82826 24.6857 3.10118 24.3049 4.4285 23.9023Z"
                fill="#2ECC82"
              />
              <path
                d="M3.99463 20.1055C4.04903 20.7582 4.09255 21.3457 4.13606 21.955C2.84139 22.3467 1.59023 22.7166 0.262911 23.1191C0.208512 22.4772 0.164994 21.8897 0.110596 21.2696C1.40527 20.8779 2.65643 20.508 3.99463 20.1055Z"
                fill="#2ECC82"
              />
              <path
                d="M50.7222 14.8514C51.2662 14.5032 51.7884 14.1659 52.3868 13.7852C52.7349 14.3944 53.0613 14.971 53.4203 15.6129C52.8111 15.9067 52.2344 16.1787 51.6361 16.4724C51.3314 15.9284 51.0486 15.4171 50.7222 14.8514Z"
                fill="#2ECC82"
              />
              <path
                d="M42.474 6.59375C43.1811 6.82222 43.8013 7.02894 44.4758 7.24653C44.2256 7.87755 43.9971 8.46505 43.7469 9.08519C43.1594 8.90023 42.6045 8.71528 41.9844 8.51945C42.1476 7.88843 42.2999 7.27917 42.474 6.59375Z"
                fill="#2ECC82"
              />
              <path
                d="M48.1322 9.25928C47.7187 9.81414 47.3597 10.3255 46.968 10.8586C46.4567 10.5322 45.9453 10.2167 45.4014 9.86853C45.7169 9.29191 46.0215 8.73705 46.3479 8.13867C46.9463 8.50858 47.512 8.86761 48.1322 9.25928Z"
                fill="#2ECC82"
              />
              <path
                d="M49.6447 13.3703C49.2096 12.9025 48.8179 12.489 48.3718 12.0103C48.807 11.5425 49.2313 11.0856 49.7209 10.5742C50.1996 11.0856 50.6674 11.5643 51.1679 12.0974C50.6566 12.5326 50.167 12.9351 49.6447 13.3703Z"
                fill="#2ECC82"
              />
              <path
                d="M54.7159 19.5724C54.0414 19.703 53.4321 19.8227 52.7902 19.9532C52.627 19.3657 52.4747 18.7891 52.3115 18.1581C52.9425 17.9514 53.5409 17.7555 54.1937 17.5488C54.3678 18.2451 54.531 18.8979 54.7159 19.5724Z"
                fill="#2ECC82"
              />
              <path
                d="M52.3667 27.2326C52.519 26.6125 52.6496 26.0576 52.8019 25.4375C53.422 25.5463 54.0422 25.666 54.7493 25.7857C54.5753 26.4819 54.423 27.1347 54.2489 27.8201C53.5961 27.6243 53.0086 27.4394 52.3667 27.2326Z"
                fill="#2ECC82"
              />
              <path
                d="M52.9193 30.8771C52.3101 30.5399 51.7661 30.2352 51.1895 29.9197C51.3635 29.5825 51.505 29.2887 51.6899 28.9297C52.2992 29.2126 52.8649 29.4737 53.4851 29.7565C53.2892 30.1373 53.1152 30.4746 52.9193 30.8771Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Strong IP Protection"
          description="Your idea is Safe! All work is done under standard “Work for Hire” and Non-Disclosure Agreements."
        />
        <HomeServicesCard
          svg={
            <svg
              width="43"
              height="62"
              viewBox="0 0 43 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.90919 6.98048C7.94233 7.03213 8.96687 7.10101 10 7.12684C11.2312 7.16128 11.9027 6.6447 12.2299 5.43076C12.5829 4.19098 12.91 2.95121 13.2458 1.72005C13.7107 0.023967 15.2863 -0.518434 16.6724 0.549149C17.74 1.37566 18.7817 2.22801 19.8493 3.05453C20.7619 3.76912 21.6401 3.77773 22.5613 3.06313C23.6117 2.25384 24.6362 1.4101 25.6866 0.592197C27.1244 -0.535653 28.6999 -0.00186157 29.1821 1.76309C29.5092 2.97704 29.845 4.19959 30.1808 5.41354C30.5424 6.72219 31.1967 7.19571 32.5742 7.14406C33.8829 7.08379 35.1829 7.01491 36.4916 6.97187C38.2049 6.9116 39.1691 8.2633 38.5579 9.87328C38.1274 11.0184 37.6711 12.1462 37.232 13.2827C36.7068 14.643 36.9651 15.4264 38.1963 16.2357C39.2466 16.9331 40.3142 17.6133 41.356 18.3192C42.7507 19.2663 42.7507 20.9279 41.356 21.875C40.3056 22.581 39.2466 23.2611 38.1876 23.9585C36.9393 24.7764 36.6982 25.5513 37.2492 26.9718C37.6797 28.0911 38.1274 29.2017 38.5492 30.3209C39.1691 31.974 38.1188 33.3601 36.3538 33.2482C35.071 33.1621 33.7882 33.0846 32.5054 33.0416C31.1795 32.9985 30.5166 33.4979 30.1722 34.7721C29.8364 36.0118 29.5092 37.2516 29.1648 38.4828C28.7085 40.153 27.09 40.6868 25.7124 39.6106C24.6879 38.8013 23.672 37.9748 22.6474 37.1741C21.6315 36.3821 20.7878 36.3821 19.7891 37.1655C18.7817 37.9576 17.7744 38.7669 16.7671 39.559C15.3035 40.7213 13.7279 40.1875 13.2372 38.3795C12.9014 37.1655 12.5743 35.943 12.2385 34.729C11.9113 33.5409 11.2226 33.0071 9.99141 33.0416C8.7258 33.0846 7.46881 33.1449 6.20321 33.2396C4.28328 33.3859 3.20709 31.9998 3.89585 30.2176C4.33494 29.0812 4.79124 27.9533 5.23033 26.8169C5.69525 25.6115 5.42835 24.7592 4.34355 24.036C3.3104 23.3472 2.26865 22.6757 1.22689 21.9869C-0.40031 20.9107 -0.408918 19.2921 1.20107 18.2245C2.25143 17.5272 3.3104 16.8298 4.35215 16.1238C5.41974 15.4006 5.68664 14.5483 5.22172 13.3429C4.76541 12.1634 4.29189 11.0011 3.85281 9.81301C3.24153 8.19442 4.3005 6.79968 6.02241 6.92882C6.31513 6.95465 6.60786 6.97187 6.90058 6.99769C6.90919 6.98909 6.90919 6.98909 6.90919 6.98048ZM21.2355 5.26718C13.0736 5.24996 6.40984 11.8621 6.39262 20.0067C6.36679 28.2374 12.9359 34.9012 21.1149 34.9443C29.3284 34.9959 36.0094 28.3494 36.0267 20.1272C36.0439 11.931 29.4404 5.29301 21.2355 5.26718Z"
                fill="#2ECC82"
              />
              <path
                d="M21.2099 52.5089C17.172 55.6514 13.1772 58.7509 9.12207 61.9106C9.12207 53.1719 9.12207 44.5107 9.12207 35.8064C9.50089 35.6945 9.74196 35.7203 9.86249 36.2197C10.1036 37.2614 10.4049 38.2946 10.7062 39.3191C11.6877 42.7199 15.4587 43.9683 18.2654 41.8073C19.2469 41.0496 20.2025 40.2576 21.2099 39.4483C22.2602 40.2834 23.2762 41.1443 24.3351 41.9278C26.2465 43.3484 28.8207 43.202 30.4307 41.4887C30.9989 40.8861 31.3863 40.0682 31.6963 39.2847C32.0665 38.329 32.2903 37.3131 32.5314 36.3144C32.6433 35.8495 32.85 35.7117 33.3149 35.8581C33.3149 44.4935 33.3149 53.146 33.3149 61.9192C29.2512 58.7595 25.2477 55.6428 21.2099 52.5089Z"
                fill="#2ECC82"
              />
              <path
                d="M21.2269 7.95329C27.8132 7.91885 33.3233 13.3601 33.3491 19.9119C33.375 26.7479 28.0026 32.2494 21.2872 32.2666C14.6062 32.2838 9.09606 26.8771 9.07023 20.2563C9.0358 13.4031 14.3909 7.98773 21.2269 7.95329ZM19.2639 23.02C18.5149 22.2537 17.8434 21.5219 17.1288 20.8332C16.5605 20.2908 15.7771 20.308 15.2519 20.8159C14.7267 21.3325 14.6837 22.1332 15.2261 22.6842C16.285 23.769 17.3526 24.8538 18.4546 25.887C19.2037 26.5843 19.7805 26.5413 20.4607 25.7664C21.3216 24.7849 22.1395 23.769 22.9574 22.7531C24.4985 20.8332 26.0396 18.9046 27.5635 16.9675C28.0973 16.2873 28.0371 15.4694 27.4602 14.9873C26.8489 14.4793 26.0569 14.5826 25.4628 15.2714C25.1615 15.6244 24.8773 15.9946 24.5932 16.3562C22.8541 18.5516 21.0978 20.7385 19.2639 23.02Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Quality Guaranteed"
          description="Our code is sure to be crisp and precise to the point it delivers exactly what you are looking for while maintaining all the code quality standards."
        />
        <HomeServicesCard
          svg={
            <svg
              width="51"
              height="62"
              viewBox="0 0 51 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.3094 62C34.9642 62 20.6189 62 6.27371 62C6.19899 61.9626 6.13362 61.9158 6.0589 61.9064C2.34184 61.1579 0.00700451 58.3414 0.00700451 54.5705C-0.00233484 38.8506 -0.00233484 23.1307 0.00700451 7.41081C0.00700451 3.13462 3.14502 0 7.40377 0C19.0686 0 30.7241 0 42.389 0C44.0514 0 44.9666 0.907636 44.976 2.56384C44.9853 4.78147 44.976 6.99909 44.976 9.22608C44.976 9.44129 44.9946 9.64715 45.004 9.9185C46.3115 9.9185 47.563 9.89979 48.8051 9.92786C49.8698 9.95593 50.673 10.639 50.9064 11.6776C50.9812 12.0051 50.9812 12.3607 50.9812 12.6976C50.9812 28.1274 50.9718 43.5666 50.9998 58.9964C51.0092 60.3906 50.6263 61.4292 49.3094 62ZM26.0825 14.4567C21.6649 14.4567 17.3128 14.4567 12.9607 14.4567C12.9607 20.9037 12.9607 27.304 12.9607 33.7978C14.6137 32.441 16.2014 31.1404 17.7798 29.8397C18.9939 28.8292 20.0025 28.8292 21.2353 29.8491C22.6643 31.0281 24.0932 32.2071 25.5314 33.3861C25.6902 33.5171 25.8583 33.6387 26.0825 33.8071C26.0825 27.2852 26.0825 20.8944 26.0825 14.4567ZM40.4464 4.50075C40.1942 4.50075 39.9794 4.50075 39.7646 4.50075C29.0711 4.50075 18.3775 4.50075 7.68395 4.50075C7.38509 4.50075 7.07689 4.52883 6.78737 4.57561C5.17166 4.82825 4.17235 6.42831 4.66734 8.0003C5.05025 9.23544 6.04956 9.90915 7.5532 9.90915C18.3495 9.90915 29.1364 9.90915 39.9327 9.90915C40.1102 9.90915 40.2783 9.88107 40.4464 9.87172C40.4464 8.0658 40.4464 6.31603 40.4464 4.50075Z"
                fill="#2ECC82"
              />
            </svg>
          }
          title="Covering All Basis"
          description="We like to go in-depth about things before diving deep into development to avoid any major issues later on."
        />
      </div>
    </section>
  );
}
