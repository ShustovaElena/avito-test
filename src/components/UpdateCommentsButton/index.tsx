import { IconButton} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

export const UpdateCommentsButton = () => {
    return (
        <IconButton color="primary" aria-label="update comments">
            <UpdateIcon fontSize='large' />
        </IconButton>
    );
}