import './Schedule.css';

const Schedule = ({ children, open, close }) => (
    <div
      className={`schedule ${open ? 'schedule-show' : ''}`}
      tabIndex="-1"
      role="dialog"
      onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
    >
      <div className="schedule-dialog" role="document">
        <div className="schedule-content">
          <div className="schedule-header">
            <button type="button" className="btn-close" aria-label="Close"
              onClick={close}/>
          </div>
          <div className="schedule-body">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Schedule;