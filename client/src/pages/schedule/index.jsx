import * as React from 'react';
import Schedule from './schedule';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './schedule.css';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <>
      <br />
      <div className="schedule-container" style={{ width: '50%', height: '50%' }}>
        <Schedule page={page}></Schedule>
      </div>
      <Stack className="pagination-container" spacing={1} style={{ width: '60%', height: '60%',  marginBottom: '5%' }}>
        <Pagination count={3} page={page} onChange={handleChange} />
      </Stack>
    </>
  );
}

