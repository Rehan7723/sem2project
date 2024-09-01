import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatAlignJustifySharpIcon from '@mui/icons-material/FormatAlignJustifySharp';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import Person4Icon from '@mui/icons-material/Person4';
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
  const [draw, set] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    set(newOpen);
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
        {/* list#1 onClick={handleClickOpen}*/}
        <ListItem component={Link} to="/profile"   disablePadding>
      <ListItemButton>
              <ListItemIcon>
                <PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
              </ListItemButton>
          </ListItem>

          {/* list #2 */}
          <ListItem component={Link} to='/leave'  disablePadding>
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

          {/* list #5 */}
          <ListItem component={Link} to='/proc' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Person4Icon/>
              </ListItemIcon>
              <ListItemText primary="Your Proctor" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem component={Link} to="/" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
          <Divider />


      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><FormatAlignJustifySharpIcon className='drawer' fontSize='large'/></Button>
      <Drawer open={draw} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}