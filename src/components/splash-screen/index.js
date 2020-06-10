import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const SplashScreen = ({ onStart }) => (
  <div className="SplashScreen">
    <div className="SplashScreen__content">
      <h1 className="SplashScreen__header">SimpList</h1>
      <p className="SplashScreen__subheader">
        Keep all your tasks in a safe place and regain clarity to your head
      </p>

      <div
        className="SplashScreen__button pure-button pure-button-primary"
        onClick={() => onStart()}
      >
        Get Started
      </div>
    </div>
  </div>
);

SplashScreen.propTypes = {
  onStart: PropTypes.func.isRequired
};

export default SplashScreen;