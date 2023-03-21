
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const DisplayRating = ({ stars }) => {

  return (<>
    <Typography component="legend"></Typography>
    <Rating
      name="read-only"
      value={stars} readOnly
      precision={0.5}
    />
  </>
  )
}

export default DisplayRating;
