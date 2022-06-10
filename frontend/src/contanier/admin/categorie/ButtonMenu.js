import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Box from '@mui/material/Box';
import SearchBox from '../../../components/SearchBox';
export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu" style={{ width: "300"}}>
      {(popupState) => (
        <React.Fragment>
          <Box {...bindTrigger(popupState)} style={{ width: "300"}}>
         <AccountCircleIcon/>
          </Box>
          <Menu {...bindMenu(popupState)}>
            <Button onClick={popupState.close}>mon compte</Button>
            <br/>
            <Button onClick={popupState.close}>Aide</Button>
            <br/>
            <Button onClick={popupState.close}>déconnexion</Button>
            <br/>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}