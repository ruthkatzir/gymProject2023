import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const DisplayRating = ({ stars }) => {

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {!stars ? <Typography component="legend">No rating given</Typography> :
        <>
          <Typography component="legend"></Typography>
          <Rating
            name="read-only"
            value={stars} readOnly
            precision={0.5}
          />
        </>
      }
    </div>
  )
}

export default DisplayRating;

