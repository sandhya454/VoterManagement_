import React ,{useState}from 'react';
import { FaTrash} from 'react-icons/fa';
import { CiCirclePlus } from "react-icons/ci";
import '../Booths/BoothList.scss';

export default function BoothList() {
  const [showBoothList,setShowBoothList]=useState(true);
  const [boothVisible,setBoothVisible]=useState(true);
  const [buttonVisible,setButtonVisible]=useState(false)
  const createBoothForm=()=>{
    setShowBoothList(!showBoothList)
    setBoothVisible(false);
    setButtonVisible(true)
  } 
const booths=()=>{
  setShowBoothList(true)
  setButtonVisible(false)
  setBoothVisible(true)
}

  return (
    <>
        <div className='booth-list'>
              <h2 onClick={booths}>Constituency</h2>             
              <div className='booths'>
              {showBoothList?<ShowBooths/>:<CreateBooth/>}              
              {boothVisible && <div className='additional-booth' onClick={createBoothForm}>
                      <span ><CiCirclePlus /></span>
                          <p>Create Booth</p>
                    </div>}</div>
                  <div className="form">
                          {buttonVisible &&  <button className='btn' onClick={booths}>Save</button>}
                  </div>
                    
              </div>       
    </>
  )
}

const ShowBooths=()=>{
  const booths=[{id:1,booth:"1",icon:<FaTrash/>},{id:2,booth:"2",icon:<FaTrash/>},
                {id:3,booth:"3",icon:<FaTrash/>},{id:4,booth:"4",icon:<FaTrash/>},
                {id:5,booth:"5",icon:<FaTrash/>},{id:6,booth:"6",icon:<FaTrash/>},
                {id:6,booth:"5",icon:<FaTrash/>},{id:7,booth:"6",icon:<FaTrash/>},
                {id:6,booth:"5",icon:<FaTrash/>},{id:7,booth:"6",icon:<FaTrash/>},
                {id:6,booth:"5",icon:<FaTrash/>},{id:7,booth:"6",icon:<FaTrash/>},
                {id:6,booth:"5",icon:<FaTrash/>},{id:7,booth:"6",icon:<FaTrash/>},
                {id:6,booth:"5",icon:<FaTrash/>},{id:7,booth:"6",icon:<FaTrash/>}]        
  return(
    <>                
                    {booths.map((i)=>{
                      return(
                        <>
                          <div className='list'>                            
                                  <h3>{i.booth}</h3>
                                  <span><p className='icon'>{i.icon}</p></span>
                                  <p>Ward:{i.id}</p>                                  
                          </div>
                        </>
                      )
                    })}
                   
    </>
  )
};
const CreateBooth=()=>{  
      return(
        <>
        <form>         
            <select name="booths" id="">                  
                  <option value="booth1">Booth Number 1</option>
                  <option value="booth2">Booth Number 2</option>
                  <option value="booth3">Booth Number 3</option>
                  <option value="booth4">Booth Number 4</option>
                  <option value="booth5">Booth Number 5</option>
                  <option value="booth6">Booth Number 6</option>
            </select>
        </form>
       
        </>
      )
};
