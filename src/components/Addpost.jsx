import styled from '@emotion/styled';
import {
  Add
} from '@mui/icons-material';
import {
  Box,
  Button,
  Fab,
  Modal,
  TextField,
  Tooltip,

} from '@mui/material';
import React from 'react';
import { useState } from 'react';

import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component='svg' sx={{ width: 100, height: 100 }}>
      <Box
        component='polygon'
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points='0,100 50,00, 100,100'
      />
    </Box>
  </Paper>
);

const StyleModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
});
export default function Addpost() {
  const [openmanu, setOpenmanu] = React.useState(false);

  const handleClick = () => {
    setOpenmanu(!openmanu);
  };
  const [open, setOpen] = useState(false);

  return (
    <Box >
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add'
        sx={{
          position: 'fixed',
          bottom: 20,
          right: { xs: 'calc(5px)', md: 40 },
        }}
      >
        <Fab color='primary' aria-label='Add'>
          <Add />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          bgcolor={'#ffeeffcc'}
          color={'text.primary'}
          width={'25%'}
          height={'100vh'}
          p={3}
          borderRadius={5}
        >
        <h3 style={{mt:"15px"}}>FAK ULD Location</h3>
        <Box  sx={{mt:"5px", bgcolor:"white"}}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              {openmanu ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary='MS BULK AREA' />
          </ListItemButton>
          <Collapse in={openmanu} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                }}
              >
                <TextField fullWidth label='Location' id='' required />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  mt: '5px',
                }}
              >
                <TextField
                  fullWidth
                  label='Description'
                  id=''
                  required
                />
                <Box sx={{width:"100%", mt:"5px", display:"flex", justifyContent:"space-between"}}>
                  <Box >
                    <Button > Delete</Button>
                  </Box>
                  <Box >
                    <Button >cancel</Button>
                    <Button  variant="contained" >save</Button>
                  </Box>
                </Box>
              </Box>
            </List>
          </Collapse>
          </Box>
          <Box  sx={{mt:"5px", bgcolor:"white"}}>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              {openmanu ? <ExpandLess /> : <ExpandMore />}
            </ListItemIcon>
            <ListItemText primary='MS BULK AREA' />
          </ListItemButton>
          <Collapse in={openmanu} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                }}
              >
                <TextField fullWidth label='Location' id='' required />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: '100%',
                  mt: '5px',
                }}
              >
                <TextField
                  fullWidth
                  label='Description'
                  id=''
                  required
                />
                <Box sx={{width:"100%", mt:"5px", display:"flex", justifyContent:"space-between"}}>
                  <Box >
                    <Button > Delete</Button>
                  </Box>
                  <Box >
                    <Button >cancel</Button>
                    <Button  variant="contained" >save</Button>
                  </Box>
                </Box>
              </Box>
            </List>
          </Collapse>
          </Box>
        </Box>
      </StyleModal>
    </Box>
  );
}
