import React from "react";
import image from "../assets/author.jpg"
function Author() {
  return (<>
    <div className="w3-card w3-margin w3-margin-top">
      <img src={image} style={{width: "100%"}} />
      <div className="w3-container w3-white">
        <h4>
          <b>PRINCE NR</b>
        </h4>
        <p>
          Just me, myself and I, exploring the universe of uknownment. I have a
          heart of love and a interest of exploring the world and writing on this
          blog. I want to share my world with you.
        </p>
      </div>
    </div>
    <hr />
    </>
  );
}

export default Author;
