import React, {useState} from "react";

function BlogPost({ data }) {
  const [lessAndMore, setLessAndMore] = useState(true);
  const discriptionString = data.discription ? data.discription.split(" ") : [];
  function changeLessAndMorebtn() {
    setLessAndMore(!lessAndMore);
  }
  // const showDiscription=""
  const showDiscription = lessAndMore
    ? discriptionString.slice(0, 50).join(" ")+(discriptionString.length > 50 ? "..." : "") : data.discription ;
      
  return (
    <div className="w3-card-4 w3-margin w3-white">
      <img
        src={data.image}
        alt="Nature"
        style={{ width: "100%", maxHeight: "280px" }}
      />
      <div className="w3-container">
        <h3>
          <b>{data.heading}</b>
        </h3>
        <h5>
          {data.titile} <span className="w3-opacity">{data.date}</span>
        </h5>
      </div>

      <div className="w3-container">
        <p>{showDiscription}</p>
        <div className="w3-row">
          <div className="w3-col m8 s12">
            <p>
              <button
                className="w3-button w3-padding-large w3-white w3-border"
                onClick={changeLessAndMorebtn}>
                <b>READ  {lessAndMore ? "MORE":"LESS"} »</b>
              </button>
            </p>
          </div>
          <div className="w3-col m4 w3-hide-small">
            <p>
              <span className="w3-padding-large w3-right">
                <b>Comments  </b>{" "}
                <span className="w3-badge">{data.comments}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;




