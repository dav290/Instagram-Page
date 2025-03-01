import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, IconButton, Typography } from '@mui/material'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import {faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import {FavoriteBorder,Loupe} from '@mui/icons-material'
import Profile from '../assets/Profile.jpeg'
function HeaderSection() {
    const [users,setUsers]=useState(null)

    useEffect(()=>{
     axios.get("https://api.unsplash.com/photos/random?client_id='Your Acces Key from Unsplash'&count=9").then((response)=>{
        console.log("Data",response.data)
        setUsers(response.data)
     }).catch((e)=>console.log('Error fetching Data',e))
    },[])
  return (
    <>
    
    <Box  sx={{ 
     display:'flex',
     justifyContent:'space-between',
     my:2

    }}>
        <div>
   <Typography variant='h2' sx={{fontFamily:"'Pacifico',cursive",fontSize:'40px',mx:2}}>
   Instagram
   </Typography>
   </div>
   <div>
    <IconButton sx={{fontSize:'48px'}}>
      <FavoriteBorder sx={{fontSize:'50px'}}/>
    </IconButton>
    <IconButton>
      <FontAwesomeIcon icon={faFacebookMessenger} fontSize='50px'/>
    </IconButton>
    </div>
    </Box>
   
    <div
    style={{
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex',
        marginTop:'5px'
    }}
    
    >
 <div style={{
        textAlign:'center',
        margin:'10px',
        position:'relative'
    }}>

    <img src={Profile}
    style={{
        borderRadius:'50%',
        width:'100px',
        height:'100px',
        
    }}
    
    />

    
    <Loupe
    sx={{
        position:'absolute',
        bottom:'30px',
        right:'0px',
        color:'#fff',
        backgroundColor:'rgba(0,0,0,0.6)',
        borderRadius:'50%',
        padding:'5px'
    }}
    
    
    />
    <Typography fontWeight='bold'>
        Your Profile
    </Typography>
    </div>
    
    {
        users?.map((item)=>{
            return(
                <div key={item.id} style={{ textAlign:'center',margin:'10px'}}>
                <img 
                src={item.user.profile_image.large}
                alt={item.user.name}
                style={{
                   borderRadius:'50%',
                   border:'3px solid red',
                   width:'100px',
                   height:'100px'
                }}
                
                
                />
                <Typography fontWeight='bold'>
                   {item.user.name}
                </Typography>
               </div>
            )
           
        })
    }
    </div>
    
    </>
  )
}

export default HeaderSection
