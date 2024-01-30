import React from 'react';
import '../Booths/Booths.scss';
import { useNavigate } from 'react-router-dom';

export default function Booths() {
  const navigate=useNavigate()
  const booths=[{id:1,date:"jan27,2024",name:"P.Nagendra",booths:"8",mobilenumber:"987654332"},
  {id:2,date:"jan27,2024",name:"P.Nagendra",booths:"8",mobilenumber:"987654332"},
  {id:3,date:"jan27,2024",name:"P.Nagendra",booths:"8",mobilenumber:"987654332"},
  {id:4,date:"jan27,2024",name:"P.Nagendra",booths:"8",mobilenumber:"987654332"}]
  const boothList=()=>{
    navigate("boothlist")
  }
  return (
    <>
          <div className='constituency'>
              <h2>Constituency</h2>
              <div className='allocated-booths'>
                  {booths.map((i)=>{
                    if(i.id%2===0){
                      return(
                        <>
                          <div className='cards'>
                        <div className='blue'></div>
                        <div className='date'>{i.date}</div>
                        <div className='username'>{i.name}</div>
                        <div className='booths'><span>Booths</span><span className='num'>{i.booths}</span></div>
                        <div className='mobileNumber'><span>Mobile Number</span><span className='cellNum'>{i.mobilenumber}</span></div>
                        <button onClick={boothList}>+Allocate</button>
                        </div>
                        </>
                      )
                    }else{
                      return(
                        <>
                        <div className='cards'>
                        <div className='orange'></div>
                        <div className='date'>{i.date}</div>
                        <div  className='username'>{i.name}</div>
                        <div className='booths'><span>Booths</span><span className='num'>{i.booths}</span></div>
                        <div className='mobileNumber'><span>Mobile Number</span><span className='cellNum'>{i.mobilenumber}</span></div>
                        <button onClick={boothList}>+Allocate</button>
                        </div>
                        </>
                      )
                    }
                  })}
              </div>
          </div>
    </>
  )
}
