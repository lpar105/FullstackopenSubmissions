import React from "react";

export const Notification = ({ message }) => {
  if (message === null) return null;
  else if (message.indexOf("Error: ") == 0) {
    return <div className="errorNotification">{message}</div>;
  }

  return <div className="successNotification">{message}</div>;
};
