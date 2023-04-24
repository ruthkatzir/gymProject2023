import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  height: '3rem', // set initial height
  transition: 'height 0.3s', // add transition
};

export default function Footer() {
  const [value, setValue] = React.useState('recents');
  const [expanded, setExpanded] = React.useState(false); // add state for expansion

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleExpand = () => {
    setExpanded(!expanded); // toggle expansion state
  };

  function navigateTo(path) {
    window.location.href = path;
  }

  if (window.location.pathname === '/enterAi' ||window.location.pathname === '/Secretary' ) {
    return null;
}
  const footerClass = expanded ? 'expanded' : ''; // add class based on state

  return (
    <BottomNavigation
      sx={{ width: 500 }}
      value={value}
      onChange={handleChange}
      style={{ ...footerStyle, height: expanded ? '6rem' : '3rem' }} // add height based on state
      onClick={handleExpand} // add onClick to toggle expansion
      className={footerClass} // add class based on state
    >
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
        onClick={() => navigateTo(`/regulations`)}
      >
        <Typography variant="caption" color="text.secondary" align="center">
          Recent Posts
        </Typography>
      </BottomNavigationAction>
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
        onClick={() => navigateTo(`/gymBranchList`)}
      >
        <Typography variant="caption" color="text.secondary" align="center">
          My Favorites
        </Typography>
      </BottomNavigationAction>
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
        onClick={() => navigateTo(`/accessibilityStatement`)}
      >
        <Typography variant="caption" color="text.secondary" align="center">
          Nearby Places
        </Typography>
      </BottomNavigationAction>
      <BottomNavigationAction
        label="Folder"
        value="folder"
        icon={<FolderIcon />}
      >
        <Typography variant="caption" color="text.secondary" align="center">
          My Folder
        </Typography>
      </BottomNavigationAction>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </Typography>
    </BottomNavigation>
  );
}
