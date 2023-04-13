import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import RedBar from './updateMeasurments';
import ListParticipation from './listPaticipation';
import { useState, useEffect } from 'react';
import Main from './mainSideBar';
import Graph from '../graph';

const drawerWidth = 240;
//new sidebar
export default function ClippedDrawer() {

  const [view, setView] = useState(-1);


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <br />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['participation', 'Progress tracking','personal status' ,'personal work plan'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={() => { setView(index) }}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* <Toolbar /> */}
        {/* {view === 0 && } */}
        {view === -1 && <Main></Main>}
        {view === 0 && <ListParticipation></ListParticipation>}
        {view === 1 && <RedBar></RedBar>}
        {view === 2 && <Graph></Graph>}
        {/* {view === 2 && <ListParticipation></ListParticipation>}
        {view === 3 && <ListParticipation></ListParticipation>} */}
      </Box>
    </Box>
  );
}