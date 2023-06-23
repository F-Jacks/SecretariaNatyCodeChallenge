"use client"

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={handleDrawerToggle}
      >
        <nav className='w-full'>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            <ListItem>
                <Link className='flex items-center w-full text-base text-black' href={"/"}>
                    <ListItemIcon>
                        {"icon"}
                    </ListItemIcon>
                    {"text"}
                </Link>
            </ListItem>
          </List>
        </nav>
      </Drawer>
    </div>
  );
};

export default SideMenu;
