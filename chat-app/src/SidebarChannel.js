import React from "react";
import { useDispatch } from "react-redux";
import "./SidebarChannel.css";
import { setChannelInfo } from "./features/appSlice";

function SidebarChannel({ id, channelName }) {
  // console.log(channelName);
  const dispatch = useDispatch();
  console.log({ channelName });
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
    </div>
  );
}

export default SidebarChannel;
