import React from 'react'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...'/>
      <div  className='send'>
      <input style={{display:"none"}} type="file" name="" id="file" />
        <label htmlFor="file">
          <ul class="iconlist">
              <li>
                <div class="icon-holder">
                  <div class="icon"> 
                    <i class="icofont-duotone icofont-pictures"></i>
                  </div> 
                  
                </div>
                
              </li>
              <li>
                <div class="icon-holder">
                  <div class="icon"> 
                    <i class="icofont-duotone icofont-file"></i>
                  </div> 
                  
                </div>
                
              </li>
            </ul> 
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input