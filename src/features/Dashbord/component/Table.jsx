import { useMemo, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Data } from "./Task";
import debounce from "lodash/debounce";

function Table() {

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // Debounce function
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



  // filter search bar data//
  const filterData = Data.filter((e) =>
    e.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
    e.id.toString().includes(debouncedSearch)
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