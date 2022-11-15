import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';
import { IComment } from '../../types';
import { getNestedComments } from '../../utils/api/comments';
import { NestedComment } from '../NestedComment';
import { useState } from 'react';

export const Comment = (props: IComment) => {
    const { text, kids } = props;
    const [open, setOpen] = useState(true);
    const [nestedComments, setNestedComments] = useState<IComment[]>([]);

    const handleClick = async () => {
        setOpen(!open);
        if (kids) {
            const data = await getNestedComments(kids);
            if (data) {
                setNestedComments(data);
            }
        }
    };

  return (
    <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <CommentIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {nestedComments.map((nestedComment, index) => {
            return <NestedComment text={nestedComment.text} open={open} key={index} />
        })}
    </>
  );
}
