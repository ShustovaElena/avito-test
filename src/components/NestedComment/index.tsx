import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CommentIcon from '@mui/icons-material/Comment';

type INestedComment = {
    text: string;
    open: boolean;
};

export const NestedComment = (props: INestedComment) => {
    const { open, text } = props;
  return (
    <>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <CommentIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}
