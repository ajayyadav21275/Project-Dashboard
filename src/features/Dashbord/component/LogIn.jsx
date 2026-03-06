import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./auth/Api";
import { setToken } from "./session/Session";

function LogIn() {
  let [form, setForm] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let res = await loginUser(form);
      console.log(res);
      if (res && res.token) {

        setToken(res.token);
        sessionStorage.setItem("token", res.token);
        navigate("/");
      } else {
        alert("LogIn Fail");
      }
    }
    catch (error) {
      console.log(error)
      alert("LogIn Failed")
    }

  };

  return (
    <div className='d-flex justify-content-center py-2'>
      <div className='p-4 bg-dark rounded-4 col-sm-5'>

        <h4 className="text-center mb-3 text-white"><b>Log In</b></h4>

        <form onSubmit={submitForm}>

          <input type='email' name="email" value={form.email} onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }) }} placeholder='Email' className='form-control' /><br />

          <input type='password' name="password" value={form.password} onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }) }} placeholder='Password' className='form-control' /><br />

          <button type="submit" className="btn btn-primary form-control">
            Log In
          </button>

          <br /><br />

          <button type="button" className="btn btn-secondary form-control" onClick={() => navigate("/")} > Cancel </button>

        </form>

      </div>
    </div>
  );
}

export default LogIn;