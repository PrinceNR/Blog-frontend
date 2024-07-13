import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";


function BlogContent() {
  const [Datas, setDatas] = useState([])

  useEffect(() => {
    fetch("https://blog-backend-eaag.onrender.com/").then(res => res.json())
    .then(data => {
      setDatas(data.blogDatas)})  }, [])

    // function  imagefunction(path) {
    //    import path from path 
    //     return path
    // }

  return (<>

    <div className="w3-col l8 s12"> 
      {
      Datas.map((data, index) => (
        <BlogPost key={index} data={data}/>
      )
    ) 
       }
    </div>
    </>
  )
}
export default BlogContent;




 