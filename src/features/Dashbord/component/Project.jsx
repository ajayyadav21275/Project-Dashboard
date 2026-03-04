import { useState } from "react";

function Project() {

  const [tasks, setTasks] = useState({
    todo: [
      { id: 1, title: "UI Design", priority: "Low" },
      { id: 2, title: "API Integration", priority: "High" }
    ],
    pending: [
      { id: 3, title: "Testing", priority: "High" }
    ],
    progress: [
      { id: 4, title: "Dashboard Setup", priority: "Medium" }
    ]
  });

  const renderCard = (item) => {
    return (
      <div key={item.id} className="card mb-3 shadow-sm">
        <div className="card-body">
          <h6>{item.title}</h6>
          <span className={`badge 
            ${item.priority === "Low" && "bg-success"}
            ${item.priority === "Medium" && "bg-warning"}
            ${item.priority === "High" && "bg-danger"}
          `}>
            {item.priority}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="container-fluid p-4">
      <h3 className="mb-4">Projects</h3>
      <div className="row">        
        <div className="col-md-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>To Do
              <span className="badge bg-primary ms-2">
                {tasks.todo.length}
              </span>
            </h5>
            <button className="btn btn-sm btn-outline-primary">+</button>
          </div>
          {tasks.todo.map(renderCard)}
        </div>
        <div className="col-md-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>Pending 
              <span className="badge bg-warning ms-2">
                {tasks.pending.length}
              </span>
            </h5>
            <button className="btn btn-sm btn-outline-warning">+</button>
          </div>
                   {tasks.pending.map(renderCard)}
        </div>
           <div className="col-md-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h5>  Completed
              <span className="badge bg-success ms-2">
                {tasks.progress.length}
              </span>
            </h5>
            <button className="btn btn-sm btn-outline-success">+</button>
          </div>
          {tasks.progress.map(renderCard)}
        </div>
      </div>
    </div>
  );
}

export default Project;