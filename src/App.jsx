import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Todo from './pages/Todo/Todo'
import Posts from './pages/Posts/Posts'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Todo/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
    </Routes>
    </>
  )
}

export default App
