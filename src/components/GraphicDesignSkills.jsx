import React from "react";
import { GraphicDesignSkillsEntry } from "./GraphicDesignSkillsEntry";

export function GraphicDesignSkills({}) {
  return (
    <div className="graphic__design__skills">
      <div className="graphic__design__skills__heading heading">Skills</div>
      <div className="graphic__design__skills__content">
        <GraphicDesignSkillsEntry heading="Graphic Designing" completed={90} />
        <GraphicDesignSkillsEntry heading="Product Branding" completed={97} />
        <GraphicDesignSkillsEntry heading="Photography" completed={90} />
        <GraphicDesignSkillsEntry heading="Market research" completed={90} />
        <GraphicDesignSkillsEntry
          heading="Strategic consulting"
          completed={90}
        />
        <GraphicDesignSkillsEntry heading="Web design" completed={90} />
        <GraphicDesignSkillsEntry
          heading="Ecommerence consulting"
          completed={90}
        />
        <GraphicDesignSkillsEntry heading="Web development" completed={90} />
      </div>
    </div>
  );
}
