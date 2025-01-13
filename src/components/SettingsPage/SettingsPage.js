import React, { useState } from "react";
import "./../../assets/styles/Settings/style.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Account");

  const tabs = ["Account", "Profile", "Privacy", "Preferences", "Notifications", "Email"];

  return (
    <div className="settings-page">
      <div className="settings-main">
        <h1 className="settings-header">Settings</h1>
        <div className="settings-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`settings-tab ${activeTab === tab ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="settings-content">
          {activeTab === "Account" && (
            <div>
              <section>
                <h2>General</h2>
                <div className="settings-item">
                  <span>Email address</span>
                  <span>user@gmail.com &gt;</span>
                </div>
                <div className="settings-item">
                  <span>Gender</span>
                  <span>Man &gt;</span>
                </div>
                <div className="settings-item">
                  <span>Location customization</span>
                  <span>Use approximate location (based on IP) &gt;</span>
                </div>
              </section>

              <section>
                <h2>Account authorization</h2>
                <div className="settings-item">
                  <span>Google</span>
                  <button className="disconnect-button">Disconnect</button>
                </div>
                <div className="settings-item">
                  <span>Apple</span>
                  <button className="connect-button">Connect</button>
                </div>
                <div className="settings-item">
                  <span>Two-factor authentication</span>
                  <span>
                    Enable &nbsp;
                    <a href="#" className="link">Access your backup codes</a>
                  </span>
                </div>
              </section>

              <section>
                <h2>Subscriptions</h2>
                <div className="settings-item">
                  <span>Get Premium</span>
                  <span>&gt;</span>
                </div>
              </section>

              <section>
                <h2>Advanced</h2>
                <div className="settings-item">
                  <span>Delete account</span>
                  <span>&gt;</span>
                </div>
              </section>
            </div>
          )}
          {activeTab !== "Account" && <div><h2>{activeTab} content...</h2></div>}
        </div>
      </div>
    </div>
  );
};

export default Settings;
