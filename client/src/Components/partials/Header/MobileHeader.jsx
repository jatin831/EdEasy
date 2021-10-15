import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useHistory } from "react-router-dom";
function MobileHeader() {
  let history = useHistory();
  return ( 
    <>
		  <nav class="navbar bg-light rounded-0">
        <div className="container">
            <div className="col-8 ps-4">
              <p className="pb-0 mb-0">Hello,</p>
              <h3 className="heading-2">Jatin bajaj 👋</h3>
            </div>
            <div className="col-2 d-flex justify-content-center">
                <NotificationsIcon onClick={()=>history.push('/classes/reminders')} style={{ fontSize: 30 }}/>
            </div>
            <div className="col-2 d-flex justify-content-center"><Avatar src="https://lh3.googleusercontent.com/ogw/ADea4I6x0ZHE2E2fnUt-X2aXAKqdRzAFLMchsbuvaxxQ=s32-c-mo" /></div>
        </div>
      </nav>
    </>
   );
}

export default MobileHeader;