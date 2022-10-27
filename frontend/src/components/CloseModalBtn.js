import React from 'react';

export default function CloseModalBtn({ closeFunc }) {
  return (
    <div onClick={() => closeFunc()} className="close-btn">
      X
    </div>
  );
}
