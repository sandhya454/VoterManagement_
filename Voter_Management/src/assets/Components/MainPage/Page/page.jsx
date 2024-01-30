import React, { useEffect } from "react";

import './page.css';

function Page(){
    
    return(
        <div>
            <div>
                <div className="dashboard-details-container">
                    
                    <div className="white-back-ground-container">
                        <div className="boths-and-users-container">
                            <div className="booths-containers">
                                <p className="total">Total Booths<br/> 150</p>
                            </div>

                            <div className="booths-containers">
                                <p onClick={()=>{Navigate('/users')}} className="users">Users <br/>10</p>
                            </div>

                            <div className="booths-containers">
                                <p className="allocated">Allocated</p>
                            </div>

                            <div className="booths-containers">
                                <p className="unallocated">Un Allocated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Page;