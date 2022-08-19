import React from "react";
import { AboutTeamCard } from "./AboutTeamCard";

export function AboutTeam() {
  const data = [
    {
      image: "Shahid_Aziz_Advisor_kkhqzt",
      name: "Shahid Aziz",
      designation: "Chairman",
    },
    {
      image: "Director_Legal_Affairs_f01roo",
      name: "Muhammad Soman",
      designation: "Director Legal Affairs",
    },
    {
      image: "Azeem_Hammad_Team_Lead_Frontend_Developer_yztlx3",
      name: "Azeem Hammad",
      designation: "Technical Lead",
    },
    {
      image: "Kamran_Ameen_Backend_Developer_lmuq61",
      name: "Kamran Ameen",
      designation: "Senior Software Engineer",
    },
    {
      image: "Gulraiz_Malik_Team_Lead_Frontend_Developer_hlhvzl",
      name: "Gulraiz Malik",
      designation: "Senior Software Engineer",
    },
    {
      image: "Salman_Nisar___Mobile_Architect_qduily",
      name: "Salman Nisar",
      designation: "Mobile Architect",
    },
    {
      image: "WhatsApp_Image_2022-07-22_at_2.15.31_PM_j9tlpg",
      name: "Muhammad Sharyar",
      designation: "Software Architect",
    },
    {
      image: "Abdullah_Backend_Developer_szxgvm",
      name: "Abdullah",
      designation: "Snr. Backend Developer",
    },
    {
      image: "Ahsan_Saeed__Frontend_Developer_gykomy",
      name: "Ahsan Saeed",
      designation: "Snr. Frontend Developer",
    },
    {
      image: "Zunaira_Najam_Frontend_Developer_uhiual",
      name: "Zunaira Najam",
      designation: "Frontend Developer",
    },
    {
      image: "Ahmed__React_Developer_tq0bmz",
      name: "Ahmed",
      designation: "React Developer",
    },
    {
      image: "Daniyal_Pirzada_Frontend_Developers_w9d6cg",
      name: "Daniyal Pirzada ",
      designation: "Frontend Developers",
    },
    {
      image: "Hamza_Arshad_Frontend_Developer_fjqf8f",
      name: "Hamza Arshad",
      designation: "Frontend Developer",
    },
    {
      image: "Aimen_Aamer_Frontend_Developer_kncxlk",
      name: "Aimen Aamer",
      designation: "Frontend Developer",
    },
    {
      image: "Qaiser_Riaz_Frontend_Developer_hi9zb0",
      name: "Qaiser Riaz",
      designation: "Frontend Developer",
    },
    {
      image: "Musharraf_Hassan_Backend_Developer_uelg3t",
      name: "Musharraf Hassan",
      designation: "Backend Developer",
    },
    {
      image: "Moazam_Saleem_Backend_Developer_i6yyfm",
      name: "Moazam Saleem",
      designation: "Backend Developer",
    },
    {
      image: "Qasim_Frontend_Developer_eybjrf",
      name: "Qasim",
      designation: "Backend Developer",
    },
    {
      image: "Zunaira_Amjad__Business_Developer_cbog1k",
      name: "Zunaira Amjad",
      designation: "Lead Business Developer",
    },
    {
      image: "Dr.Aimon_Malik_j9vrwo",
      name: "Dr.Aimon Malik",
      designation: "Health-Tech Consultant",
    },
    {
      image: "Dr.Nimra_Qureshi_ltctgl",
      name: "Dr.Nimra Qureshi",
      designation: "Health-Tech Consultant",
    },
    {
      image: "Aniqa_Mukhtar_Graphic_Designer_vuxi60",
      name: "Aniqa Mukhtar",
      designation: "Graphic Designer",
    },
    {
      image: "Danish_Azhar_picture_x4szi6",
      name: "Danish Azhar",
      designation: "Outreach Strategist",
    },

    {
      image: "Hira_Najm__Frontend_Developer_x2rfoa",
      name: "Hira Najm",
      designation: "Frontend Developer",
    },
    {
      image: "Joweriya_Shahid_Content_Writer_ft8mep",
      name: "Joweriya Shahid",
      designation: "Content Writer",
    },
    {
      image: "Muhammad_Mobeen_t9kkdl",
      name: "Muhammad Mobeen",
      designation: "Marketing Manager",
    },
    {
      image: "Muhammad_Mobeen_t9kkdl",
      name: "Muhammad Mobeen",
      designation: "Marketing",
    },
    {
      image: "Naimah_Jones__Business_Development_Lead_US_Office_njgftp",
      name: "Naimah Jones",
      designation: "Business Development Lead US Office",
    },
    {
      image: "Ramsha_Arshad_Talent_Acquisition_Recruiter_pyagxu",
      name: "Ramsha Arshad",
      designation: "Talent Source",
    },
    {
      image: "Rijaab_Manzoor_Business_Developer_w2kikd",
      name: "Rijaab Manzoor",
      designation: "Business Developer",
    },
    {
      image: "Sapna_Shams_QA_wm8tyc",
      name: "Sapna Shams",
      designation: "QA",
    },
    {
      image: "Saram_Nadeem__Business_Developer_rvtxpd",
      name: "Saram Nadeem",
      designation: "Business Developer",
    },
    {
      image: "Usman_Ijaz_Recruitment_Consultant_hmlf1g",
      name: "Usman Ijaz",
      designation: "Recruitment Consultant",
    },
    {
      image: "Zoha_Waqas_Aidapro_jvv1yl",
      name: "Zoha Waqas",
      designation: "Marketing Strategist",
    },
  ];
  return (
    <div className="about__team">
      <div className="about__team__heading heading">
        Teamwork, Makes the dream work
      </div>
      <div className="about__team__content">
        {data?.map((item) => (
          <AboutTeamCard
            image={item.image}
            name={item.name}
            designation={item.designation}
          />
        ))}
      </div>
    </div>
  );
}
