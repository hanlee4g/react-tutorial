const Course = ({course}) => {
    return (
        <p>
            {course.term} CS {course.number}: {course.title}
        </p>
    );
}

const CourseList = ({courses}) => {
    return (
        <div>
        { Object.entries(courses).map(([id, course]) => <Course key={id} course={course} />) }
      </div>
    );
}

export default CourseList;