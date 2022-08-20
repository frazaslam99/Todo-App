import React from 'react'
import "./App.css";
import TodoRedux from "./Components/TodoApp/TodoRedux"
// import ArticleTodoReact from "./Components/TodoApp/articcletodo"
// import Ennavbar from "./Components/NavBar/ecommercenavbar"
import Form from "./Components/Form/Form"
import Navbar from "./Components/NavBar/navbar/navbar"
import { BrowserRouter,Route } from 'react-router-dom'




const App = () => {

  return (
    <>
      {/* <Navbar/> */}
      <TodoRedux/>
      {/* <BrowserRouter>
      <Route to="/" component={Navbar} />

      
   
    </BrowserRouter> */}
    
     
    </>
  )
}

export default App
