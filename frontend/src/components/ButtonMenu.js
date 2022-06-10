import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Box from '@mui/material/Box';
export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu" style={{ width: "300"}}>
      {(popupState) => (
        <React.Fragment>
          <a className="btn"{...bindTrigger(popupState)} style={{ width: "300"}}>
          
              <PersonOutlineIcon/>
           
          </a>
          <Menu {...bindMenu(popupState)}>
          <a
               href="/profileUser"
               className="nav-link btn"
               
             onClick={popupState.close}>Mon compte</a>
           
            <a
             href="/modifyProfile"
               className="nav-link btn"
                onClick={popupState.close}>Modifier</a>
      
           
            <a className="nav-link btn" href='/'
                onClick={popupState.close}>Déconnecter</a>
           
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}