import React from "react";

function TaskBoard() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
      <div style={{ width: "30%", background: "#f0f0f0", padding: "10px" }}>
        <h2>To Do</h2>
      </div>
      <div style={{ width: "30%", background: "#f0f0f0", padding: "10px" }}>
        <h2>In Progress</h2>
      </div>
      <div style={{ width: "30%", background: "#f0f0f0", padding: "10px" }}>
        <h2>Done</h2>
      </div>
    </div>
  );
}

export default TaskBoard;
