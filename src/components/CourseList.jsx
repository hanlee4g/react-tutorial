const Course = ({course}) => {
    return (
        <div className="card">
            <div className="course-number">
                {course.term} CS {course.number}
            </div>
            <div className="course-name">
                {course.title}
            </div>
            <div className="course-times">
                {course.meets}
            </div>
        </div>
    );
}

const CourseList = ({courses}) => {
    return (
        <div className = "courses">
        { Object.entries(courses).map(([id, course]) => <Course key={id} course={course} />) }
      </div>
    );
}

export default CourseList;