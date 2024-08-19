import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import {BrowserRouter,Routes, Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements} from 'react-router-dom';
import {Box} from '@mui/material'
import {
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  Layout,
} from './Components'
const WildcardRedirect = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // Example logic to check if the path ends with "/video/:id"
  React.useEffect(() => {
    const regex = /\/video\/[a-zA-Z0-9_-]+$/
    if (regex.test(location.pathname)) {
      const id = location.pathname.split('/').pop()
      navigate(`/video/${id}`, { replace: true })
    }
  }, [location, navigate])

  return <div>Redirecting...</div>
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" exact element={<Feed />} />
      <Route path="video/:id" element={<VideoDetail />} />
      <Route path="channel/:id" element={<ChannelDetail />} />
      <Route path="search/:searchTerm" element={<SearchFeed />} />
      <Route path="search/:searchTerm/video/:id" element={<VideoDetail />} />
      <Route path="*" element={<WildcardRedirect />} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

// older version
// const App = () => {
//   return (
//     <BrowserRouter>
//       <Box sx={{ backgroundColor: '#000' }}>
//         <Navbar/>
//         <Routes>
//           <Route path="/" exact element={<Feed />} />
//           <Route path="/video/:id" element={<VideoDetail />} />
//           <Route path="/channel/:id" element={<ChannelDetail />} />
//           <Route path="/search/:searchTerm" element={<SearchFeed />} />
//         </Routes>
//       </Box>
//     </BrowserRouter>
//   )
// }

export default App