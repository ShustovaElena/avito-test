import { IconButton} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getRootComments } from '../../utils/api/comments';
import { IComments } from '../../types';
import { getItemById } from '../../utils/api/items';

export const UpdateCommentsButton = (props: IComments) => {
    const { descendants, id } = props;
    const dispatch = useAppDispatch();
    const item = useAppSelector((state) => state.items.item);
    
    const handleClick = () => {
        dispatch(getItemById(id));
        if (descendants === 0) {
            dispatch(getRootComments([]));
        } else {
            dispatch(getRootComments(item.kids));
        }
    };

    return (
        <IconButton color="primary" aria-label="update comments" onClick={handleClick}>
            <UpdateIcon fontSize='large' />
        </IconButton>
    );
}