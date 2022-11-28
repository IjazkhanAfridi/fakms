import { Box, Stack} from '@mui/material';
import Addpost from './components/Addpost';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import { useState } from 'react';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import EnhancedTable from './components/EnhancedTable';

function App() {

  return (
   <BrowserRouter >
      <Box>
        <Navbar />
        <Stack direction='row' spacing={2} justifyContent='space-between'>
          <Sidebar/>
          <Feed />
        <Addpost />
        </Stack>
        <Routes >
          <Route path={'/table'} element={<EnhancedTable />} />
        </Routes>
      </Box>
      </BrowserRouter>
  )
}

export default App;
