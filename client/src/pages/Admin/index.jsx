import WeeklySchedule from './WeeklySchedule';
import img from '../../../src/images/red.jpg';
import { width } from '@mui/system';
const Secretary = () => {

  return (
    <>
    {/* backgroundColor: '#e9cccc'  */}
    {/* ,{background-repeat: 'no-repeat', 'no-repeat'} */}
      <div style={{ backgroundImage:`url(${img})`}}>
        <h1 style={{ color: '#6c2a2a', marginLeft:'10%' }}>Updating the studio lesson system</h1>
        <br />
        <WeeklySchedule></WeeklySchedule>
        <br />
      </div>
    </>
  );
}

export default Secretary;