import React from 'react'
import {useNavigate} from "react-router-dom"

function Head() {
    const navigate = useNavigate()
    
    const changeRoute =() => {
      navigate("/create")
    }
  return (
    <header className="w3-container w3-center w3-padding-32">
        <h1><b>MY BLOG</b></h1>
        <p>Welcome to the blog of <span className="w3-tag">Prince </span></p>
        <br />
        <br />
        <button className='w3-button w3-round-xlarge w3-black' onClick={changeRoute}><b>Create Own BLOG  <i className='fa fa-arrow-right w3-margin'></i></b></button>
    </header>
  )
}

export default Head