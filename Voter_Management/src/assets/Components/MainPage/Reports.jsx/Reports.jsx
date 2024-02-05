import React,{useState,useEffect} from 'react'
import './Reports.scss';
import { FiSearch } from "react-icons/fi";

function Reports() {
  const initialdata=[{id:1,Part_No:"01",Voter_Card_No:"123",Voter_Name:"sandhya",Relative_Name:"Dinesh",Relation:"Husband",Age:"26",Gender:"Female",House_No:"1-72",Ward_No:"06",Area:"Tirupathi",Mobile_Number:"8008139991",Caste:"BC-D",Color:"Blue",Problem:"Nothing",Remarks:"No Remarks",Survey:"Survey"},
  {id:2,Part_No:"02",Voter_Card_No:"12235456",Voter_Name:"Dinesh",Relative_Name:" Sandhya",Relation:"wife",Age:"29",Gender:"Male",House_No:"1-72",Ward_No:"06",Area:"Tirupathi",Mobile_Number:"8008139991",Caste:"General",Color:"Blue",Problem:"Nothing",Remarks:"No Remarks",Survey:"Survey"},
  {id:3,Part_No:"02",Voter_Card_No:"12235456",Voter_Name:"Ramesh",Relative_Name:"Nagendra",Relation:"Friend",Age:"22",Gender:"Male",House_No:"1-72",Ward_No:"06",Area:"Tirupathi",Mobile_Number:"8008139991",Caste:"General",Color:"Blue",Problem:"Nothing",Remarks:"No Remarks",Survey:"Survey"},
  {id:4,Part_No:"02",Voter_Card_No:"12235456",Voter_Name:"Nagendra",Relative_Name:"Manikanta",Relation:"Friend",Age:"21",Gender:"Male",House_No:"1-72",Ward_No:"06",Area:"Tirupathi",Mobile_Number:"8008139991",Caste:"General",Color:"Blue",Problem:"Nothing",Remarks:"No Remarks",Survey:"Survey"}]

  const [data, setData] = useState(initialdata);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedPartNo, setSelectedPartNo] = useState('');
  const [selectedAge, setSelectedAge] = useState('');
  const [selectedCaste, setSelectedCaste] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     try{
  //       const response=await fetch(" ");
  //       if(!response.ok){
  //         throw new Error("Failed to fetch")
  //       }
  //       const result=await response.json();
  //       setData(result);
  //     }
  //     catch(error){
  //           console.error("Error fetching Data",error)
  //     }
  //   }
  //   fetchData()
  // },[])

  const filterData = () => {
    let filteredData = initialdata;

    if (selectedGender) {
      filteredData = filteredData.filter(item => item.Gender === selectedGender);
    }

    if (selectedPartNo) {
      filteredData = filteredData.filter(item => item.Part_No === selectedPartNo);
    }
    if(selectedAge){
      filteredData=filteredData.filter(item=> item.Age === selectedAge);
    }
    if(selectedCaste){
      filteredData=filteredData.filter(item=>item.Caste === selectedCaste);
    }
    if(selectedColor){
      filteredData=filteredData.filter(item=>item.Color === selectedColor);
    }
    if(searchTerm){
      filteredData = filteredData.filter(item =>
        Object.values(item).some(value => String(value).toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    setData(filteredData);
  }
  useEffect(() => {
    filterData();
  }, [selectedGender, selectedPartNo, selectedAge, selectedCaste, selectedColor, searchTerm]);

  return (
    <>
          <div className='Reports'>
                <h3>Constituency Reports</h3>
                <div className='Drop-downs'>
                    <div className='gender'>
                        <label htmlFor="gender">Gender:</label><br/>
                          <select name="gender" id="gender" onChange={(e) => setSelectedGender(e.target.value)}>
                            <option value=""></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                    </div>
                    <div className='Part-no'>
                      <label htmlFor="partNo">Part No:</label><br/>
                      <select name="partNo" id="partNo" onChange={(e)=>{setSelectedPartNo(e.target.value)}}>
                        <option value=""></option>
                        <option value="01">01</option>
                        <option value="02">02</option>
                        <option value="03">03</option>
                        <option value="04">04</option>
                      </select>
                    </div>
                    <div className='Age'>
                      <label htmlFor="age">Age:</label><br/>
                      <select name="age" id="age" onChange={(e)=>{setSelectedAge(e.target.value)}}>
                        <option value=""></option>
                        <option value="18">18</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                      </select>
                    </div>
                    <div className='Caste'>
                      <label htmlFor="caste">Caste:</label><br/>
                      <select name="caste" id="caste" onChange={(e)=>{setSelectedCaste(e.target.value)}}>
                        <option value=""></option>
                        <option value="OBC">OBC</option>
                        <option value="General">General</option>
                        <option value="ST">ST</option>
                        <option value="SC">SC</option>
                      </select>
                    </div>
                    <div className='Caste'>
                      <label htmlFor="color">Color:</label><br/>
                      <select name="color" id="color" onChange={(e)=>{setSelectedColor(e.target.value)}}>
                        <option value=""></option>
                        <option value="Blue">Blue</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Red">Red</option>
                        
                      </select>
                    </div>
                </div>
                <div className='Search'>
                  <input type="text"  placeholder='Search here' className='search-bar' onChange={(e) => setSearchTerm(e.target.value)}/>
                  <span className='search-icon'><FiSearch /></span>
                </div>
                <div className='report-table'>
                  <table cellPadding={0}cellSpacing={0}>
                        <thead>
                          <th>S.NO</th>
                          <th>Part_No</th>
                          <th>Voter_Card_No</th>
                          <th>Voter_Name</th>
                          <th>Relative_Name</th>
                          <th>Relation</th>
                          <th>Age</th>
                          <th>Gender</th>
                          <th>House_No</th>
                          <th>Ward_No</th>
                          <th>Area</th>
                          <th>Mobile_Number</th>
                          <th>Caste</th>
                          <th>Color</th>
                          <th>Problem</th>
                          <th>Remarks</th>
                          <th>Survey</th>
                          </thead>
                          <tbody>
                          {data.map((item, index) => (
                                          <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.Part_No}</td>
                                            <td>{item.Voter_Card_No}</td>
                                            <td>{item.Voter_Name}</td>
                                            <td>{item.Relative_Name}</td>
                                            <td>{item.Relation}</td>
                                            <td>{item.Age}</td>
                                            <td>{item.Gender}</td>
                                            <td>{item.House_No}</td>
                                            <td>{item.Ward_No}</td>
                                            <td>{item.Area}</td>
                                            <td>{item.Mobile_Number}</td>
                                            <td>{item.Caste}</td>
                                            <td>{item.Color}</td>
                                            <td>{item.Problem}</td>
                                            <td>{item.Remarks}</td>
                                            <td>{item.Survey}</td>
                                          </tr>
                                        ))}
                          </tbody>
                  </table>

                </div>
            </div> 
    </>
  )
}
export default Reports;
