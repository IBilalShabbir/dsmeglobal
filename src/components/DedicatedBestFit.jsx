import React from "react";
import { domianKnowledge, enterprise, techonologies } from "../assets";
import { DedicatedBestFitContent } from "./DedicatedBestFitContent";

export function DedicatedBestFit() {
  return (
    <div className="dedicated__best__fit">
      <div className="dedicated__best__fit__heading heading">The Best Fit</div>
      <div className="dedicated__best__fit__info">
        You can trust us with our deep technological & domain expertise to come
        up with the best solution for your product.
      </div>
      <DedicatedBestFitContent
        image={enterprise}
        heading="Enterprise"
        list={[
          "Web",
          "IoT",
          "Web Portals",
          "UI/UX",
          "Mobile",
          "Enterprise Mobility",
          "Process Automation",
          "Big Data & Analytics",
          "DevOps",
          "Microsoft SharePoint",
          "Salesforce",
          "Blockchain",
          "Software Architecture",
        ]}
      />
      <DedicatedBestFitContent
        right
        image={domianKnowledge}
        heading="Domain Knowledge"
        list={[
          "Healthcare",
          "Insurance",
          "Real Estate",
          "Fintech",
          "EdTech",
          "Mobility & Logistics",
          "Media & Entertainment",
          "Field Force",
          "Automation",
          "Retail",
        ]}
      />
      <DedicatedBestFitContent
        image={techonologies}
        heading="Technologies We Use"
        list={[
          "JavaScript",
          "Java",
          "DotNet",
          "PHP",
          "Ruby, Rails",
          "Azure",
          "Google Cloud",
          "React",
          "Angular",
          "AWS",
          "VueJS",
          ".NET Core",
          "Node.js",
          "MySQL",
          "mongoDB",
          "Android",
          "iOS",
          "WPF",
          "GraphQL",
          "IBM Watson",
          "React Native",
          "Xamarin",
          "Objective-C",
        ]}
      />
    </div>
  );
}
