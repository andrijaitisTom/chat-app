import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchIcon from "@material-ui/icons/Search";
import Send from "@material-ui/icons/Send";
import Help from "@material-ui/icons/Help";
import "./ChatHeader.css";

function ChatHeader({ channelName }) {
  // console.log("name " + channelName);
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className="chatHeader__search">
          <input placeholder="Search"></input>
          <SearchIcon />
        </div>
        <Send />
        <Help />
      </div>
    </div>
  );
}

export default ChatHeader;
