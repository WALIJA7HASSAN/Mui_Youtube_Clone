import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import {Videos,ChannelCard} from './index'
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const {id} =useParams();
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    fetchFromApi(`channels?part=snippet&id=${id}`).then(
      data=>setChannelDetail(data?.items[0])
    )
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      data=>setVideos(data?.items)
    )
  },[id])
  
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'linear-gradient(90deg, #efd5ff 0%, #515ada 100%)',
            zIndex: 10,
            height: '300px',
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
      </Box>
      <Box display='flex' p='2'>
        <Box sx={{mr:{sm:'100px'}}}>
          <Videos videos={videos}></Videos>
        </Box>
      </Box>
    </Box>
  )
}

export default ChannelDetail