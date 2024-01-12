import React from "react";
import "../styles/Contacts.css";
import PhoneIcon from "../assets/images/Telephone-icon.png";
import TelegramIcon from "../assets/images/Telegram-icon.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <img className="icon" src={PhoneIcon} alt="Telephone" />
      <a href="tel: +78352201209">+7 (835) 220-12-09</a>
      <img className="icon" src={TelegramIcon} alt="Telegram" />
      <a href="https://t.me/chzsa21/" target="_blank">
        <div>https://t.me/chzsa21/</div>
      </a>
    </div>
  );
};

export default Contacts;
