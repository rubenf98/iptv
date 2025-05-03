import React, { useState } from "react";
import { Link } from "react-router";
import Channel from "./Channel";

const daddyliveurl = "https://thedaddy.to/embed/";

const channels = [
  {
    name: "SportTV 1",
    urls: [daddyliveurl + "stream-49.php"],
  },
  {
    name: "SportTV 2",
    urls: [daddyliveurl + "stream-74.php"],
  },
  {
    name: "SportTV 3",
    urls: [daddyliveurl + "stream-454.php"],
  },
  {
    name: "SportTV 4",
    urls: [daddyliveurl + "stream-289.php"],
  },
  {
    name: "SportTV 5",
    urls: [daddyliveurl + "stream-290.php"],
  },
  {
    name: "ElevenSports1",
    urls: [daddyliveurl + "stream-291.php"],
  },
  {
    name: "ElevenSports2",
    urls: [daddyliveurl + "stream-456.php"],
  },
  {
    name: "ElevenSports3",
    urls: [daddyliveurl + "stream-457.php"],
  },
  {
    name: "ElevenSports4",
    urls: [daddyliveurl + "stream-458.php"],
  },
  {
    name: "ElevenSports5",
    urls: [
      "https://topembed.pw/channel/ElevenSports5[Portugal]",
      daddyliveurl + "stream-459.php",
    ],
  },
  {
    name: "Sky Sports F1",
    urls: [
      daddyliveurl + "stream-60.php",
      "https://letscast.pro/bill.php?stream=91LHlS9qZPK5",
      "https://topembed.pw/channel/SkySportsF1[UK]",
    ],
  },
];

function List() {
  const [currentChannel, setCurrentChannel] = useState(undefined);
  const [urlIndex, setUrlIndex] = useState(0);

  const handleChannelClick = (channel) => {
    setCurrentChannel(channel);
    setUrlIndex(0);
  };
  return (
    <div>
      <ul>
        {channels.map((channel) => (
          <li onClick={() => handleChannelClick(channel)} key={channel.name}>
            {channel.name}
          </li>
        ))}
      </ul>

      {currentChannel && (
        <div>
          <div>
            {currentChannel.urls.map((url, index) => (
              <button
                key={index}
                onClick={() => {
                  setUrlIndex(index);
                }}
              >
                {currentChannel.name} - {index + 1}
              </button>
            ))}
          </div>
          <iframe
            className="video responsive"
            style={{ margin: "0px", width: "100%", height: "60vh" }}
            src={currentChannel.urls[urlIndex]}
            name="iframe_a"
            allowFullScreen="yes"
          >
            Your Browser Do not Support Iframe
          </iframe>
        </div>
      )}
    </div>
  );
}

export default List;
