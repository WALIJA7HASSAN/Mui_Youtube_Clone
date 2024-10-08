import React from 'react'
import { useState, useEffect } from 'react'
import { Box,  Typography } from '@mui/material'
import {  Videos } from './index.jsx'
import { fetchFromApi } from '../utils/fetchFromApi.jsx'
import { useParams } from 'react-router-dom'

const SearchFeed = () => {
  const {searchTerm}=useParams()
 
  const [videos, setVideos] = useState([])
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <Box
      p={2}
      sx={{
        overflow: 'auto',
        height: '90vh',
        flex: 2,
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={2}
        sx={{
          color: 'white',
        }}
      >
        Search Results for:
        <span style={{ color: '#f31503' }}> {searchTerm}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
