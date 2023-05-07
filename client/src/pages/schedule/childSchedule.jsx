//import { SportsMartialArtsIcon } from '@mui/icons-material';
import PoolIcon from '@mui/icons-material/Pool';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';

const ChildSchedule = (props) => {
  return (
    <table style={{ maxHeight: '300px' }}>
      <thead>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, i) => {
          const hour = i + 8;
         
          return (
            
            <tr key={hour}>
              <td>{hour}:00:00</td>
              <td>{props.rows.find(row => row.DayOfWeek === 1 && row.StartHour.startsWith(`${hour}:`)) ? <props.type /> : <></>}</td>
              <td>{props.rows.find(row => row.DayOfWeek === 2 && row.StartHour.startsWith(`${hour}:`)) ? <props.type /> : <></>}</td>
              <td>{props.rows.find(row => row.DayOfWeek === 3 && row.StartHour.startsWith(`${hour}:`)) ? <props.type /> : <></>}</td>
              <td>{props.rows.find(row => row.DayOfWeek === 4 && row.StartHour.startsWith(`${hour}:`)) ? <props.type /> : <></>}</td>
              <td>{props.rows.find(row => row.DayOfWeek === 5 && row.StartHour.startsWith(`${hour}:`)) ? <props.type /> : <></>}</td>
              <td>{props.rows.find(row => row.DayOfWeek === 6 && row.StartHour.startsWith(`${hour}:`)) ? <props.type /> : <></>}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default ChildSchedule;
