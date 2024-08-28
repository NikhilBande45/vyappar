import React from "react";
import './Accounts.css'
import Card from "../Card/Card";
import skype from "../../Assets/skype.png";
import phone from "../../Assets/phone.png";
import whatsapp from "../../Assets/whatsapp.png";
import telegram from "../../Assets/telegram.png";
const Accounts = () => {
  return (
    <div className="account-container">
      <div className="account-content">
        <div className="account-top-content">
          <h1 className="account-title">GET AGENCY <span id="account">ACCOUNTS</span></h1>
          <p className="account-info">READY TO SCALE YOUR BUSINESS</p>
        </div>

        <div className="account-bottom-content">
          <Card
            logo={skype}
            title="Chat With Us on Skype and Get Instant Access"
            content="Let’s get you set up with all the services you need."
            info="We’ll share all of the information you need, answer any questions, and guide you through the next steps."
            btn="Chat Now"
          />

          <Card
            logo={phone}
            title="Schedule a Free Call"
            content="Speak with Our Team"
            info="Our team can personally guide you through the setup. Answer any of your questions and help you get started with advertising."
            btn="Schedule a Call"
          />

          <Card
            logo={whatsapp}
            title="Chat With Us on WhatsApp and Get Instant Access"
            content="Let’s get you set up with all the services you need."
            info="We’ll share all of the information you need, answer any questions, and guide you through the next steps."
            btn="Chat Now"
          />

          <Card
            logo={telegram}
            title="Chat With Us on Telegram and Get Instant Access​"
            content="Let’s get you set up with all the services you need."
            info="We’ll share all of the information you need, answer any questions, and guide you through the next steps."
            btn="Chat Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
