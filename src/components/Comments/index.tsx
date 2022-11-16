import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import { UpdateCommentsButton } from '../UpdateCommentsButton';
import { Box } from '@mui/material';
import { Comment } from '../Comment';
import { CommentsCount } from '../CommentsCount';
import { IComment, IComments } from '../../types';
import { useAppSelector } from '../../store/hooks';

export const Comments = (props: IComments) => {
    const { descendants, kids, id } = props;
    const comments = useAppSelector((state) => state.items.rootComments);

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
                    <CommentsCount />
                    <UpdateCommentsButton descendants={descendants} kids={kids} id={id}/>
                </Box>
            }
        >
            {comments.map((comment: IComment, index) => <Comment props={comment} padding={'40px'} key={index} />)}
        </List>
    );
}
