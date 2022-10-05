import "./CourseList.css"

const Course = ({course}) => {
    return (
        <div className="card m-2 p-2" style={{width: '14em', height: "16em"}}>
            <div className="card-body">
                <h4>{course.term} CS {course.number}</h4>
                <p>{course.title}</p>
            </div>
            <div className="card-footer" style={{backgroundColor: 'white'}}>
                <p>{course.meets}</p>
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