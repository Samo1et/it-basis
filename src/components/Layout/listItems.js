import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'gatsby'


export const LinkItem = ({activePath, pathname, title, icon, }) => {
  const isActive = activePath === pathname;
  return (
    <Link to={pathname}>
      <ListItem button selected={isActive} ContainerComponent={'li'}>
          <ListItemIcon color={isActive ? 'primary' : 'default'}>
              {icon}
          </ListItemIcon>
          <ListItemText primary={title} color={isActive ? 'primary' : 'default'}/>
      </ListItem>
      </Link>
  );
};