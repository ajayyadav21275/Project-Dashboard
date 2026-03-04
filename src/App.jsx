import {Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n.js";

import Header from "./features/Dashbord/component/headers/Header";
import Sidebar from "./features/Dashbord/component/sidebar/Sidebar";


import Inbox from "./features/Dashbord/component/sidebar/Inbox.jsx";
import Personal from "./features/Dashbord/component/sidebar/Personal.jsx";
import Job from "./features/Dashbord/component/sidebar/Job.jsx";
import Stuff from "./features/Dashbord/component/sidebar/Stuff.jsx";
import Research from "./features/Dashbord/component/sidebar/Research.jsx";
import Marketing from "./features/Dashbord/component/sidebar/Marketing.jsx";
import MarchGroup from "./features/Dashbord/component/sidebar/MarchGroup.jsx";
import Bookmates from "./features/Dashbord/component/sidebar/Bookmates.jsx";
import Dashb from "./features/Dashbord/component/sidebar/Dashb.jsx";

function App() {
  return (
    
      <div className="container-fluid">
        <div className="row vh-100">

          {/* Sidebar */}
          <div className="col-md-3 col-lg-2 p-0 bg-light">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="col-md-9 col-lg-10 p-4 overflow-auto">
            <Header />

            <Routes>
              <Route path="/" element={<Dashb/>} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/job" element={<Job />} />
              <Route path="/stuff" element={<Stuff />} />
              <Route path="/research" element={<Research />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/march-group" element={<MarchGroup />} />
              <Route path="/bookmates" element={<Bookmates />} />
            </Routes>

          </div>

        </div>
      </div>
    
  );
}

export default App;