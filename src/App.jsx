import {BrowserRouter, Routes , Route} from 'react-router-dom'
import React from 'react'
import Home from  './pages/Home'
import Create from './pages/Create'

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>

        <Route index element={ <Home/>} />
        <Route path='/create' element ={<Create />} />

       </Routes>     
      </BrowserRouter>
    </div>
  )
}

export default App   