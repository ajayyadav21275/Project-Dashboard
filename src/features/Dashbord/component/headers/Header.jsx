import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function Header() {
  const { t, i18n } = useTranslation();
     const location = useLocation();

      const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return t("Wellcome");
      case "/inbox":
        return t("Inbox");
      case "/personal":
        return t("Personal");
      case "/job":
        return t("Job");
      default:
        return t("dashboard");
    }
  };


  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      
       <div>
      <h2 className="fw-bold">{getTitle()}</h2>
      <small className="text-muted">{t("dashboard")}</small>
    </div>
         
      <div>
        <button 
          className="btn btn-outline-secondary me-2"
          onClick={() => i18n.changeLanguage("Hindi")}
        >
          Hindi
        </button>

        <button 
          className="btn btn-outline-secondary me-3"
          onClick={() => i18n.changeLanguage("eng")}
        >
          English
        </button>
             {/* // add is model// */}
      

      
<button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  New Task
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        .. <div className='justify-content-center'>
                <div className='p-2 bg-info rounded-4 col-sm-10'>                      
                     <form>
                        <input type='text' name='Name' placeholder='Full Name' className='form-control'/> <br/>                       
                        <input type='tel' name='Number' placeholder='Phone Number' className='form-control'/> <br/>                        
                        <input type='email' name='Email' placeholder='Email Address' className='form-control'/>  <br/>                       
                         <input type='password' name='Password' placeholder='password' className='form-control'/> <br/>                         
                         <button type='submit' className="btn btn-primary form-control">Register</button><br/><br/>
                                                                  
                     </form>
                </div>
            </div>.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      </div>

    </div>
  );
}

export default Header;