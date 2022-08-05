import React from "react";

export function FooterTopics({ data }) {
  return (
    <div className="footer__container__content__col">
      <div className="footer__container__content__col__heading">
        Technologies
      </div>
      {data
        ?.filter((item, i) => i < 7)
        ?.map((item) => (
          <div
            key={JSON.stringify(item)}
            className="footer__container__content__col__link"
          >
            {item.name}
          </div>
        ))}
    </div>
  );
}
