import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useTask } from "./manegment/TaskContext";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddTask() {
    const { register, handleSubmit, reset } = useForm();
    const { state, dispatch } = useTask();
    const navigate = useNavigate();
    const { id } = useParams();

    const isEditing = Boolean(id);

    useEffect(() => {
        if (isEditing) {
            const taskToEdit = state.tasks.find(t => t.id === id);
            if (taskToEdit) {
                reset(taskToEdit);
            }
        }
    }, [id, state.tasks, reset]);

    const submitForm = (data) => {
        if (isEditing) {
            dispatch({
                type: "EDIT_TASK",
                payload: { ...data, id }
            });
        } else {
            const newTask = {
                id: uuidv4(),
                name: data.name,
                category: data.category || "General",
                assigned: data.assigned || "Unassigned",
                due: data.due || new Date().toISOString().split("T")[0],
                priority: data.priority || "Medium",
                status: "todo"
            };

            dispatch({
                type: "ADD_TASK",
                payload: newTask
            });
        }

        reset();
        navigate("/");
    };

    return (
        <div className="container mt-4">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white rounded-top">
                    <h4 className="mb-0">{isEditing ? "Edit Task" : "Add New Task"}</h4>
                </div>
                <div className="card-body p-4 border rounded-bottom">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Task Name</label>
                                <input type="text" {...register("name", { required: true })} placeholder="Enter task name" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Category</label>
                                <input type="text" {...register("category")} placeholder="Category (e.g. Design)" className="form-control" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Assigned To</label>
                                <input type="text" {...register("assigned")} placeholder="Assignee Name" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Due Date</label>
                                <input type="date" {...register("due")} className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label fw-bold">Priority</label>
                                <select {...register("priority")} className="form-select">
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>
                            </div>
                        </div>

                        <div className="d-flex justify-content-end mt-4">
                            <button type="button" className="btn btn-secondary me-2" onClick={() => navigate("/")}>Cancel</button>
                            <button type="submit" className="btn btn-primary px-4">{isEditing ? "Update Task" : "Add Task"}</button><br />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddTask;
