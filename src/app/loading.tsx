'use client';

import CircularProgress from '@mui/material/CircularProgress';

const loadingPortfolio = () => (
  <div
    style={{
      width: '100%',
      height: '98vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <CircularProgress style={{ color: 'white' }} />
  </div>
);

export default loadingPortfolio;
