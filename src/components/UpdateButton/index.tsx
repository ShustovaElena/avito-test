import { IconButton} from '@mui/material';
import UpdateIcon from '@mui/icons-material/Update';

export const UpdateButton = () => {
    return (
        <IconButton color="primary" aria-label="add to shopping cart">
            <UpdateIcon fontSize='large' sx={{ marginLeft: '40px' }} />
        </IconButton>
    );
}