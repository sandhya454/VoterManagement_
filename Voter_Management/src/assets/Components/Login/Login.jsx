import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import login from "../../Images/login.svg";
import '../Login/Login.scss';
export default function Login() {
    const navigate = useNavigate();
  const [adminName, setAdminName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async() => {
    try{
        const response=await fetch("http://localhost:2100/admin/admin-login ",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify({
                admin_name:adminName,
                password:password
            }),
        });
        if(response.ok){
                    const data= await response.json();
                    const token=data.token
                    
                    Cookies.set('token',token)

                    navigate('/dashboard');
        }
        
        else {
            setError('Invalid Credentials');
        }
    } catch(error){
        console.error('Error during login:', error);
        setError('An unexpected error occurred. Please try again later.');
    }
}
  return (
    <>
     <div className='login-form'>

      <div className='picture'>
        <img src={login} alt="login" className='booth-img' />
      </div>
        <div className='basic'>      
            <form>
                  <h3>Election</h3>
                  <p>In publishing and graphic design, Lorem ipsum is a placeholder text<br/>
                   commonly used to demonstrate the visual form of a document or a<br/>
                typeface without relying on meaningful content.</p>
                <div className='form-input'>
                     <input type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} placeholder='User Name' className='input'/>
                </div>                
                <div className='form-input'>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'className='input' />
                </div>                
                <button type="button" onClick={handleLogin}>Continue</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>        
    </div>
    
    </>
  )
}
