import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import LeaveIcon from '@material-ui/icons/ExitToApp';

export type IconButtonPropsType = {
  iconType: 'Edit' | 'ArrowBack' | 'Send' | 'Mic' | 'Leave';
  color: string;
};

export function IconButton({ iconType = 'Edit', color = 'black' }: IconButtonPropsType) {
  let icon;
  if (iconType === 'Edit') icon = <EditIcon style={{ fontSize: 24, color: color }} />;
  else if (iconType === 'ArrowBack') icon = <ArrowBackIcon style={{ fontSize: 24, color: color }} />;
  else if (iconType === 'Send') icon = <SendIcon style={{ fontSize: 24, color: color }} />;
  else if (iconType === 'Mic') icon = <MicIcon style={{ fontSize: 24, color: color }} />;
  else if (iconType === 'Leave') icon = <LeaveIcon style={{ fontSize: 24, color: color }} />;

  return <>{icon}</>;
}

export default IconButton;
