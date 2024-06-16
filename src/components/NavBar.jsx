import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
  return (
    <div className="flex justify-center gap-6 bg-slate-300">
      <p className='text-sm transition-all duration-200 hover:scale-125 hover:border-b-1 hover:border-red-400 cursor-pointer'
      onClick={() => {
        navigate('/')
      }}>
        ToDo
      </p>

      <p className='text-sm transition-all duration-200 hover:scale-125  hover:border-b-1 hover:border-red-400 cursor-pointer'
      onClick={() => {
        navigate('/posts')
      }}>
        Posts
      </p>
    </div>
  )
}

export default NavBar
