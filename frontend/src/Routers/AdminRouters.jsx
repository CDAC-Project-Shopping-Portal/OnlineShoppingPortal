import React from 'react'
import {Routes,Route} from 'react-router-dom'

const AdminRouters = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Admin/>}></Route>
        {/* add in customer routers also once Routing by other teammate is completed */}
      </Routes>
    </div>
  )
}

export default AdminRouters
