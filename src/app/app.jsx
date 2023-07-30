import React from 'react'
import {Outlet} from 'react-router-dom';
import Home from "../app/pages/home"

const App = () => {
  return (
    <>
    <Outlet />
    </>
  )
}

export default App;