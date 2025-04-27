import React from "react";

function TaskCard({ title, description }) {
  return (
    <div style={{ background: "white", padding: "10px", margin: "10px 0", borderRadius: "5px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default TaskCard;
