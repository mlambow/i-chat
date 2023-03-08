import React from 'react'

function Input() {
  return (
    <div className='input'>
      <input type='text' placeholder='Type something...' />
      <div className="send">
        <input type='file' id='file' style={{display:'none'}} />
        <label htmlFor='file'>
            file
        </label>      
        <button>Send</button>    
    </div>      
    </div>
  )
}

export default Input