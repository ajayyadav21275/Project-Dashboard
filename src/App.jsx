
import './App.css'
import Header from './features/Dashbord/component/headers/Header'
import Project from './features/Dashbord/component/Project'
import Sidebar from './features/Dashbord/component/sidebar/Sidebar'
import Table from './features/Dashbord/component/Table'

function App() {
  return (
    <>
     <div className="container-fluid">
  <div className="row vh-100">    
    <div className="col-md-3 col-lg-2 p-0">
      <Sidebar />
    </div>
    <div className="col-md-9 col-lg-10 p-4 bg-body-tertiary overflow-auto">
      <Header />
      <Table />
      <Project />
    </div>

  </div>
</div>
                   </>
  )
}

export default App
