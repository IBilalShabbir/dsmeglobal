import React from "react";
import { Fade } from "react-reveal";
import { technologiesSvg } from "../assets";
import { HomeTechnologiesCard } from "./HomeTechnologiesCard";

export function AgileDiscoveryWhyRecommend() {
  const data = [
    {
      image: (
        <svg
          width="41"
          height="70"
          viewBox="0 0 41 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3518 69.118C20.2474 68.9242 20.1579 68.7304 20.0238 68.5515C15.8492 63.1992 11.6598 57.8617 7.47038 52.5094C7.36602 52.3752 7.26165 52.2262 7.09766 51.9876C9.52782 51.9876 11.8685 51.9876 14.254 51.9876C14.254 49.3785 14.254 46.844 14.254 44.1902C18.4136 45.2189 22.5136 45.2338 26.6881 44.1902C26.6881 46.8142 26.6881 49.3636 26.6881 51.9578C29.0884 51.9578 31.4142 51.9578 33.8891 51.9578C33.6804 52.2411 33.5462 52.4349 33.3971 52.6138C29.2375 57.9214 25.0779 63.229 20.9332 68.5515C20.799 68.7155 20.7096 68.9242 20.6052 69.118C20.5307 69.118 20.4412 69.118 20.3518 69.118Z"
            fill="#2ECC82"
          />
          <path
            d="M20.4702 40.9401C9.15426 40.9103 -0.0445645 31.6816 0.000162417 20.4105C0.0448893 9.07964 9.27354 -0.0297449 20.664 7.2994e-05C31.8606 0.0298909 41.0446 9.30327 40.9998 20.5297C40.9402 31.8009 31.7264 40.9699 20.4702 40.9401ZM22.5127 30.0566C22.8109 30.0566 23.0345 30.0715 23.2582 30.0566C26.4785 29.8478 28.9087 27.4773 28.9981 24.4508C29.0876 21.0665 26.568 18.3977 23.1836 18.3381C21.812 18.3083 20.4404 18.353 19.0688 18.3232C17.8909 18.3083 17.1306 17.5181 17.2051 16.4894C17.2797 15.5352 17.9953 14.924 19.1135 14.909C20.7386 14.8941 22.3487 14.909 23.9738 14.909C24.6447 14.909 25.3007 14.909 25.9865 14.909C25.9865 13.5374 25.9865 12.2403 25.9865 10.8985C24.8236 10.8985 23.7054 10.8985 22.5127 10.8985C22.5127 10.004 22.5127 9.15418 22.5127 8.30437C21.1262 8.30437 19.8142 8.30437 18.4426 8.30437C18.4426 9.19891 18.4426 10.0487 18.4426 10.8985C18.2935 10.9283 18.2189 10.9433 18.1295 10.9433C14.6706 11.4949 12.5237 14.6556 13.3288 18.0101C13.8953 20.3806 16.072 22.2144 18.5022 22.3039C19.9186 22.3486 21.3349 22.3039 22.7512 22.3486C23.1836 22.3635 23.6607 22.4381 24.0483 22.6319C24.7938 23.0046 25.1218 23.9141 24.8981 24.7191C24.6745 25.5093 23.944 26.061 23.0047 26.061C20.2615 26.0759 17.5182 26.061 14.775 26.061C14.5364 26.061 14.2979 26.061 14.0295 26.061C14.0295 27.4326 14.0295 28.7148 14.0295 30.1013C15.5204 30.1013 16.9666 30.1013 18.4724 30.1013C18.4724 31.0107 18.4724 31.8307 18.4724 32.6507C19.844 32.6507 21.156 32.6507 22.5127 32.6507C22.5127 31.7711 22.5127 30.966 22.5127 30.0566Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      title: "Reduce Cost",
      info: "ADW is the best way to reduce inflated and superficial development costs. Our goal is to arrive at the most critical features that add direct business value and get rid of the fat.",
    },
    {
      image: (
        <svg
          width="54"
          height="55"
          viewBox="0 0 54 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3763 39.6502C13.9543 38.4369 13.5719 37.2763 13.1498 36.129C13.0971 35.9839 12.7806 35.8784 12.5827 35.8784C10.0111 35.8652 7.45258 35.8784 4.8809 35.8652C4.51164 35.8652 4.116 35.8388 3.77311 35.7069C2.90269 35.3904 2.44111 34.5068 2.58618 33.5968C2.74443 32.6869 3.53572 32.0275 4.5512 32.0143C7.04375 32.0011 9.52311 32.0143 12.0157 32.0143C12.2267 32.0143 12.4509 32.0143 12.6619 32.0143C12.8861 30.7614 13.1103 29.5349 13.3477 28.2293C13.1366 28.2293 12.9124 28.2293 12.6751 28.2293C9.16703 28.2293 5.67219 28.2293 2.16416 28.2293C0.818975 28.2293 -0.0382507 27.4116 0.00131353 26.2247C0.0408778 25.1433 0.898103 24.3784 2.08503 24.3784C6.23928 24.3784 10.4067 24.3652 14.561 24.3916C15.0885 24.3916 15.405 24.2333 15.7347 23.8113C19.0185 19.657 23.3574 17.7184 28.6326 18.0745C35.3322 18.5229 40.7525 23.6003 41.8603 30.2998C43.1791 38.2522 37.8379 45.7826 29.8591 47.1278C25.4543 47.8663 21.4583 46.7717 17.9899 43.9099C17.6733 43.6462 17.37 43.5011 16.9348 43.5143C12.0157 43.5275 7.10969 43.5275 2.19054 43.5275C0.845351 43.5275 -0.0250626 42.723 0.0145016 41.5361C0.0540659 40.4283 0.911291 39.6765 2.13778 39.6765C5.97552 39.6765 9.81325 39.6765 13.6642 39.6765C13.9016 39.6502 14.1389 39.6502 14.3763 39.6502ZM27.327 28.8755C25.0982 28.8755 23.2915 30.7878 23.4629 32.977C23.6344 35.153 25.5203 36.762 27.6567 36.5642C29.8591 36.3663 31.4021 34.4936 31.2175 32.278C31.2043 32.0802 31.3098 31.8164 31.4417 31.6846C32.167 31.012 32.9451 30.3789 33.6837 29.7064C34.5145 28.9546 34.62 27.7809 33.9474 26.9896C33.2485 26.1719 32.0747 26.106 31.1779 26.8577C30.6636 27.2929 30.1361 27.7281 29.6481 28.1897C29.0942 28.7304 28.5403 29.2184 27.6831 28.8623C27.5908 28.8359 27.4457 28.8755 27.327 28.8755Z"
            fill="#2ECC82"
          />
          <path
            d="M43.0764 14.2367C42.7203 14.7774 42.4038 15.2786 42.1004 15.7402C43.0368 16.782 44.0259 17.7448 44.8699 18.813C48.4307 23.3497 50.066 28.5062 49.6308 34.2826C48.8659 44.5561 41.4015 52.8646 31.2335 54.6318C25.3384 55.6605 19.8521 54.4472 14.867 51.1106C13.812 50.3984 13.535 49.2775 14.1681 48.3279C14.7879 47.4048 15.9748 47.2201 17.0035 47.9059C20.5247 50.2798 24.402 51.3084 28.6354 51.0842C36.6801 50.6622 43.8413 44.477 45.4502 36.551C47.5207 26.4093 41.3883 16.8612 31.273 14.606C26.2088 13.485 21.5007 14.4873 17.1354 17.27C16.6738 17.5601 16.0803 17.7843 15.5528 17.7843C14.7088 17.7843 14.1021 17.1645 13.9043 16.3732C13.7065 15.5687 13.9834 14.8038 14.7088 14.2895C16.3969 13.1157 18.2168 12.1794 20.1687 11.5332C26.4989 9.44945 32.5786 10.0429 38.421 13.2344C38.5397 13.3004 38.6583 13.3663 38.7902 13.4323C38.8298 13.4454 38.8694 13.4586 38.9485 13.4718C39.2122 13.0498 39.5024 12.6278 39.8189 12.1266C38.9617 11.5727 38.1176 11.032 37.2736 10.4913C36.0603 9.7264 35.335 8.64498 35.1239 7.22066C34.9789 6.21837 35.1767 5.26883 35.691 4.4116C36.179 3.56756 36.7065 2.7499 37.2604 1.94543C38.5924 0.0199703 41.1245 -0.586682 43.1291 0.626622C46.1492 2.47295 49.1297 4.38523 52.0838 6.33706C54.0093 7.61631 54.55 10.1484 53.4026 12.153C52.9147 13.0234 52.374 13.8543 51.8069 14.6719C50.4617 16.5842 47.9559 17.1513 45.9382 15.9776C44.9754 15.4896 44.0655 14.8698 43.0764 14.2367Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      title: "Speed & Agility",
      info: "We have structured this workshop in a way to ensure that we gather and document an in-depth understanding of your product in the shortest time possible.",
    },
    {
      image: (
        <svg
          width="63"
          height="63"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6719 43.6731C15.6719 38.2429 15.6719 32.8281 15.6719 27.3979C15.6719 26.318 15.6719 26.2872 16.7826 26.2872C20.7164 26.2718 24.5885 26.8426 28.2601 28.2618C30.3581 29.064 32.2865 29.0794 34.3999 28.2618C37.9635 26.8734 41.7122 26.318 45.5226 26.2718C46.9727 26.2563 46.9727 26.2718 46.9727 27.6756C46.9727 38.428 46.9727 49.1805 46.9727 59.9329C46.9727 61.7224 46.1551 62.54 44.381 62.54C35.6804 62.54 26.9642 62.54 18.2636 62.54C16.5049 62.54 15.6873 61.707 15.6873 59.9175C15.6719 54.5181 15.6719 49.1033 15.6719 43.6731ZM31.33 33.5069C30.605 33.5069 29.8799 33.4915 29.1703 33.5069C27.6122 33.5532 26.6711 34.741 26.918 36.2683C27.643 40.5723 28.3527 44.8764 29.0623 49.1805C29.2937 50.538 30.1422 51.4019 31.33 51.3865C32.5024 51.3711 33.3355 50.538 33.5515 49.2113C34.2611 44.9073 34.9707 40.6032 35.6958 36.2991C35.958 34.7256 35.0016 33.5378 33.4126 33.5069C32.7338 33.4915 32.0242 33.5069 31.33 33.5069ZM33.5823 55.8294C33.5669 54.6261 32.5641 53.6234 31.3609 53.6234C30.1576 53.6234 29.1703 54.6261 29.1703 55.8448C29.1703 57.079 30.2193 58.1126 31.4226 58.0817C32.6413 58.0663 33.5977 57.0481 33.5823 55.8294Z"
            fill="#2ECC82"
          />
          <path
            d="M45.0036 23.9731C43.5843 24.1119 42.1959 24.2199 40.8229 24.3896C38.0615 24.7135 35.4081 25.4849 32.8164 26.4568C31.7983 26.8424 30.8727 26.8424 29.8545 26.4568C26.1367 25.0529 22.2954 24.2045 18.2999 24.0656C18.0993 24.0656 17.8833 24.0348 17.6211 24.0039C18.161 22.0756 18.6701 20.1781 19.1946 18.2806C19.7808 16.1517 20.3825 14.0382 20.9841 11.9093C21.0613 11.6317 21.1847 11.3231 21.3852 11.1226C24.594 7.80583 27.8182 4.51994 31.0424 1.21862C31.1195 1.14148 31.212 1.06435 31.4589 0.8638C31.5977 1.07977 31.6903 1.29575 31.8445 1.46544C34.9299 4.64335 38.0307 7.7904 41.1006 10.9837C41.3628 11.246 41.5634 11.6162 41.6714 11.9865C42.7821 15.874 43.862 19.7616 44.9418 23.6491C44.9573 23.7262 44.9727 23.8342 45.0036 23.9731Z"
            fill="#2ECC82"
          />
          <path
            d="M33.8175 0C36.872 1.21871 39.9574 2.39114 42.981 3.68699C45.1562 4.61259 47.2696 5.69247 49.3985 6.72606C52.0519 8.0219 54.2117 9.91939 55.7543 12.434C57.9758 16.0284 60.1355 19.6691 62.2953 23.2944C62.8352 24.1891 62.7735 25.1456 62.1102 25.9632C61.4314 26.7962 60.5521 26.9351 59.5339 26.6574C56.7725 25.9169 54.0266 25.1764 51.2497 24.5131C50.2007 24.2663 49.09 24.22 47.9947 24.1428C47.5165 24.112 47.3159 23.9577 47.1925 23.4949C46.0355 19.2834 44.8631 15.0873 43.6598 10.8913C43.5364 10.4439 43.2741 9.9811 42.9502 9.65714C40.0654 6.66435 37.1343 3.68699 34.2186 0.70963C34.0489 0.524509 33.8175 0.401095 33.6016 0.262254C33.6941 0.169694 33.7558 0.0771337 33.8175 0Z"
            fill="#2ECC82"
          />
          <path
            d="M28.9861 0.10791C27.1349 2.0054 25.3608 3.82575 23.6022 5.64611C22.3218 6.95738 21.0105 8.25323 19.7609 9.59535C19.3907 9.98102 19.0822 10.5055 18.9433 11.0146C17.7709 15.1027 16.6447 19.1908 15.534 23.2943C15.3643 23.8959 15.1329 24.1428 14.4696 24.1736C11.4768 24.3125 8.59199 25.0375 5.75347 25.9014C4.82786 26.1945 3.88683 26.4568 2.9458 26.719C2.03563 26.9813 1.23343 26.7653 0.616363 26.0403C-0.000706686 25.3306 -0.201254 24.4513 0.230694 23.6337C2.72983 18.9594 5.27524 14.3005 8.6537 10.1816C10.0421 8.48463 11.9242 7.43561 13.8216 6.4483C18.5577 3.96459 23.5559 2.03625 28.5696 0.185044C28.6467 0.138764 28.7547 0.138764 28.9861 0.10791Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      title: "Mitigate Risk",
      info: "During the workshop, we help you identify problem areas and any technical challenges. The goal is to make sure that any high-risk items are identified and dealt ear",
    },
    {
      image: (
        <svg
          width="63"
          height="60"
          viewBox="0 0 63 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M37.7757 52.2099C45.5371 52.2099 53.2841 52.2099 61.0167 52.2099C61.5342 55.7887 59.3351 58.9508 56.0724 59.77C55.4257 59.9281 54.7358 59.9856 54.0746 59.9856C40.061 60 26.0474 60 12.0194 60C10.0934 60 8.9292 59.1664 8.3974 57.3697C5.65217 48.2573 2.9213 39.1449 0.176073 30.0324C-0.427591 28.0202 0.564143 26.1517 2.49012 25.6487C2.87819 25.5481 3.30937 25.5481 3.71182 25.5481C11.4732 25.5481 19.249 25.5768 27.0104 25.5193C29.0226 25.5049 30.3018 26.5829 30.8048 28.3651C33.0326 36.0978 35.3035 43.8161 37.5601 51.5343C37.632 51.7643 37.7038 51.9655 37.7757 52.2099ZM6.62952 29.4431C6.62952 28.5376 5.8965 27.7902 4.99101 27.7902C4.09988 27.7902 3.35249 28.5376 3.35249 29.4431C3.35249 30.3774 4.05677 31.0816 4.99101 31.0816C5.91087 31.0673 6.62952 30.363 6.62952 29.4431ZM8.84296 35.0054C8.85733 34.0712 8.15306 33.3669 7.21882 33.3526C6.29895 33.3526 5.56593 34.0568 5.56593 34.9767C5.56593 35.8822 6.28457 36.6296 7.19006 36.644C8.09556 36.644 8.82858 35.9253 8.84296 35.0054Z"
            fill="#2ECC82"
          />
          <path
            d="M48.7722 24.5562C46.76 24.0387 45.1503 24.8293 43.5549 25.9216C41.6289 27.2295 39.5879 28.3937 37.6045 29.6442C37.1014 29.9604 36.5984 30.176 36.0378 29.8167C35.4773 29.443 35.4917 28.8968 35.5779 28.3075C35.7935 26.6546 35.966 25.0017 36.1816 23.3345C36.2247 22.9751 36.0809 22.8027 35.7935 22.6158C32.6171 20.6036 30.7198 17.7147 30.1018 14.0064C29.0813 7.91231 33.2926 1.70319 39.3723 0.352137C40.1916 0.165289 41.0396 0.0359322 41.8732 0.0359322C44.9059 0.00718633 47.953 -0.0503052 50.9857 0.0934243C56.2462 0.352137 60.8886 4.4628 61.9379 9.63706C63.3895 16.7517 58.7183 23.3776 51.5462 24.3693C50.6264 24.4987 49.6921 24.3837 48.7579 24.3837C48.7579 24.4268 48.7579 24.4843 48.7722 24.5562ZM48.8297 5.74199C48.8297 4.9946 48.5279 4.63527 47.9817 4.49154C47.4499 4.34781 46.9325 4.64965 46.7313 5.16707C46.6738 5.3108 46.6307 5.45453 46.6019 5.59826C45.5527 9.83828 44.4891 14.0783 43.4399 18.3183C43.2243 19.1807 43.483 19.7556 44.1585 19.9425C44.8197 20.1149 45.3515 19.6981 45.5671 18.8645C46.4295 15.4437 47.2918 12.023 48.1398 8.60221C48.3842 7.5961 48.6285 6.58999 48.8297 5.74199ZM53.6878 12.2242C52.5667 13.0578 51.5031 13.8483 50.4683 14.6532C49.9221 15.0844 49.8358 15.6881 50.2095 16.2055C50.5545 16.6654 51.2156 16.8092 51.7187 16.4355C53.2279 15.3287 54.7226 14.222 56.1887 13.0722C56.7923 12.5979 56.8067 11.8505 56.2174 11.3906C54.737 10.2263 53.2278 9.09089 51.6899 7.99854C51.0144 7.50986 50.0371 7.94105 50.0227 8.73156C50.0083 9.10526 50.2958 9.60831 50.5976 9.85265C51.575 10.6863 52.6242 11.4193 53.6878 12.2242ZM38.4812 12.2242C39.5592 11.4193 40.5653 10.6719 41.5714 9.91014C42.2182 9.42146 42.3619 8.76031 41.9595 8.22851C41.557 7.69671 40.8959 7.66796 40.2347 8.15664C38.898 9.14838 37.5613 10.1545 36.239 11.1606C35.3192 11.8649 35.3192 12.5979 36.2534 13.3022C37.547 14.2795 38.8549 15.2425 40.1485 16.2199C40.8815 16.766 41.557 16.7517 41.9738 16.1911C42.3907 15.6306 42.1894 14.9982 41.4564 14.4376C40.4791 13.719 39.5161 12.986 38.4812 12.2242Z"
            fill="#2ECC82"
          />
          <path
            d="M17.7539 5.08087C17.7539 4.23286 18.2857 3.55734 19.0762 3.35612C19.8092 3.18364 20.5997 3.55734 20.9303 4.3191C21.4046 5.41145 21.8214 6.51816 22.267 7.62488C22.5688 8.38664 22.8994 9.14841 23.1725 9.91018C23.5031 10.83 23.115 11.7355 22.2814 12.0805C21.419 12.4398 20.456 12.0805 20.0823 11.1606C19.3206 9.32089 18.6019 7.46678 17.8689 5.62704C17.797 5.44019 17.7827 5.21022 17.7539 5.08087Z"
            fill="#2ECC82"
          />
          <path
            d="M16.6323 17.2404C16.6179 18.3471 15.5831 19.1951 14.5482 18.807C12.5647 18.074 10.5956 17.2835 8.64093 16.4499C7.82167 16.1049 7.54859 15.1419 7.87916 14.3514C8.22412 13.5465 9.08649 13.101 9.90574 13.4172C11.8461 14.1502 13.7721 14.9263 15.6837 15.7168C16.3305 15.9899 16.6323 16.5361 16.6323 17.2404Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      title: "Best way to prepare for development",
      info: "There is no doubt that 90% of software projects often fail in time, cost or scope. Gathering requirements with ADW is our way of addressing this problem and we have been pretty successful with it.",
    },
    {
      image: (
        <svg
          width="42"
          height="51"
          viewBox="0 0 42 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.77225 36.9873C4.12177 36.9873 2.56628 36.9991 1.01079 36.9754C0.476465 36.9635 0.0846341 36.5598 0.0371384 36.0136C0.0133905 35.8236 0.0252528 35.6218 0.0252528 35.4199C0.0252528 31.7152 0.0846355 27.9987 0.00151801 24.294C-0.0459777 21.9192 1.02267 20.3163 2.98187 19.1645C4.63235 18.1908 6.46094 17.7871 8.3014 17.419C11.0087 16.8847 13.7396 16.7185 16.4825 16.8966C19.3085 17.0747 22.0989 17.4903 24.7705 18.4877C24.9487 18.5589 25.1267 18.642 25.3405 18.737C24.8774 19.2476 24.4499 19.6276 23.69 19.5563C22.3008 19.4138 21.3271 20.1263 20.7334 21.3493C20.5434 21.7293 20.3178 21.9549 19.8903 22.0736C18.4892 22.4654 17.6699 23.3797 17.5393 24.864C17.5037 25.2677 17.3612 25.5764 16.9931 25.8376C15.7938 26.6807 15.3545 27.8325 15.7345 29.2573C15.8413 29.6611 15.8057 29.9935 15.5445 30.3497C14.7014 31.549 14.6896 32.7839 15.5207 33.995C15.782 34.3631 15.8176 34.7075 15.7345 35.1349C15.6276 35.7168 15.6395 36.3342 15.592 36.9635C12.9678 36.9635 10.2487 36.9635 7.45833 36.9635C7.45833 36.7498 7.45833 36.5598 7.45833 36.3698C7.45833 33.3182 7.45833 30.2785 7.45833 27.2269C7.45833 27.0607 7.47023 26.9063 7.44648 26.7401C7.38711 26.3007 7.13773 26.0158 6.67464 25.992C6.22344 25.9564 5.90286 26.1582 5.80787 26.6094C5.76038 26.8113 5.76037 27.0369 5.76037 27.2506C5.76037 30.2666 5.76037 33.2707 5.76037 36.2867C5.77224 36.5004 5.77225 36.7142 5.77225 36.9873Z"
            fill="#2ECC82"
          />
          <path
            d="M34.2027 43.126C33.4546 43.0192 32.8253 43.2448 32.3147 43.8028C31.6854 44.5034 30.9611 44.6815 30.1061 44.2066C29.4649 43.8622 28.8 43.8385 28.1469 44.1947C27.2801 44.6696 26.544 44.5272 25.8909 43.8028C25.3803 43.2329 24.7391 43.031 24.003 43.1379C23.0887 43.2685 22.4831 42.9004 22.1506 42.0574C21.8775 41.3568 21.3669 40.9175 20.6189 40.7631C19.6808 40.5731 19.2177 40.0151 19.1821 39.0414C19.1584 38.3646 18.8853 37.7828 18.2797 37.4265C17.3773 36.8803 17.1042 36.1442 17.4604 35.1467C17.686 34.5174 17.5554 33.9 17.1279 33.3775C16.4749 32.5701 16.4986 31.7983 17.1398 31.0027C17.5792 30.4565 17.6504 29.8272 17.4367 29.1742C17.1398 28.2599 17.3535 27.5593 18.1847 27.0606C18.8734 26.645 19.1703 26.0038 19.2059 25.2201C19.2415 24.4127 19.6333 23.8665 20.4408 23.6884C21.2957 23.5103 21.8775 23.0235 22.21 22.216C22.5306 21.4205 23.1599 21.1236 23.9792 21.2424C24.7629 21.3492 25.4278 21.1355 25.9621 20.5418C26.5677 19.8531 27.2801 19.7463 28.0876 20.1737C28.7762 20.5418 29.4531 20.5418 30.1418 20.1737C30.9729 19.7225 31.6854 19.8769 32.3028 20.5774C32.8015 21.1474 33.4427 21.3492 34.1908 21.2424C35.0576 21.1236 35.6987 21.4324 36.0312 22.2754C36.3399 23.0591 36.9099 23.5103 37.7292 23.6884C38.5485 23.8665 38.9878 24.3771 39.0116 25.232C39.0353 26.0276 39.3797 26.6688 40.0802 27.1081C40.8639 27.5831 41.0777 28.2717 40.7927 29.1385C40.5552 29.851 40.6502 30.5278 41.1251 31.1096C41.7307 31.8695 41.707 32.6057 41.1133 33.3538C40.662 33.9356 40.5552 34.5887 40.7808 35.2774C41.0658 36.1679 40.8521 36.8566 40.0328 37.3434C39.2966 37.7828 39.0235 38.4714 38.976 39.2789C38.9285 40.0388 38.5723 40.5256 37.8242 40.6919C36.9099 40.8937 36.2925 41.4043 35.9481 42.2711C35.6394 43.0548 34.9982 43.2566 34.2027 43.126ZM21.3075 32.1545C21.2957 36.4648 24.7629 39.9794 29.0494 39.9913C33.3715 40.0032 36.898 36.5241 36.9218 32.202C36.9455 27.9155 33.4546 24.389 29.1562 24.3771C24.7985 24.3771 21.3313 27.8205 21.3075 32.1545Z"
            fill="#2ECC82"
          />
          <path
            d="M14.5982 0C17.6379 0 19.8702 1.38925 20.6539 3.93027C20.9745 4.97518 21.1051 6.11508 21.0932 7.20748C21.0694 9.30917 20.452 11.2684 19.134 12.9426C17.8872 14.5337 16.2961 15.4955 14.1944 15.3649C12.7814 15.2818 11.5822 14.6762 10.656 13.655C8.04373 10.7815 7.39067 7.43308 8.54244 3.77591C9.26675 1.48424 11.4041 0.0831175 13.8976 0C14.1351 0 14.3607 0 14.5982 0Z"
            fill="#2ECC82"
          />
          <path
            d="M26.3883 46.2252C25.7233 47.6501 25.0465 49.1106 24.3578 50.571C24.0847 51.141 23.6098 51.141 23.2654 50.5829C22.8023 49.7992 22.3274 49.0156 21.8881 48.22C21.7337 47.935 21.5793 47.8638 21.2587 47.935C20.38 48.1131 19.5014 48.2675 18.6108 48.3862C18.3734 48.4219 18.0172 48.3506 17.9103 48.1963C17.7915 48.0419 17.839 47.6738 17.934 47.4601C18.6346 45.8927 19.3708 44.3491 20.0951 42.7936C20.1426 42.6868 20.2138 42.5918 20.3325 42.4018C20.475 42.6393 20.6057 42.7936 20.6888 42.9717C21.33 44.3016 22.363 44.9903 23.871 44.8716C24.3103 44.8359 24.6309 44.9547 24.9753 45.2634C25.379 45.6077 25.8658 45.869 26.3883 46.2252Z"
            fill="#2ECC82"
          />
          <path
            d="M32.3945 45.9521C32.7982 45.6078 33.1545 45.2872 33.5463 45.0022C33.6888 44.8953 33.9144 44.8478 34.0925 44.8597C35.7668 45.0141 36.9066 44.3254 37.6309 42.8055C37.7616 42.5324 38.1772 42.3899 38.5334 42.1287C38.8896 42.9361 39.1864 43.6248 39.4833 44.3016C39.7564 44.9428 40.0532 45.5721 40.3026 46.2252C40.3976 46.4627 40.4688 46.8664 40.3382 46.997C40.172 47.1632 39.792 47.2107 39.5308 47.1751C38.7233 47.0445 37.9159 46.8545 37.1204 46.6764C36.7523 46.5933 36.5148 46.6408 36.3011 47.0208C35.8855 47.7688 35.4224 48.4931 34.9356 49.2056C34.805 49.4074 34.52 49.633 34.33 49.6211C34.1281 49.6093 33.8907 49.3362 33.7838 49.1224C33.2851 48.0657 32.8457 46.997 32.3945 45.9521Z"
            fill="#2ECC82"
          />
          <path
            d="M29.0957 26.087C32.4442 26.0752 35.1989 28.8062 35.2108 32.1309C35.2227 35.5149 32.5035 38.2578 29.1432 38.2697C25.7591 38.2816 23.0163 35.5743 22.9925 32.2021C22.9569 28.8774 25.7235 26.0989 29.0957 26.087Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      title: "Specialized Experts",
      info: "We’ve helped launch hundreds of products and our team has been doing this for nearly 15 years. We bring experts to the table and our goal is to make you as educated as possible before making important decisions.",
    },
    {
      image: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.04753 47.9868C0.250681 47.6349 -0.0287428 47.014 0.00230313 46.1551C0.0436978 44.8201 -0.0494275 43.4748 0.468006 42.1915C1.01648 40.8358 1.86505 39.7389 3.09654 38.8903C4.69024 40.5254 6.61509 41.4154 8.8918 41.4154C11.1685 41.4257 13.1037 40.5564 14.7905 38.8282C15.3183 39.356 15.8875 39.8424 16.3428 40.4115C17.326 41.643 17.8123 43.0712 17.8123 44.6545C17.8123 45.1512 17.7813 45.6583 17.8227 46.1551C17.8951 47.014 17.595 47.6349 16.7878 47.9868C11.5411 47.9868 6.2943 47.9868 1.04753 47.9868Z"
            fill="#2ECC82"
          />
          <path
            d="M31.2234 47.9867C30.4162 47.6348 30.1471 47.0139 30.1782 46.1446C30.2196 44.8097 30.1264 43.4643 30.6542 42.1811C31.2027 40.8254 32.0513 39.7285 33.2517 38.9006C36.5943 42.326 41.779 42.1604 44.9354 38.8902C46.4152 39.9251 47.3673 41.3015 47.8123 43.0504C47.8744 43.2884 47.9365 43.5264 47.9986 43.7541C47.9986 44.82 47.9986 45.8756 47.9986 46.9415C47.7812 47.4175 47.4397 47.759 46.9637 47.9764C41.7169 47.9867 36.4702 47.9867 31.2234 47.9867Z"
            fill="#2ECC82"
          />
          <path
            d="M46.9648 47.9867C47.4409 47.7798 47.7824 47.4279 47.9997 46.9519C47.9997 47.2934 47.9997 47.6349 47.9997 47.9867C47.6479 47.9867 47.3063 47.9867 46.9648 47.9867Z"
            fill="#2ECC82"
          />
          <path
            d="M34.2847 31.3875C34.6056 30.9321 34.8746 30.4561 35.2265 30.0525C36.727 28.3243 39.1279 27.8172 41.1873 28.7486C43.2363 29.6799 44.4782 31.8428 44.2195 34.0264C43.9401 36.3238 42.2325 38.1244 39.9662 38.528C37.3169 39.0041 34.7815 37.369 34.0881 34.7094C34.0053 34.3989 33.8811 34.2437 33.5707 34.1506C31.6044 33.5503 29.6382 32.9398 27.6823 32.3188C27.4546 32.2464 27.3304 32.2878 27.1649 32.4637C25.3332 34.43 22.6321 34.43 20.8211 32.4741C20.6349 32.2774 20.49 32.2568 20.2623 32.3292C18.2754 32.9501 16.2781 33.571 14.2911 34.2023C14.1359 34.254 13.9703 34.4714 13.9289 34.6473C13.308 36.9861 11.3004 38.5901 8.96157 38.6005C6.57103 38.6108 4.53235 37.0585 3.92178 34.7715C3.25947 32.2671 4.56339 29.6489 6.95393 28.6761C9.36517 27.7033 12.0972 28.6451 13.3908 30.9011C13.4839 31.0563 13.5667 31.2219 13.6702 31.4289C14.4257 31.2012 15.1604 30.9735 15.9055 30.7355C17.0749 30.3733 18.2547 29.9904 19.4344 29.6385C19.6828 29.5661 19.7656 29.4626 19.8069 29.2039C20.0346 27.6516 20.8522 26.5339 22.2699 25.8406C22.4148 25.7681 22.5804 25.5715 22.5804 25.4266C22.6011 23.5639 22.5907 21.7115 22.5907 19.8487C22.5907 19.8073 22.5701 19.7659 22.5494 19.6728C22.3838 19.6728 22.2182 19.6728 22.0526 19.6728C20.2416 19.6728 18.4306 19.6728 16.6196 19.6728C15.6675 19.6728 15.088 19.1036 15.0983 18.1619C15.1087 16.8993 14.9845 15.6368 15.3674 14.395C15.8641 12.8013 16.7852 11.5387 18.1512 10.5867C21.4938 14.0121 26.6785 13.8465 29.8348 10.5867C31.294 11.5905 32.3288 12.9358 32.66 14.664C32.898 15.9059 32.867 17.2098 32.867 18.4827C32.867 19.1864 32.1943 19.6728 31.4285 19.6728C29.5968 19.6728 27.7754 19.6728 25.9437 19.6728C25.7782 19.6728 25.6126 19.6728 25.3849 19.6728C25.3849 20.3351 25.3849 20.956 25.3849 21.5769C25.3849 22.8395 25.3952 24.102 25.3745 25.3749C25.3745 25.6336 25.4573 25.7474 25.685 25.8613C27.1338 26.5236 27.9307 27.6826 28.1894 29.2453C28.2101 29.3902 28.355 29.5764 28.4895 29.6178C30.3729 30.2181 32.2564 30.8079 34.1502 31.3875C34.2123 31.3978 34.2641 31.3875 34.2847 31.3875Z"
            fill="#2ECC82"
          />
          <path
            d="M24.0337 3.49816e-05C26.8796 0.0103836 29.1667 2.30779 29.1563 5.16402C29.1563 8.0306 26.8486 10.3176 23.9613 10.3073C21.1258 10.297 18.8491 7.97885 18.8594 5.12262C18.8594 2.27674 21.1672 -0.0103137 24.0337 3.49816e-05Z"
            fill="#2ECC82"
          />
        </svg>
      ),
      title: "Stakeholders Involvement",
      info: "All concerned stakeholders of the product are involved in the process from day one. This way businesses get to build a product that does end up getting used.",
    },
  ];
  return (
    <div className="home__technologies" style={{ marginBottom: "7em" }}>
      <img
        loading="lazy"
        src={technologiesSvg}
        alt="technologiesSvg"
        className="home__technologies__img"
      />
      <Fade bottom distance="30%">
        <div className="home__technologies__heading heading">
          Why we Recommend It
        </div>
      </Fade>
      <Fade bottom distance="30%">
        <div className="home__technologies__info">
          It's the first step to building a successful and awesome tech product.
          It builds tremendous confidence when moving on to the development
          phase.
        </div>
      </Fade>
      <div className="home__technologies__content">
        {data.map((item, i) => (
          <HomeTechnologiesCard
            key={i}
            smaller
            image={item.image}
            title={item.title}
            info={item.info}
          />
        ))}
      </div>
    </div>
  );
}
