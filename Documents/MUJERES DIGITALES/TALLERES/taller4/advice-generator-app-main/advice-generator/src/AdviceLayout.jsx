import React from "react";

const AdviceLayout = ({ children }) => {
  return (
    <div className="advice-layout">
      <div className="advice-container">
        {children}
      </div>
    </div>
  );
};

export default AdviceLayout;

