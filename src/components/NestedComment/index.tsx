import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import CommentIcon from '@mui/icons-material/Comment';
import { Container } from '@mui/material';
import { COMMENT_STYLE } from '../../constants';
import { INestedComment } from '../../types';
import { Comment } from '../Comment';

export const NestedComment = (props: INestedComment) => {
    const { open, commentValue } = props;
    const { text, by, time, kids } = commentValue;

    return (
        <>
        {kids ? 
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Comment props={commentValue} padding={'80px'} />
        </Collapse>
        :
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ paddingLeft: '120px' }}>
            <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <CommentIcon />
                </ListItemIcon>
                <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                    <ListItemText primary={`Author: ${by}`} sx={COMMENT_STYLE} />
                    <ListItemText primary={new Date(time * 1000).toLocaleDateString('en-US')} sx={COMMENT_STYLE} />
                    <ListItemText primary={text} />
                </Container>
            </ListItemButton>
            </List>
        </Collapse>
            }
        </>
    );
}
