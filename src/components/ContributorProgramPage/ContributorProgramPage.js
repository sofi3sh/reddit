import React from "react";
import "./../../assets/styles/ContributorProgram/style.css";
import StarIcon from "../../assets/images/icons/star_contributorprogram.svg";

const ContributorProgramPage = () => {
  return (
    <div className="contributor-program-page">
      <div className="header">
        <img
          src={StarIcon}
          alt="Star Icon"
          className="star-icon"
        />
        <h1 className="title">Earn with the Reddit Contributor Program</h1>
      </div>
      <p className="description">
        Fake internet points are finally worth something! Now redditors can earn real money for their contributions to the Reddit community, based on the karma and gold they've received.
      </p>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <ul>
          <li>✅ Qualifying redditors complete the verification process to join the program.</li>
          <li>🏆 Contributors receive a payout once minimum gold and karma thresholds are met.</li>
          <li>🔑 Redditors give awards to posts and comments they think are really worth something and contributors earn gold.</li>
          <li>💵 Top contributors make top dollar. The more karma and gold contributors earn, the more money they can receive.</li>
        </ul>
      </section>

      <section className="requirements">
        <h2>Requirements</h2>
        <ul>
          <li>Earn 1,000 gold and 100 new karma after earning your first gold.</li>
          <li>Successfully complete the verification process.</li>
          <li>Account age must be 30+ days old.</li>
          <li>Live in a supported country and be 18+ years old (or the minimum age in your country).</li>
          <li>Only Safe for Work contributions qualify for payout.</li>
        </ul>
      </section>

      <p className="note">Still have questions? Check out our FAQs.</p>
      <button className="cta-button">Get Verified to Start Earning</button>
    </div>
  );
};

export default ContributorProgramPage;