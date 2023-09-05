import React from 'react';
import '../App.css';
import '../index.css';

import '../icofont.css';
import '../icofont.min.css';
import '../iconbody.css';
import Messages from './Messages';
import Input from './Input';




function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>jane</span>
        <div className="chatIcons">
          <ul class="iconlist">
            <li>
              <div class="icon-holder">
                <div class="icon"> 
                  <i class="icofont-duotone icofont-add-users"></i>
                </div> 
                
              </div>
            </li>
            
            <li>
              <div class="icon-holder">
                <div class="icon"> 
                  <i class="icofont-duotone icofont-video"></i>
                </div> 
                
              </div>
            </li>
            <li>
              <div class="icon-holder">
                <div class="icon"> 
                  <i class="icofont-duotone icofont-menu"></i>
                </div> 
                
              </div>
            </li>
		      </ul>
          <img src="" alt="" />
        </div>
        
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat