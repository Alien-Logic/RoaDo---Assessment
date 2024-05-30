import React from "react";
import activities from "../data/activities";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

const PriorityAlerts = () => {
  return (
    <div>
      <div  className="head">
        <h2>
          {activities.priorityAlerts.title} (
          {activities.priorityAlerts.alerts.length})
        </h2>
        <button>View All</button>
      </div>
      <div className="alerts">
        {activities.priorityAlerts.alerts &&
          activities.priorityAlerts.alerts.slice(0, 2).map((item, index) => (
            <div className="alert" key={index}>
                <div className="header">
                    <div className="profile">
                    <div className="icon"><PermIdentityOutlinedIcon /></div>
                    <div className="title-details">
                        <p className="bold">{item.title}</p>
                        <p className="text-xs"><span>Load No: {item.loadNo}</span>, <span>Bill To: {item.bill}</span></p>
                    </div>
                    </div>
                    <div><span className="semi-bold">{item.date}</span></div>
                </div>
                <div>
                    <p>{item.desc}</p>
                </div>
                <div className="buttons">
                    <button className="normal-btn">Ignore</button>
                    <button className="blue-btn">Resolve</button>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PriorityAlerts;
