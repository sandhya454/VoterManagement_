import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../Users/Users.scss';
import '../Users/User.scss';
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
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/data',{
          method:'GET',
          headers:{
            'Content-Type':'applications/json'
          }

        });

        
        if(response.ok){
          const data=await response.json()
          setData(data)       
        }
        else{
          alert('no')
        }    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // const users=[{ username:"Nagendra",password:"9808387687",name:"nagendra",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"1"}/>},
  // { username:"Manikanta",password:"9808387687",name:"manikanta",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"2"}/>},
  // { username:"Ramesh",password:"9808387687",name:"ramesh",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"3"}/>},
  // { username:"Barath",password:"9808387687",name:"barath",mobilenumber:"878768736",email:"nagendra@gmail.com",age:"21",gender:"male",status:<ToggleSwitch label={"4"}/>}]
          return(
            <>
              <div className='user-table'>
              <table cellSpacing={0} cellPadding={0}>
                <thead>
                  <tr>
                  <th>User Name</th>
                  <th>Password</th>
                  <th>Name</th>
                  <th>Mobile Number</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Gender</th>
                  {/* <th>Status</th> */}
                  </tr>
                </thead>
                <tbody>
                  {data.map((i)=>{
                    return(
                      <>
                      <tr key={i.user_id}>
                        <td>{i.user_name}</td>
                        <td>{i.password}</td>
                        <td>{i.name}</td>
                        <td>{i.mobile_number}</td>
                        <td>{i.email}</td>
                        <td>{i.age}</td>
                        <td>{i.gender}</td>
                        {/* <td className='icon'>{i.status}</td> */}
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
  const [username,setUserName]=useState();
  const [password,setPassword]=useState();
  const [name,setName]=useState();
  const [mobileNumeber,setMobileNumber]=useState();
  const [email,setEmail]=useState();
  const [age,setAge]=useState();
  const [gender,setGender]=useState();
  const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/api/data",{username,password,name,mobileNumeber,email,age,gender})
        .then(result=>console.log(result))
        .catch(err=>console.log(err))
  }

  return(
    <>
        <div className='user-form'>      
            <form >
              <div className='details'>
                <div className='elements'>
                  <label htmlFor="username">User Name:</label><br/>
                  <input type="text" id="username" name="username" value={username} placeholder='enter here' className='info' onChange={(e)=>setUserName(e.target.value)} /><br />
                </div>
                  <div className='elements'>
                  <label htmlFor="name">Password:</label><br/>
                  <input type="password" id="password" name="password" value={password} placeholder='enter here' className='info' onChange={(e)=>setPassword(e.target.value)} /><br />
                  </div>
                  <div className='elements'>
                  <label htmlFor="name">Name:</label><br/>
                  <input type="text" id="name" name="name"  value={name} placeholder='enter here' className='info' onChange={(e)=>setName(e.target.value)}/><br />
                  </div>
                  <div className='elements'>
                  <label htmlFor="name">Mobile Number:</label><br/>
                  <input type="text" id="mobilenumber" name="mobilenumber" value={mobileNumeber} placeholder='enter here' className='info' onChange={(e)=>setMobileNumber(e.target.value)} /><br />
                  </div> 
                  <div className='elements'>                                
                  <label htmlFor="email">Email:</label><br/>
                  <input type="email" id="email" name="email" placeholder='enter here' value={email} className='info' onChange={(e)=>setEmail(e.target.value)}/><br />  
                  </div> 
                  <div className='elements'>
                  <label htmlFor="name">Age:</label><br/>
                  <input type="number" id="age" name="age" placeholder='enter here' value={age}  className='info' onChange={(e)=>setAge(e.target.value)}/><br />
                  </div>
                  <div className='elements'>
                  <label htmlFor="name">Gender:</label><br/>
                  <input type="text" id="gender" name="gender" placeholder='enter here' value={gender} className='info' onChange={(e)=>setGender(e.target.value)}/><br />
                  </div><br/>
                  
                  </div>
                  <button className='submit-btn' type='submit' onSubmit={handleSubmit}>Submit</button>
                    
                                    
      </form>
    </div>
    </>
  )
}
