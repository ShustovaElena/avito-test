import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { UpdateCommentsButton } from '../UpdateCommentsButton';
import { Box } from '@mui/material';
import { Comment } from '../Comment';
import { CommentsCount } from '../CommentsCount';
import { ICommentsCount } from '../../types';

export const Comments = (props: ICommentsCount) => {
  return (
    <List
      sx={{ width: '100%', bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <ListSubheader component="div" id="nested-list-subheader" sx={{fontSize: '1.5rem'}}>
            Comments
            </ListSubheader>
            <CommentsCount descendants={props.descendants} />
            <UpdateCommentsButton />
        </Box>
      }
    >
        {/* <Comment /> */}
    </List>
  );
}
