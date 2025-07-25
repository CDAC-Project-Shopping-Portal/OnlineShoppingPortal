import React, { useState } from 'react'
import { Routes, useNavigate,Route } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import ArchiveIcon from '@mui/icons-material/Archive';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import ListAltIcon from '@mui/icons-material/ListAlt';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AddIcon from '@mui/icons-material/Add';
import {Box,List,ListItem,ListItemButton,ListItemIcon,Toolbar,useMediaQuery} from '@mui/icons-material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from './components/Dashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';

const menu=[
    {name: "Dashboard",path:"/admin",icon:<DashboardIcon/>},
    {name: "Products",path:"/admin/products",icon:<InventoryIcon/>},
    {name: "Customers",path:"/admin/customers",icon:<FaceRetouchingNaturalIcon/>},
    {name: "Orders",path:"/admin/orders",icon:<ListAltIcon/>},
    {name: "AddProduct",path:"/admin/product/create",icon:<AddIcon/>},
    {name:"",path:""},
]
const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisisble]=useState(false);
    const navigate=useNavigate();

    const drawer=(
        <Box
        sx={{
            overflow:"auto",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-between",
            height:"100%"
        }}
        >
            {isLargeScreen && <Toolbar/>}
            <List>
                <ListItem  disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                           {/* <AccountCircleIcon/> */}
                        </ListItemIcon>
                        <ListItemText>Account</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
  return (
    <div>
      <div className='flex h-[100vh] '>
        <CssBaseLine/>
        <div className='w-[15%] border border-r-gray-300 h-full'>
            {drawer}
          </div>

          <div className='w-[85%]'>
            <Routes>
              <Route path='/' element={<AdminDashboard/>}></Route>
              <Route path='/product/create' element={<CreateProductForm/>}></Route>
              <Route path='/products' element={<ProductsTable/>}></Route>
               <Route path='/orders' element={<OrdersTable/>}></Route>
                <Route path='/customers' element={<CustomersTable/>}></Route>
            </Routes>
          </div>

      </div>
    </div>
  )
}

export default Admin
