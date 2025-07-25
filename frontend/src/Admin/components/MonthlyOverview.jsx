import { AccountCircle } from '@mui/icons-material'
import SettingsCellIcon from '@mui/icons-material/SettingsCell';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'

const salesData=[
    {
        stats:'245k',
        title:"Sales",
        color:"primary",
        icons:<TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
     {
        stats:'25k',
        title:"Customer",
        color:"success",
        icons:<AccountCircle sx={{fontSize:"1.75rem"}}/>
    },
     {
        stats:'1.54k',
        title:"Products",
        color:"warning",
        icons:<SettingsCellIcon sx={{fontSize:"1.75rem"}}/>
    },
     {
        stats:'88k',
        title:"Revenue",
        color:"info",
        icons:<AttachMoneyIcon sx={{fontSize:"1.75rem"}}/>
    }
]

const renderStats=()=>{
    return salesData.map((item,index)=>(
        <Grid item xs={12} sm={3} key={index}>
            <Box sx={{
                display:"flex",alignItems:'center'
            }}>
                <Avatar variant='rounded' sx={{
                    mr:3,
                    width:44,
                    height:44,
                    boxShadow:3,
                    color:"white",
                    background:`${item.color}`
                }}>
{item.icons}                                                       /*check for error here*/
                </Avatar>
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography variant='caption'>{item.title}</Typography>
                    <Typography variant='h6'>{item.stats}</Typography>
                </Box>

            </Box>
        </Grid>
    ))
}

const MonthlyOverview = () => {
  return (
   <Card>
        <CardHeader title="Montly Overview"
        action={
            <IconButton size='small'>
                <MoreVertIcon/>
            </IconButton>
        }
            />

       
   </Card>
  )
}

export default MonthlyOverview
