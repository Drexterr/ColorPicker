import React, { useState } from 'react'

const App = () => {
  const [color, setcolor] = useState('#000000')
  return (
    <div className='flex justify-center h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
    '>
      <div className='border-4 border-gray-800 p-12 w-1/3 rounded-3xl '><h1 className='text-3xl font-bold '>Color Picker</h1>
      <p className='text-2xl font-medium py-6'>Color Code = {color}</p>
      <input className='w-full h-40 ' type="color" 
      onChange={
       (e) => {
          setcolor(e.target.value)
      }}/>

      </div>
    </div>
  )
}

export default App
