import React from 'react';

const TxtForm = ({ titulo, txt }) => {
  return (
    <section>
      <span className="fw-bold" style={{ marginRight: '.5rem' }}>
        {titulo}
      </span>
      <p className="text-break">{txt}</p>
    </section>
  );
};

export default TxtForm;
