import React from "react";
import Title from "../../../Elements/Title/Title";
import { IoIosSchool } from "react-icons/io";
import { MdLockOpen } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlineEmojiPeople } from "react-icons/md";
import EmptyPage from "../../../Elements/EmptyPage/EmptyPage";
import { useTranslation } from 'react-i18next';

const Mission = () => {

const { t } = useTranslation();

  return (
<section id="mission__view">
    <EmptyPage>
    <Title>{t("mission_title")}</Title>
    <div className="mission__text__box">
      <p>
        <strong>{t("mission_bold_text")}</strong>{t("mission_text")}
      </p>
      <div className="mission__button">
      {t("mission_discord_button_text_first")}{" "}
        <a rel="noreferrer" href="https://discord.com/invite/dkRDuzF43W">
          Discord!
        </a>{" "}
        {t("mission_discord_button_text_second")}
      </div>
      <ul className="mission__list">
        <span className="mission__list__title">{t("mission_values")}:</span>
        <li>
          <strong>
            <span>
              <IoIosSchool />
            </span>
            {t("mission_education_title")}
          </strong>{" "}
          {t("mission_education_text")}
        </li>
        <li>
          <strong>
            <span>
              <MdLockOpen />
            </span>
            {t("mission_transparent_title")}
          </strong>{" "}
          {t("mission_transparent_text")}
        </li>
        <li>
          <strong>
            <span>
              <MdOutlineEmojiPeople />
            </span>
            {t("mission_responsibility_title")}
          </strong>{" "}
          {t("mission_responsibility_text")}
        </li>
        <li>
          <strong>
            <span>
              <FaPeopleCarry />
            </span>
            {t("mission_integration_title")}
          </strong>{" "}
          {t("mission_integration_text")}
        </li>
      </ul>
    </div>
    </EmptyPage>
  </section>
  )
  
};

export default Mission;
