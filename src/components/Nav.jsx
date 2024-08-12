import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatAlignJustifySharpIcon from '@mui/icons-material/FormatAlignJustifySharp';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import SsidChartIcon from '@mui/icons-material/SsidChart';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link } from 'react-router-dom';



import '../styles/Home.css';

export default function Nav() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List component="nav">
     
      <ListItem component={Link} to="/home"   disablePadding>
      <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
              </ListItemButton>
          </ListItem>

      </List>
      
      <Divider />

      <List>
        {/* list#1 */}
      <ListItem disablePadding>
      <ListItemButton >
      <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
      
      </ListItemButton>
            
          </ListItem>

          {/* list #2 */}
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <CalendarMonthIcon/>
              </ListItemIcon>
              <ListItemText primary="Leave" />
            </ListItemButton>
          </ListItem>

          {/* list #3 */}
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SsidChartIcon/>
              </ListItemIcon>
              <ListItemText primary="Results" />
            </ListItemButton>
          </ListItem>

          {/* list #4 */}
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MailIcon/>
              </ListItemIcon>
              <ListItemText primary="Mail" />
            </ListItemButton>
          </ListItem>

      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><FormatAlignJustifySharpIcon className='drawer' fontSize='large'/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}