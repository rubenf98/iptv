import React, { useState } from "react";

const daddyliveurl = "https://thedaddy.to/embed/";
const topembedurl = "https://topembed.pw/channel/";

const channels = [
  {
    name: "SportTV 1",
    urls: [daddyliveurl + "stream-49.php", topembedurl + "SportTV1[Portugal]"],
  },
  {
    name: "SportTV 2",
    urls: [daddyliveurl + "stream-74.php", topembedurl + "SportTV2[Portugal]"],
  },
  {
    name: "SportTV 3",
    urls: [daddyliveurl + "stream-454.php", topembedurl + "SportTV3[Portugal]"],
  },
  {
    name: "SportTV 4",
    urls: [daddyliveurl + "stream-289.php", topembedurl + "SportTV4[Portugal]"],
  },
  {
    name: "SportTV 5",
    urls: [daddyliveurl + "stream-290.php", topembedurl + "SportTV5[Portugal]"],
  },

  {
    name: "SportTV 6",
    urls: [topembedurl + "SportTV6[Portugal]"],
  },
  {
    name: "ElevenSports1",
    urls: [
      daddyliveurl + "stream-291.php",
      topembedurl + "ElevenSports1[Portugal]",
    ],
  },
  {
    name: "ElevenSports2",
    urls: [
      daddyliveurl + "stream-456.php",
      topembedurl + "ElevenSports2[Portugal]",
    ],
  },
  {
    name: "ElevenSports3",
    urls: [
      daddyliveurl + "stream-457.php",
      topembedurl + "ElevenSports3[Portugal]",
    ],
  },
  {
    name: "ElevenSports4",
    urls: [
      daddyliveurl + "stream-458.php",
      topembedurl + "ElevenSports4[Portugal]",
    ],
  },
  {
    name: "ElevenSports5",
    urls: [
      topembedurl + "ElevenSports5[Portugal]",
      daddyliveurl + "stream-459.php",
    ],
  },
  {
    name: "ElevenSports6",
    urls: [topembedurl + "ElevenSports6[Portugal]"],
  },
  {
    name: "Sky Sports F1",
    urls: [
      daddyliveurl + "stream-60.php",
      "https://letscast.pro/bill.php?stream=91LHlS9qZPK5",
      topembedurl + "SkySportsF1[UK]",
    ],
  },

  {
    name: "DAZN1",
    urls: [topembedurl + "DAZN1[Portugal]"],
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
    <div className="page">
      <ul>
        {channels.map((channel) => (
          <li onClick={() => handleChannelClick(channel)} key={channel.name}>
            {channel.name}
          </li>
        ))}
      </ul>

      {currentChannel && (
        <div className="video-container">
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
