const ScheduleTable = ({ rows, currentStep }) => {
    return (
        <table id={currentStep}>
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
                            <td>{rows.find(row => row.DayOfWeek === 1 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                            <td>{rows.find(row => row.DayOfWeek === 2 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                            <td>{rows.find(row => row.DayOfWeek === 3 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                            <td>{rows.find(row => row.DayOfWeek === 4 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                            <td>{rows.find(row => row.DayOfWeek === 5 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                            <td>{rows.find(row => row.DayOfWeek === 6 && row.StartHour.startsWith(`${hour}:`))?.LessonType}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
