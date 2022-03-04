import { React, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });

    // setInterval(() => {
    //   fetchTeamData();
    // }, 360000);
  }, []);

  return (
    <div className="team__cards__item" data-aos="fade-in">
      <img alt="Saczyyy" src={props.image}></img>
      <h4 className="team__cards__title">
        {props.name}
        <span>~{props.nick}</span>
      </h4>
      <h5 className="team__cards__role">{props.role}</h5>
      <div className="team__cards__links">
        <div className="team__cards__links__media">
          <AiOutlineMail />
        </div>
        <div className="team__cards__links__media">
          <FaLinkedinIn />
        </div>
        <div className="team__cards__links__media">
          <AiOutlineTwitter />
        </div>
        <div className="team__cards__links__media">
          <AiFillYoutube />
        </div>
      </div>
    </div>
  );
};

export default Card;
