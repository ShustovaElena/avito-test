import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const Preloader = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px' }}>
      <CircularProgress size="2.8rem" />
    </Box>
  );
};

