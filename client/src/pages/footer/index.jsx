import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPhoneSharpIcon from '@mui/icons-material/ContactPhoneSharp';
import AccessibleForwardSharpIcon from '@mui/icons-material/AccessibleForwardSharp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '3rem',
  transition: 'height 0.3s',
};

export default function Footer() {
  const [value, setValue] = React.useState('recents');
  const [expanded, setExpanded] = React.useState(false); // add state for expansion

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  function navigateTo(path) {
    window.location.href = path;
  }

  if (window.location.pathname === '/enter-ai' || window.location.pathname === '/secretary' || window.location.pathname === '/homePage' || window.location.pathname === '/') {
    return null;
  }
  const footerClass = expanded ? 'expanded' : '';

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value}
      onChange={handleChange}
      style={{ ...footerStyle, height: expanded ? '6rem' : '3rem' }}
      onClick={handleExpand}
      className={footerClass}
    >
      <BottomNavigationAction
        label="Regulations"
        value="regulations"
        icon={<ConstructionSharpIcon />}
        onClick={() => navigateTo(`/regulations`)}
      >
        <Typography variant="caption" color="text.secondary" align="center">
          Recent Posts
        </Typography>
      </BottomNavigationAction>
      <BottomNavigationAction
        label="Branches"
        value="branches"
        icon={<LocationOnIcon />}
        onClick={() => navigateTo(`/gymBranchList`)}
      >
        <Typography variant="caption" color="text.secondary" align="center">
          our Branches
        </Typography>
      </BottomNavigationAction>
      <BottomNavigationAction
        label="Accessibility "
        value="Accessibility "
        icon={<AccessibleForwardSharpIcon />}
        onClick={() => navigateTo(`/accessibilityStatement`)}
      >
        <Typography variant="caption" color="text.secondary" align="center">
        Accessibility 
        </Typography>
      </BottomNavigationAction>
      <BottomNavigationAction
        label="Concat Us"
        value="Concat Us"
        icon={<ContactPhoneSharpIcon />}
        onClick={() => navigateTo(`/sendReview`)}
        // onClick={()=>{<FormDialog/>}}
      >
        <Typography variant="caption" color="text.secondary" align="center">
        Concat Us
        </Typography>
      </BottomNavigationAction>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
    </BottomNavigation>
  );
}
