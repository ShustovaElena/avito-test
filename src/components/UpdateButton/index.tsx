import { IconButton} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { useAppDispatch } from '../../store/hooks';
import { getItems } from '../../utils/api/items';

export const UpdateButton = () => {
    const dispatch = useAppDispatch();
   
    const onClick = () => {
        dispatch(getItems());
    };

    return (
        <IconButton color="primary" aria-label="update news" onClick={onClick}>
            <UpdateIcon fontSize='large' sx={{ marginLeft: '40px' }} />
        </IconButton>
    );
}