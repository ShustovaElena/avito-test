import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Container from '@mui/material/Container';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CommentIcon from '@mui/icons-material/Comment';
import { IComment } from '../../types';
import { getNestedComments } from '../../utils/api/comments';
import { NestedComment } from '../NestedComment';
import { useState, useEffect } from 'react';
import { COMMENT_STYLE } from '../../constants';

export const Comment = (props: IComment) => {
    const { text, kids, by, time } = props;
    const [open, setOpen] = useState(false);
    const [nestedComments, setNestedComments] = useState<IComment[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (kids) {
                const data = await getNestedComments(kids);
                if (data) {
                    setNestedComments(data);
                }
            }
        }
        fetchData();
    }, [open]);

    const handleClick = async () => {
        setOpen(!open);
    };

  return (
    <>
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
            <CommentIcon />
            </ListItemIcon>
            <Container sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                <ListItemText primary={`Author: ${by}`} sx={COMMENT_STYLE} />
                <ListItemText primary={new Date(time * 1000).toLocaleDateString('en-US')} sx={COMMENT_STYLE} />
                <ListItemText primary={text} />
            </Container>
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {nestedComments.map((nestedComment, index) => {
            return <NestedComment text={nestedComment.text} open={open} by={nestedComment.by} time={nestedComment.time} key={index} />
        })}
    </>
  );
}
