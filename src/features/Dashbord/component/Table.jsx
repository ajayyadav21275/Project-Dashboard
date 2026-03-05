import { useMemo, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useTask } from "./manegment/TaskContext";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";

function Table() {
  const { state, dispatch } = useTask();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);


  const handleSearch = useMemo(
    () =>
      debounce((value) => {
        setDebouncedSearch(value);
      }, 500),
    []
  );

  const onChange = (e) => {
    setSearch(e.target.value);
    handleSearch(e.target.value);
  };


  useEffect(() => {
    return () => {
      handleSearch.cancel();
    };
  }, [handleSearch]);




  const filterData = state.tasks.filter((e) =>
    e.name?.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    e.id?.toString().includes(debouncedSearch)
  );

  const columns = [
    {
      name: "Select",
      cell: (row) => (
        <input
          type="radio"
          name="radio"
          checked={selectedId === row.id}
          onChange={() => setSelectedId(row.id)}
        />
      ),
    },
    {
      name: "Task Id",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Task Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Assigned",
      selector: (row) => row.assigned,
      sortable: true,
    },
    {
      name: "Due",
      selector: (row) => row.due,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) =>
        <>
          <button className="btn btn-dark btn-sm" onClick={() => navigate(`/edit-task/${row.id}`)}>Edit</button>&nbsp;
          <button className="btn btn-danger btn-sm" onClick={() => dispatch({ type: "DELETE_TASK", payload: row.id })}>Delete</button>
        </>

    },
  ];

  return (
    <>
      <input
        type="text" className="form-control mb-3" value={search} onChange={onChange} placeholder="Search..." />

      <DataTable columns={columns} data={filterData} pagination />
    </>
  );
}

export default Table;