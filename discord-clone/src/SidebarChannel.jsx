import React from "react";
import { useDispatch } from "react-redux";
import "./SidebarChannel.css";
import { setChannelInfo } from "./features/appSlice";
function SidebarChannel({ id, channel }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channel.channelName}
        {/* {props.channels.map((channel) => channel.channel.channelName)} */}
      </h4>
    </div>
  );
}

export default SidebarChannel;
