import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { projectId } = useParams();

  return (
    <div className="project-details">
      <h2>Project ID: {projectId}</h2>
      {/* Future: List and manage tasks for this project */}
    </div>
  );
}