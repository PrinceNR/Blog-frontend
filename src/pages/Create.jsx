import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlogForm from '../components/BlogForm'
import './Create.css'

function Create() {
  const navigate = useNavigate()

  const changeRoute =() => {
    navigate("/")
  }
  return (
<div className='w3-content w3-margin' style={{maxWidth:"100%"}}>

  <header className='w3-container w3-center'>
    <h1><b>CREATE A BLOG</b></h1>
    <button className='w3-button w3-green w3-round' onClick={changeRoute}><b><i className='fa fa-arrow-left'> </i>  Blog Page</b></button>
  </header>
    <div className='w3-row'>
        <BlogForm/>
    </div>


</div>
  )
}

export default Create