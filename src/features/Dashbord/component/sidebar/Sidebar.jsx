
import { Link} from "react-router-dom";
import {FaHome,FaInbox,FaUser,FaBriefcase,FaFolder,FaSearch,FaUsers} from "react-icons/fa";

function Sidebar() {
  return (    
    <div className="sidebar d-flex flex-column p-3 bg-light vh-100">      
      <div className="d-flex align-items-center mb-4">
        <div
          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
          style={{ width: "40px", height: "40px" }}
        >
         AJ
        </div>
        <div className="ms-2">
          <h6 className="mb-0">Ajay Kumar</h6>
          <small className="text-muted">ajayyadav@gmail.com</small>
        </div>
      </div>      
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link text-dark">
            <FaHome className="me-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/inbox" className="nav-link text-dark">
            <FaInbox className="me-2" />
            Inbox
          </Link>
        </li>
      </ul>
      <hr />      
      <h6 className="text-muted">Personal</h6>
      <ul className="nav nav-pills flex-column mb-auto">
        <li>
          <Link to="/personal" className="nav-link text-dark">
            <FaUser className="me-2" />
            Personal
          </Link>
        </li>
        <li>
          <Link to="/job" className="nav-link text-dark">
            <FaBriefcase className="me-2" />
            Job
          </Link>
        </li>
        <li>
          <Link to="/stuff" className="nav-link text-dark">
            <FaFolder className="me-2" />
            Stuff
          </Link>
        </li>
        <li>
          <Link to="/research" className="nav-link text-dark">
            <FaSearch className="me-2" />
            Research
          </Link>
        </li>
      </ul>
      <hr />      
      <h6 className="text-muted">Workspaces</h6>
      <ul className="nav nav-pills flex-column">
        <li>
          <Link to="/marketing" className="nav-link text-dark">
            <FaUsers className="me-2" />
            Marketing
          </Link>
        </li>
        <li>
          <Link to="/march-group" className="nav-link text-dark">
            <FaUsers className="me-2" />
            March Group
          </Link>
        </li>
        <li>
          <Link to="/bookmates" className="nav-link text-dark">
            <FaUsers className="me-2" />
            Bookmates
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;