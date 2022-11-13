import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export const BackButton = () => {
    return (
        <IconButton color="primary" aria-label="back to news" component={Link} to="/">
            <ArrowBackIcon fontSize='large' sx={{ marginLeft: '40px' }} />
        </IconButton>
    );
}