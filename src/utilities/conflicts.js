// Takes in a course (possible conflict) and array of selected courses
// Returns True if there is a course conflict, False if no course conflict
export const hasConflict = (course, selected) => {

}

// Returns true if courses have the same term
const term = (course, otherCourse) => (
    course.term == otherCourse.term
);

// Returns true if course days conflict
const days = (course, otherCourse) => {
    const courseDays = course.meets.split(" ")[0].split("");
    const otherCourseDays = otherCourse.meets.split(" ")[0].split("");
    for (let i = 0; i < courseDays.length; i++) {
        otherCourseDays.includes(courseDays[i])
        ? true
        : false
    }
}

// Returns true if course times conflict
const times = (course, otherCourse) => {

}