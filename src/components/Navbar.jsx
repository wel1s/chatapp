import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='logo'> Wells Chat</span>
      <div className="user">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU" alt=""/>
        <span>Wilson</span>
        <button>Logout</button>

      </div>
    </div>
  )
}

export default Navbar