import React, { useState, useEffect } from "react";
import Card from "./Card";
// import { teamData } from "./Data";
import Title from "../../../Elements/Title/Title";
import axios from "axios";
import { teamData } from "./Data";
import image from "./card_photos/saczyyy.jpg";

const Team = () => {
  // const [teamData, setTeamData] = useState([]);

  // useEffect(() => {
  //   const fetchTeamData = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/api/blog/team`
  //       );
  //       setTeamData(res.data);
  //       console.log(res.data);
  //     } catch (err) {}
  //   };

  //   fetchTeamData();

  // setInterval(() => {
  //   fetchTeamData();
  // }, 360000);
  // }, []);

  return (
    <section className="team__container" id="team__view">
      <Title>NASZ ZESPÓŁ</Title>
      <div className="team__cards__container">
        {teamData.map((cardData) => (
          <Card
            name={cardData.name}
            nick={cardData.nick}
            role={cardData.role}
            image={image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
