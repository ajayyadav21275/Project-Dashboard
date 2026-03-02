import { useState } from "react"
import DataTable from "react-data-table-component"
import { Data } from "./Task"

function Table() {

    
    const [search, setSearch] = useState("")
    const [selectedId, setSelectedId] = useState(null)

    const filterData = Data.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase()) ||
        e.id.toString().includes(search)
    )

    const columns = [
        {
            name: "Select",
            cell: (row) => 
                <input  type="radio" name="radio" check={selectedId === row.id} onClick={() => setSelectedId(row.id)} />
                      
        },
        {
            name: "Task Id",
            selector: (row) => row.id,
            sortable: true
        },
        {
            name: "Task Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Category",
            selector: (row) => row.category,
            sortable: true
        },
        {
            name: "Assigned",
            selector: (row) => row.assigned,
            sortable: true
        },
        {
            name: "Due",
            selector: (row) => row.due,
            sortable: true
        },
    ]

    return (
        <>            
            <input className="w-100" type="search" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />

            <DataTable
                columns={columns} data={filterData} pagination />
        </>
    )
}

export default Table