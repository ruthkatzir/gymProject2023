import * as React from 'react';
import Schedule from './schedule';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './schedule.css';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);

  const handleChange = (e, value) => {
    // e.preventDefault();
    console.log(value)
    setPage(value);
  };

  return (
    <>
    <br/><br/><br/><br/><br/><br/>
    <Schedule page={page}></Schedule>
    <Stack style={{marginLeft:800}} spacing={2}>
      <Pagination count={3} page={page} onChange={handleChange} />
    </Stack>
    </>
  );
}


