import React from "react";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";

function Notification() {
  return (
    <Badge badgeContent={4} color="primary" className="mx-5">
      <MailIcon color="action" />
    </Badge>
  );
}

export default Notification;
