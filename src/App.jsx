import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n";

import Header from "./features/Dashbord/component/headers/Header";
import Sidebar from "./features/Dashbord/component/sidebar/Sidebar";
import Inbox from "./features/Dashbord/component/sidebar/Inbox";
import Personal from "./features/Dashbord/component/sidebar/Personal";
import Job from "./features/Dashbord/component/sidebar/Job";
import Stuff from "./features/Dashbord/component/sidebar/Stuff";
import Research from "./features/Dashbord/component/sidebar/Research";
import Marketing from "./features/Dashbord/component/sidebar/Marketing";
import MarchGroup from "./features/Dashbord/component/sidebar/MarchGroup";
import Bookmates from "./features/Dashbord/component/sidebar/Bookmates";
import Dashb from "./features/Dashbord/component/sidebar/Dashb";
import AddTask from "./features/Dashbord/component/AddTask";
import { TaskProvider } from "./features/Dashbord/component/manegment/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="container-fluid">
        <div className="row vh-100">
          <div className="col-md-3 col-lg-2 p-0 bg-light">
            <Sidebar />
          </div>

          <div className="col-md-9 col-lg-10 p-4 overflow-auto">
            <Header />
            <Routes>
              <Route path="/" element={<Dashb />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/job" element={<Job />} />
              <Route path="/stuff" element={<Stuff />} />
              <Route path="/research" element={<Research />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/march-group" element={<MarchGroup />} />
              <Route path="/bookmates" element={<Bookmates />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/edit-task/:id" element={<AddTask />} />
            </Routes>
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;