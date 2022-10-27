import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/intro.css';

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-container">
        <h3>Welcome</h3>
        <p>This app helps you build healthy habits in your life and get rid of unhealthy ones</p>
        <p>
          You may create one or multiple periods called Spell. Each spell is forty days, during
          which you track your activities each day
        </p>
        <p>The goal is to make your daily routine better and more healthier</p>
        <Link to="/home" className="home-link">
          My spells
        </Link>
      </div>
    </div>
  );
}
