import React from 'react';

const Text = ({ titulo, txt }) => {
  return (
    <>
      <span className="fw-bold" style={{ marginRight: '.5rem' }}>
        {titulo}
      </span>
      <span className="text-break">{txt}</span>
    </>
  );
};

export default Text;
