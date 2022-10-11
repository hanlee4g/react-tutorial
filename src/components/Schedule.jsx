const Schedule = ({ courses, selected }) => (
    <div className="schedule-list">
        {
        selected.length === 0
        ?   <div className="no-courses">
                <h2>No courses have been selected</h2>
                <h4>Click on a course to select it</h4>
            </div>
        :   <div className="course-schedule">
                <h2>Your Schedule</h2>
                { selected.map(course => (
                    <div key={course}>
                        <p> {courses[course].term} CS {courses[course].number}: {courses[course].title} ({courses[course].meets})</p>
                    </div>
                ))
                }
            </div>
        }
    </div>
);

export default Schedule;