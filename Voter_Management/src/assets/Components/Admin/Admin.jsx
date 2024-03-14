import React from 'react'
import './Admin.css'
import Logo from '../../Images/people_pulse_logo.png'
import { Input,Popover,Popconfirm } from 'antd';
import {
   DashboardTwoTone,
   HddTwoTone,
   UsergroupAddOutlined,
   HomeTwoTone,
   LogoutOutlined,
   UserOutlined,
   IdcardTwoTone,
  } from '@ant-design/icons';

import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate=useNavigate()

    const confirm =()=>{
        navigate('/')
    }
  return (
    <div className='AdminAccessMainCont'>

        <div className='SideBarMainCont'>

            <div className='LogoCont'>
                <img src={Logo}/>
            </div>

            <div className='SideBar'>
                <div className='SideBarOpt'>
                 <DashboardTwoTone />
                   <div>
                    Dashboard
                   </div>
                </div>
                <div className='SideBarOpt'>
                 <UsergroupAddOutlined />
                   <div>
                    users
                   </div>
                </div>
                <div className='SideBarOpt'>
                <HddTwoTone />
                   <div>
                    Booths
                   </div>
                </div>
                <div className='SideBarOpt'>
                <HomeTwoTone />
                   <div>
                    Villages
                   </div>
                </div>
                <div className='SideBarOpt'>
                 <IdcardTwoTone />
                   <div>
                    Surveys
                   </div>
                </div>
                

            </div>
            
        </div>

        <div className='MainCont'>
            <div className='NavBar'>
                 <Input placeholder="Search here" className='NavSearch'/>
                 <div className='UserLogout'>

                
                <Popover content={'manikanta'} title='admin'>
                    <UserOutlined style={{ fontSize: '30px' }} className='UserIcon' />
                 </Popover>
                 <Popconfirm
                    title="Logout"
                    description="Are you sure to Logout?"
                    onConfirm={confirm}
                   
                    okText="Yes"
                    cancelText="No"
                >

                 <LogoutOutlined style={{fontSize:'30px'}} className='LogoutIcon'/>
                 </Popconfirm>
                 </div>



            </div>
            <div className='HeroCont'>


            </div>
            <div className='FooterCont'>

            </div>

        </div>

    </div>
  )
}

export default Admin