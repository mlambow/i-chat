import React from 'react'
import Chat from './pages/Chat'
import Sidebar from './pages/Sidebar'

function Home() {
  return (
    <div className='home'>
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Home