const ScheduleList = ({ selected }) => (
    <div className="schedule-list">
        {
        selected.length === 0
        ?   <div className="no-courses">
                <h1>No courses have been selected</h1>
                <h3>Click on a course to select it</h3>
            </div>
        :   <div className="course-schedule">
                <h1>Your Schedule</h1>
                { selected.map((course, id) => (
                    <div key={id}>
                        {course.term} CS {course.number}: {course.title} - Meets {course.meets}
                    </div>
                ))}
            </div>
        }
    </div>
);
  
  export default ScheduleList;