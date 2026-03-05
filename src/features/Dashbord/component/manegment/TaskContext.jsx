import { createContext, useReducer, useContext, useEffect } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: [
    { id: "1", name: "UI Design", category: "Design", assigned: "Ajay", due: "2026-02-26", priority: "Low", status: "todo" },
    { id: "2", name: "API Integration", category: "Development", assigned: "Vikash", due: "2026-02-27", priority: "High", status: "todo" },
    { id: "3", name: "Testing", category: "QA", assigned: "Garveet", due: "2026-02-28", priority: "High", status: "pending" },
    { id: "4", name: "Dashboard Setup", category: "General", assigned: "Ajay", due: "2026-03-01", priority: "Medium", status: "completed" }
  ]
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };

    case "UPDATE_TASK_STATUS":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, status: action.payload.status } : task
        )
      };

    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, ...action.payload } : task
        )
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState, () => {
    try {
      const localData = localStorage.getItem('tasks');
      return localData ? { tasks: JSON.parse(localData) } : initialState;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  return useContext(TaskContext);
}