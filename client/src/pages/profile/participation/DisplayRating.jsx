
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const DisplayRating = ({ stars }) => {

  return (
   !stars?<Typography component="legend">No rating given</Typography> : 
   <><Typography component="legend"></Typography>
    <Rating
      name="read-only"
      value={stars} readOnly
      precision={0.5}
    /></>
 
  )
}

export default DisplayRating;
