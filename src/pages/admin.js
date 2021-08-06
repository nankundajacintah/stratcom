import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import "./CSS/Admin.css"
function Admin() {
    return (
        <div>
            {/*header */}
            <div className="admin__header">
                <Header/>
            </div>
            {/*header */}
            <div className="admin__app">
                <div className="admin__sidebar">
                   <Sidebar/>
                </div>
                 <div className="admin__body">
                          AM BODY
                 </div>
            </div>
            
        </div>
    )
}

export default Admin
