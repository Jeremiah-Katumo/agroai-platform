import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="d-flex align-items-center gap-2">
      <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded" style={{ width: 32, height: 32 }}>
        <span className="fw-bold">L</span>
      </div>
      <span className="fs-5 fw-bold text-dark">Logo</span>
    </div>
  );
};

export default Logo;
