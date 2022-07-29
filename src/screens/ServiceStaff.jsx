import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { BenifitsForStaff } from "../components/BenifitsForStaff";
import { TechonologiesForStaff } from "../components/TechonologiesForStaff";
import { TopTalentForStaff } from "../components/TopTalentForStaff";
import { ScaleUpTeamForStaff } from "../components/ScaleUpTeamForStaff";
import { AugmentationProcessForStaff } from "../components/AugmentationProcessForStaff";
import { CorporateModelForStaff } from "../components/CorporateModelForStaff";
import staff from "../assets/staff.svg";
import { ServiceStaffModernSolution } from "../components/ServiceStaffModernSolution";

export default function ServiceStaff() {
  return (
    <>
      <div className="container">
        <HomeJumbotron
          taglinesLine="Staff Automation"
          info="Get The Best IT Talent Under One Roof.
          
          Leverage our IT staff augmentation services to access certified IT professionals, including skilled software developers, business analysts, Scrum Masters, and QA specialists. We can help you scale up on demand with the right pool of talented individuals without stretching your budget.
"
          img={staff}
          talk={true}
        />
      </div>
      <TopTalentForStaff />
      <ScaleUpTeamForStaff />
      <AugmentationProcessForStaff />
      <CorporateModelForStaff />
      <TechonologiesForStaff />
      <BenifitsForStaff />
      <ServiceStaffModernSolution />
    </>
  );
}
