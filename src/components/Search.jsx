import React from 'react'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU" alt=""/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>

    </div>
  )
}

export default Search