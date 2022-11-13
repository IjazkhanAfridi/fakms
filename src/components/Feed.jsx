import { MoreVert } from '@mui/icons-material';
import { Box, Button, Card, CardHeader, IconButton } from '@mui/material';
import React from 'react';

export default function Feed() {
  return (
    <Box
      p={2}
      sx={{
        width: '100%',
        bgcolor: 'lightgray',
        height: '100vh',
      }}
    >
    <Box sx={{ml:"300px"}}>
    <Box sx={{mt:"20px"}}>
      <h2>Adminstration</h2>
      <Box sx={{display:"flex",}}>
        <Button sx={{textDecoration:"none"}}>Group</Button>
        <Button>Users</Button>
        <Button>Fleets and spare Availabity</Button>
        <Button>Master Data</Button>
      </Box>
    </Box>
      <h4>Master Data category</h4>
      <Card sx={{ margin: "5px", width: '350px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={'FAK ULD Location'}
        />
      </Card>
      <Card sx={{ margin: "5px", width: '350px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={'FAK ULD Location'}
        />
      </Card>
      <Card sx={{ margin: "5px", width: '350px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={'FAK ULD Location'}
        />
      </Card>
      <Card sx={{ margin: "5px", width: '350px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={'FAK ULD Location'}
        />
      </Card>
      <Card sx={{ margin:"5px", width: '350px' }}>
        <CardHeader
          action={
            <IconButton aria-label='settings'>
              <MoreVert />
            </IconButton>
          }
          title={'FAK ULD Location'}
        />
      </Card>
      </Box>
    </Box>
  );
}
