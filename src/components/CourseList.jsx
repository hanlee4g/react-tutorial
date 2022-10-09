import "./CourseList.css"

const Course = ({course, id, selection, selected, toggleSelected}) => {
    if( selection === course.term) {
        return (
            <div className="card m-2 p-2" id={selected.includes(id) ? 'selected' : ''} onClick={() => toggleSelected(id)}>
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
}

const CourseList = ({courses, selection, selected, toggleSelected}) => {
    return (
        <div className = "courses">
        { Object.entries(courses).map(([id, course]) => 
        <Course
            key={id}
            id={id}
            course={course}
            selection={selection}
            selected={selected}
            toggleSelected={toggleSelected}
            />
        )}
      </div>
    );
}

export default CourseList;