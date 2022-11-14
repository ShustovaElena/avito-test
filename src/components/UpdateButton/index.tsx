import { IconButton} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getItems } from '../../utils/api/items';

export const UpdateButton = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.items.items);
   
    const onClick = () => {
        dispatch(getItems());
        console.log(items);
    };

    return (
        <IconButton color="primary" aria-label="update news" onClick={onClick}>
            <UpdateIcon fontSize='large' sx={{ marginLeft: '40px' }} />
        </IconButton>
    );
}