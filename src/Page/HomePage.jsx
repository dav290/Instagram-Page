import React from 'react'
import HeaderSection from '../Components/HeaderSection'
import { Box } from '@mui/material'
import BodySection from '../Components/BodySection'

function HomePage() {
  return (
    <>
    <Box sx={{width:'100%',height:'auto',}}>
    <HeaderSection/>
    <BodySection/>
    </Box>
    </>
  )
}

export default HomePage