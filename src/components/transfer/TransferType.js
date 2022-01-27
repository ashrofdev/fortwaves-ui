import React from "react";

export const TransferType = ({ title, desc }) => {
  return (
    <div>
      <div className="transfer-card">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
