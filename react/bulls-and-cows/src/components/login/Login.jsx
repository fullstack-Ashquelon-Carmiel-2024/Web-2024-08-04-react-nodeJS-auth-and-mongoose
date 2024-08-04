import './Login.scss';
import Header from '../header/Header';
import { login } from '../../services/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ users, setCurrUser}) {

  const [ formData, setFormData ] = useState({nick:'',password:''});

  const navigate = useNavigate();

  const handleChange = (e) => setFormData({...formData,[e.target.name]:e.target.value});

  const onSubmit = (e) => {

    e.preventDefault(); // don't do refersh

    const result = login(formData.nick,formData.password,users);

    if (result.loggedIn) {

        setCurrUser({id:result.user.id,nick:formData.nick,
                     role: result.user.role});
        
        setFormData({nick:'',password:''});
        
        navigate('/');
    } else {
        console.log(result)
    }

  }

  return (

<div className="d-flex flex-column justify-content-center align-items-center login">
    
    <Header title="Login" />

    <form className="fs-3" onSubmit={onSubmit} /* noValidate */  >

    ````<div className="form-group row">
            <div className="opacity-0 text-danger" >
                
            </div>
        </div>

        <div className="form-group row mb-2">
            <label className="col-form-label col-12 col-lg-3" htmlFor="nick">Nick:</label>
            <div className="col-12 offset-0 col-lg-8 offset-lg-1">

                <input className="form-control fs-3" type="text" name="nick" id="nick" 
                        required onChange={handleChange} value={formData.nick}  />


                <div className="invalid-feedback">You should enter a nickname!</div>
            </div>
        
        </div>
        <div className="form-group row mb-2">
            <label className="col-form-label col-12 col-lg-3" htmlFor="password">Password:</label>
            <div className="col-12 offset-0 col-lg-8 offset-lg-1">

                <input className="form-control fs-3" type="password" name="password" id="password" 
                        required onChange={handleChange} value={formData.password}  />


                <div className="invalid-feedback">You should enter a password!</div>
            </div>
        
        </div>

        <div className="d-grid">

            <button 
                className="btn btn-outline-info btn-lg fs-1 px-5 mt-4 shadow">
                        Login
            </button>
        </div>

    </form>
</div> 
  
  )
}
