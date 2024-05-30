import React from "react";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import RvHookupOutlinedIcon from "@mui/icons-material/RvHookupOutlined";

const QuickActions = () => {
  return (
    <div>
      <h2>Quick Actions</h2>
      <div className="actions-container">
        <div>
          <LabelImportantOutlinedIcon />
          <p>Create Indents</p>
        </div>
        <div>
          <LocalShippingOutlinedIcon />
          <p>Add Vehicle</p>
        </div>
        <div>
          <RvHookupOutlinedIcon />
          <p>Add Trailer</p>
        </div>
        <div>
          <PermIdentityOutlinedIcon />
          <p>Add Driver</p>
        </div>
        <div>
          <LocalShippingOutlinedIcon />
          <p>Add Indents</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
