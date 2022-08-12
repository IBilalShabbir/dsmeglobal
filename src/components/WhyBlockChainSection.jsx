import React from "react";
import { ExperitseCard } from "../components/ExperitseCard";
import { whyBlockChainData } from "../constants/data";

export function WhyBlockChainSection() {
  return (
    <div className="container__web__dev__experties">
      <div
        className="container__web__dev__experties__header"
        style={{ marginTop: "5em", marginBottom: "2em" }}
      >
        <div className="container__web__dev__experties__header__heading">
          Why <span>Blockchain?</span>
        </div>
      </div>
      <div className="container__web__dev__experties__content">
        {whyBlockChainData.map((data) => (
          <ExperitseCard
            svg={data.image}
            label={data.title}
            info={data.content}
            subTitle={data.subTitle}
          />
        ))}
      </div>
    </div>
  );
}
