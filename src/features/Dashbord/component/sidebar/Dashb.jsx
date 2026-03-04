import React from 'react'
import Table from '../Table'
import Project from '../Project'

function Dashb() {
  return (
    <>
    <div className="p-4">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard.</p>
    </div>

    <Table/>
    <Project/>
        </>
  )
}

export default Dashb