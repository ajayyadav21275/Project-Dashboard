import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTask } from "./manegment/TaskContext";

function Project() {
  const { state, dispatch } = useTask();

  const tasks = {
    todo: state.tasks.filter(t => t.status === "todo"),
    pending: state.tasks.filter(t => t.status === "pending"),
    completed: state.tasks.filter(t => t.status === "completed")
  };

  let columnsOrder = ["todo", "pending", "completed"];

  let columnTitles = { todo: "To Do", pending: "Pending", completed: "Completed" };
  let columnColors = { todo: "primary", pending: "warning", completed: "success" };

  let renderCard = (item, index) => (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="card mb-3 shadow-sm"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            userSelect: "none",
            ...provided.draggableProps.style,
            backgroundColor: snapshot.isDragging ? "#f0f8ff" : "white",
          }}
        >
          <div className="card-body">
            <h6>{item.name}</h6>
            <span
              className={`badge ${item.priority === "Low" ? "bg-success" : item.priority === "Medium" ? "bg-warning" : "bg-danger"}`} >
              {item.priority}
            </span>
          </div>
        </div>
      )}
    </Draggable>
  );
  let onDragEnd = (result) => {
    let { source, destination, draggableId } = result;
    if (!destination) return;

    let sourceCol = source.droppableId;
    let destCol = destination.droppableId;

    if (sourceCol === destCol) {
      return;
    }
    else {
      dispatch({
        type: "UPDATE_TASK_STATUS",
        payload: { id: draggableId, status: destCol }
      });
    }
  };

  return (
    <div className="container-fluid p-4">
      <h3 className="mb-4">Projects</h3>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="row">
          {columnsOrder.map((colId) => (
            <Droppable droppableId={colId} key={colId}>
              {(provided, snapshot) => (
                <div
                  className="col-md-4"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    background: snapshot.isDraggingOver ? "#f8f9fa" : "transparent",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5>
                      {columnTitles[colId]}
                      <span className={`badge bg-${columnColors[colId]} ms-2`}>
                        {tasks[colId].length}
                      </span>
                    </h5>
                    <button className={`btn btn-sm btn-outline-${columnColors[colId]}`}>
                      +
                    </button>
                  </div>
                  {tasks[colId].map((task, index) => renderCard(task, index))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default Project;