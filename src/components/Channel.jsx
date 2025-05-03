import React from "react";

function Channel(src) {
  console.log(src);
  return (
    <iframe
      className="video responsive"
      style={{ margin: "0px", width: "100%", height: "60vh" }}
      src="https://daddylive.mp/embed/stream-459.php"
      name="iframe_a"
      allowFullScreen="yes"
    >
      Your Browser Do not Support Iframe
    </iframe>
  );
}

export default Channel;
