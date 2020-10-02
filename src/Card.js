import React from "react";

function Card() {
  return (
    <div className="ui-card">
      {/* Logo */}
      <img
        className="logo"
        alt="green_logo"
        src="https://green.cdn.energy/branding/logo-r.svg"
      />
      <div className="container">
        {/* Main title */}
        <h1 className="ui-title-one">Example login screen</h1>
        {/* Subtitle */}
        <h2 className="ui-title-sub">Getting started with Green.</h2>
        {/* Email address entry */}
        <div className="ui-sign-in-container">
          <form className="sign-in-form" method="post">
            <p className="ui-email-placeholder">Email address</p>
            <input className="ui-input-email" type="email" maxlength="254" />
          </form>
        </div>
        {/* Checkbox and label */}
        <label className="ui-checkbox-container">
          <input type="checkbox" className="ui-checkbox" />
          <span className="ui-text">Remember this device</span>
        </label>
        {/* Sign in button */}
        <button className="ui-sign-in-button">Sign In</button>
      </div>
    </div>
  );
}

export default Card;
