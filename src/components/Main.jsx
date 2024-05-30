import React from "react";
import "./main.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QuickActions from "./QuickActions";
import PriorityAlerts from "./PriorityAlerts";
import activities from "../data/activities";
import ProChart from "./ProChart";

const Main = () => {
  return (
    <div className="container main">
      <div className="navbar">
        <div>
          <h1>Dashboard</h1>
        </div>
        <div className="navbar-right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <MoreVertIcon />
            </li>
          </ul>
        </div>
      </div>
      <div className="charts">
        {activities.charts && activities.charts.map((item, index) => (
          <ProChart key={index} props = {item} />
        ))}
      </div>
      <QuickActions />
      <PriorityAlerts />
    </div>
  );
};

export default Main;
