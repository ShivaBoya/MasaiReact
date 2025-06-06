import React from "react";

export default function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>Status: {task.completed ? "✅ Completed" : "❌ Pending"}</p>
    </div>
  );
}