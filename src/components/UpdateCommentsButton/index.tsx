import { IconButton} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { useAppDispatch } from '../../store/hooks';
import { getRootComments } from '../../utils/api/comments';
import { IComments } from '../../types';

export const UpdateCommentsButton = (props: IComments) => {
    const { descendants, kids } = props;
    const dispatch = useAppDispatch();
    
    const handleClick = () => {
        if (descendants === 0) {
            dispatch(getRootComments([]));
        } else {
            dispatch(getRootComments(kids));
        }
    };

    return (
        <IconButton color="primary" aria-label="update comments" onClick={handleClick}>
            <UpdateIcon fontSize='large' />
        </IconButton>
    );
}