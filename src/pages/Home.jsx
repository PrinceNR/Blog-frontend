import React  from "react";
import Head from "../components/Head"
import BlogContent  from "../components/BlogContent";
import Author from "../components/Author";
import PopularPost from "../components/PopularPost";
import Tags from "../components/Tags";
import Footer from "../components/Footer";
import "./Home.css";

function App() {


  return (<>
    <div className="w3-content" style ={{maxWidth :"1400px"}}> 
     <Head/>
     <div className="w3-row">
        <BlogContent/>
     <div className="w3-col l4">
         <Author/>
         <PopularPost/>
         <Tags/>
     </div>
     </div>
     
    </div>
     <Footer/>
     </>
  );
}

export default App;
