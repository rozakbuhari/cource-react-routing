import React from "react";
import { Link } from "react-router-dom";
import { workspaces } from './HomePage';
import WorkspaceDetailPage from "./WorkspaceDetailPage";

const WorkspacePage = () => {
  return <div>
      <header>My Workspace</header>
      <ul>
          {workspaces.map((workspace) => <li><Link to={`/workspace/${workspace.id}`}>{workspace.name}</Link></li>)}
      </ul>
      <div>
          <WorkspaceDetailPage />
      </div>
  </div>;
};

export default WorkspacePage;