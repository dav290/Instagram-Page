import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import { Avatar, Card, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart, faComment,faPaperPlane} from '@fortawesome/free-regular-svg-icons'
function BodySection() {
    const [users,setUsers]=useState(null)

    useEffect(()=>{
     axios.get("https://api.unsplash.com/photos/random?client_id='Your Access Key from Unsplash'&count=12").then((response)=>{
        console.log("Data",response.data)
        setUsers(response.data)
     }).catch((e)=>console.log('Error fetching Data',e))
    },[])
  return (
    <>
    {
        users?.map((item)=>{
         return(
            <Card key={item.id} sx={{maxWidth:'100%',backgroundColor:'#000'}}>
                           <div style={{
                            display:'flex',
                            alignItems:'center',
                            gap:'10px'
                           }}>
                    <Avatar src={item.user.profile_image.large} sx={{m:2}}/>
                    <Typography fontWeight='bold'>{item.user.name}</Typography>
                           </div>
                           <CardMedia
                           component='img'
                           height='500'
                           image={item.urls.regular}
                           alt={item.alt_description}
                           sx={{borderRadius:'10px'}}
                           
                           />
                           <CardContent>
                            <Typography variant='h6'>
                              {item.alt_description}
                            </Typography>
                           </CardContent>
                           <div style={{
                            display:'flex',
                            justifyContent:'flex-start',
                            padding:'10px'
                           }}>

                         <IconButton>
                            <FontAwesomeIcon icon={faHeart} size='2x'/>
                            <Typography variant='h4' mx={1}>{item.user.total_likes}</Typography>
                         </IconButton>
                         <IconButton>
                            <FontAwesomeIcon icon={faComment} size='2x'/>
                            <Typography variant='h4' mx={1}>{item.user.total_promoted_photos}</Typography>
                         </IconButton>
                         <IconButton>
                            <FontAwesomeIcon icon={faPaperPlane} size='2x'/>
                         </IconButton>

                           </div>
                           
            </Card>
         )
        })
    }
    
    </>
  )
}

export default BodySection
