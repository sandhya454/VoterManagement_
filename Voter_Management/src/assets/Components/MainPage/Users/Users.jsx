import React, { useState } from 'react';
import '../Users/Users.scss';
import ToggleSwitch from '../Users/ToggleSwitch.jsx';



export default function Users() {
  const [showUserList,setShowUserList]=useState(true);
  const displayUser=()=>{
        setShowUserList(true)
  }
  const toggleView = () => {
    setShowUserList(false);
  };
 
  return (

    <>    
        <div className='Users'>
          <div className='user-list'>
            <div className='heading' onClick={displayUser} >Users</div>
            <button className='btn' onClick={toggleView}>+create user</button>
          </div>
          {showUserList ? <UserList/>:<CreateUserForm/>}
        </div>
    </>
  )
}
const UserList=()=>{
  const users=[{ username:"Nagendra",password:"9808387687",name:"nagendra",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"1"}/>},
  { username:"Manikanta",password:"9808387687",name:"manikanta",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"2"}/>},
  { username:"Ramesh",password:"9808387687",name:"ramesh",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"3"}/>},
  { username:"Barath",password:"9808387687",name:"barath",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"4"}/>}]
          return(
            <>
              <div className='user-table'>
              <table cellSpacing={0} cellPadding={0}>
                <thead>
                  <th>User Name</th>
                  <th>Password</th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Status</th>
                </thead>
                <tbody>
                  {users.map((i)=>{
                    return(
                      <>
                      <tr>
                        <td>{i.username}</td>
                        <td>{i.password}</td>
                        <td>{i.name}</td>
                        <td>{i.mobilenumber}</td>
                        <td>{i.email}</td>
                        <td>{i.age}</td>
                        <td>{i.gender}</td>
                        <td>{i.status}</td>
                      </tr></>
                    )
                  })}
                </tbody>
              </table>
          </div>
            </>
          )
};

const CreateUserForm=()=>{
  return(
    <>
        <div className='user-form'>      
            <form >
              <div className='details'>
                <div className='elements'>
                  <label htmlFor="username">User Name:</label><br/>
                  <input type="text" id="username" name="username" placeholder='enter here' className='info' /><br />
                </div>
                  <div className='elements'>
                  <label htmlFor="name">Password:</label><br/>
                  <input type="password" id="password" name="password" placeholder='enter here' className='info' /><br />
                  </div>
                  <div className='elements'>
                  <label htmlFor="name">Name:</label><br/>
                  <input type="text" id="name" name="name"  placeholder='enter here' className='info'/><br />
                  </div>
                  <div className='elements'>
                  <label htmlFor="name">Mobile Number:</label><br/>
                  <input type="text" id="mobilenumber" name="mobilenumber" placeholder='enter here' className='info' /><br />
                  </div> 
                  <div className='elements'>                                
                  <label htmlFor="email">Email:</label><br/>
                  <input type="email" id="email" name="email" placeholder='enter here' className='info'/><br />  
                  </div> 
                  <div className='elements'>
                  <label htmlFor="name">Age:</label><br/>
                  <input type="number" id="age" name="age" placeholder='enter here'  className='info'/><br />
                  </div>
                  <div className='elements'>
                  <label htmlFor="name">Gender:</label><br/>
                  <input type="text" id="gender" name="gender" placeholder='enter here' className='info'/><br />
                  </div>
                  </div>
                  <div className='submit-form'>
                    <button>Submit</button>
                  </div>                    
      </form>
    </div>
    </>
  )
}
