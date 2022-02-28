import React, { Fragment, useState, useEffect } from "react";
import Card from "./Card";
// import { teamData } from "./Data";
import photo from "../../assets/images/card_photos/saczyyy.jpg";
import Title from "../../Views/Title";
import axios from "axios";

const Team = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/team`
        );
        setTeamData(res.data);
        console.log(res.data);
      } catch (err) {}
    };

    fetchTeamData();
  }, []);

  return (
    <section className="team__container">
      <Title>Meet the TEAM</Title>
      <div className="team__cards__container">
        {teamData.map((cardData) => (
          <Card
            name={cardData.name}
            nick={cardData.nick}
            role={cardData.role}
            image={photo}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
