import React from 'react';
import { useNavigate } from 'react-router';

export default function BackButton() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <span className="back-btn" onClick={goBack}>
        &larr; Back
      </span>
    </div>
  );
}
