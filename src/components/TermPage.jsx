import { useState } from "react";
import CourseList from "./CourseList";
import Modal from "./Modal";
import Schedule from "./Schedule";
import "./TermPage.css"

const terms = {
  Fall: 'Fall',
  Winter: 'Winter',
  Spring: 'Spring'
};

const TermButton = ({term, selection, setSelection}) => (
  <div>
    <input type="radio" id={term} className="btn-check" checked={term === selection} autoComplete="off"
      onChange={() => setSelection(term)} />
    <label className="btn btn-success mb-1 p-2 m-1" htmlFor={term}>
    { term }
    </label>
  </div>
);

const TermSelector = ({selection, setSelection}) => (
  <div className="btn-group">
    { 
      Object.keys(terms).map(term => <TermButton key={term} term={term} selection={selection} setSelection={setSelection} />)
    }
  </div>
);

const TermPage = ({courses}) => {
  const [selection, setSelection] = useState(() => Object.keys(terms)[0]);
  const [selected, setSelected] = useState([]);

  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  
  const toggleSelected = (course) => setSelected(
    selected.includes(course)
    ? selected.filter(x => x !== course)
    : [...selected, course]
  );
  
  return (
    <div>
      <nav className="nav-buttons">
        <TermSelector selection={selection} setSelection={setSelection}/>
        <button className="btn btn-outline-dark" onClick={openModal}>View Your Schedule</button>
      </nav>
      <Modal open={open} close={closeModal}>
        <Schedule courses={courses} selected={selected}/>
      </Modal>
      <CourseList
        courses={courses}
        selection={selection}
        selected = {selected}
        toggleSelected={toggleSelected}
        />
    </div>
  );
}

export default TermPage;