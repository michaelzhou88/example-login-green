import React from "react";

function Card() {
  return (
    <div className="ui-card">
      <div className="sign-in-container">
        <form method="post">
          {/* Logo */}
          <img
            className="logo"
            alt="green_logo"
            src="https://green.cdn.energy/branding/logo-r.svg"
          />
          {/* Main title */}
          <h1 className="ui-title-one">
            <b>Example login screen</b>
          </h1>
          {/* Subtitle */}
          <h2 className="ui-title-sub">Getting started with Green.</h2>
          {/* Email address entry */}
          <p className="ui-email-placeholder">Email address</p>
          <input className="ui-input-email" type="email" maxlength="254" />
          <br />
          {/* Checkbox and label */}
          <label className="ui-checkbox-container">
            <input type="checkbox" className="ui-checkbox" />
            <span className="ui-text">Remember this device</span>
          </label>
          {/* Sign in button */}
          <button className="ui-sign-in-button">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Card;
