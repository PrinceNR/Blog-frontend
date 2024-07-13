import React, { useState  } from "react";
import {useNavigate} from "react-router-dom"
import "./BlogForm.css";

 function BlogForm() {
  const navigate = useNavigate()
  const [blogDatas, setBlogdatas] = useState({
    image: "",
    date: "",
    heading: "",
    discription: "",
    comments: "0",
   });
  


  const [errors, setErrors] = useState({});
  const [lessOrMore, setlessOrMore] = useState(false);

  const tempImage =
    "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=360";

  const discriptionHandler = () => {
    setlessOrMore(!lessOrMore);
  };
  let discriptionString = blogDatas.discription.split(" ");
  const tempDis = lessOrMore
    ? blogDatas.discription
    : discriptionString.slice(0, 20).join(" ") +
      (discriptionString.length >= 20 ? "..." : "");

  const updateImage = async (event) => {
    const isValid = await isImgUrl(event.target.value);
    if (isValid) {
      setBlogdatas((B) => ({ ...B, image: event.target.value }));
      setErrors((E) => ({ ...E, imageError: "" }));
    } else {
      setErrors((E) => ({ ...E, imageError: "Invaid URL" }));
    }
  };
  const changeRoute = () =>{
    navigate("/")
  }
  const updateheading = (event) => {
    setBlogdatas((B) => ({
      ...B,
      heading: event.target.value,
      date: new Date().toLocaleString(),
    }));
    setErrors((E) => ({ ...E, headingError: "" }));
  };

  const updateDiscription = (event) => {
    setBlogdatas((B) => ({ ...B, discription: event.target.value }));
    setErrors((E) => ({ ...E, discriptionError: "" }));
  };

  function creatingBlog(event) {
    event.preventDefault();
    if (validation()) {
      fetch("https://blog-backend-eaag.onrender.com/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogDatas),
      })
        .then((res) => {
          if(res.ok){
            clearForm()
          }
          return res.json()}
      )
        .then(() => {
          
          changeRoute()

        });
        
    }
  }

  function clearForm() {
       let imageUrl = document.getElementById("imageUrl")
        imageUrl.value ="";
        setBlogdatas((B) => ({
          ...B, image: "",discription : "" , heading : "", date : ""
        }))

  }
  function isImgUrl(url) {
    const img = new Image();
    img.src = url;
    return new Promise((resolve) => {
      img.onerror = () => {
        resolve(false);
      };
      img.onload = () => {
        resolve(true);
      };
    });
  }

  function validation() {
    let validate = true;
    let errorFeild = {};
    if (!blogDatas.image) {
      errorFeild.imageError = "Image URL is required";
      validate = false;
    }
    if (!blogDatas.heading) {
      errorFeild.headingError = "Heading is required";
      validate = false;
    }
    if (!blogDatas.discription) {
      errorFeild.discriptionError = "Discription is required";
      validate = false;
    }
    setErrors(errorFeild);
    errorFeild = {};

    return validate;
  }
  return (
    <div className="w3-row container" style ={{maxWidth :"1600px"}}>
      <div className="w3-col l4  ">
        <form action="" className="w3-card-4 w3-margin input">
          <h2>
            <b>Enter your Blog details here</b>
          </h2>
          <div className="individualInput">
            <label htmlFor="imageUrl">
              <b>Past Image Url</b>
            </label>
            <input type="text" id="imageUrl" onChange={updateImage} />
            <span className="w3-text-red" id="valimageUrl">
              {errors.imageError}
            </span>
          </div>
          <div>
            <label htmlFor="Heading">
              <b>Enter Blog Heading</b>
            </label>
            <input type="text" id="Heading"value={blogDatas.heading} onChange={updateheading} />
            <span className="w3-text-red" id="valHeading">
              {errors.headingError}
            </span>
          </div>
          <div>
            <label htmlFor="Discription">
              <b>Enter BLog Discription</b>
            </label>
            {/* <textarea name="discription" id="discriptionId" onChange={updateDiscription}> </textarea> */}
            {/* <input type="text" id="discriptionId" onChange={updateDiscription}  style ={{height: "100px"}}/> */}
            <textarea
              name="discription"
              id="Discription"
              value={blogDatas.discription}
              onChange={updateDiscription}
            >
              {" "}
            </textarea>
            <span className="w3-text-red" id="valDiscription">
              {errors.discriptionError}
            </span>
          </div>
          <div>
            <button
              id="addBlogBtnId"
              onClick={creatingBlog}
              className="w3-button w3-green w3-padding-large w3-round-xlarge"
            >
              <b>
                {" "}
                <i>Add BLog</i>
              </b>{" "}
            </button>
          </div>
        </form>
      </div>
      <div className="w3-col l8 s12">
        {
          //   Datas.map((data, index) => (

          <div className="w3-card-4 w3-margin w3-white">
            <img
              src={blogDatas.image ? blogDatas.image : tempImage}
              alt="Nature"
              style={{ width: "100%", height: "400px" }}
            />
            {/* <img src={blogDatas.image} alt="Nature" style={{ width: "100%",  height:"400px"}} /> */}
            <div className="w3-container">
              <h3>
                {blogDatas.heading ? (
                  <b>{blogDatas.heading}</b>
                ) : (
                  <b className="w3-opacity">Heading will show here</b>
                )}
              </h3>
              <h5>
                Title description,{" "}
                {blogDatas.date ? (
                  <span className="w3-opacity">{blogDatas.date}</span>
                ) : (
                  <span className="w3-opacity">Date shows here</span>
                )}
              </h5>
            </div>

            <div className="w3-container">
              {blogDatas.discription ? (
                <p>{tempDis}</p>
              ) : (
                <p className="w3-opacity">Discription is here.........</p>
              )}

              <div className="w3-row">
                <div className="w3-col m8 s12">
                  <p>
                    <button
                      className="w3-button w3-padding-large w3-white w3-border"
                      onClick={discriptionHandler}
                    >
                      <b>READ {lessOrMore ? "LESS" : "MORE"} »</b>
                    </button>
                  </p>
                </div>
                <div className="w3-col m4 w3-hide-small">
                  <p>
                    <span className="w3-padding-large w3-right">
                      <b>Comments  </b>{" "}
                      <span className="w3-badge">{blogDatas.comments}</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          // )
          //    )
        }
      </div>
    </div>
  );
}

export default BlogForm;
