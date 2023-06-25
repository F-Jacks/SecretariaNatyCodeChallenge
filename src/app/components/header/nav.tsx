"use client"

import React, { useRef } from 'react';
import { Drawer, List, ListItem, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Link from 'next/link';
import { menuLinks } from '@/mocks/header';

interface Props {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<HTMLElement | null>>,
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
}

const SideMenu = (props: Props) => {
  const componentRef = useRef<any>(null);


  const handleDrawerToggle = () => {
    props.setOpen(componentRef.current);
  };

  const handleDrawerClose = () => {
    props.setOpen(null);
  };

  return (
    <div ref={componentRef}>
      <Drawer
        anchor="left"
        open={props.open}
        onClose={handleDrawerToggle}
        sx={{
          display: {
            md: "none"
          },
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            backgroundColor: "black"
          },
        }}
      >
        <nav className='p-2'>
          <IconButton  onClick={handleDrawerClose}>
            <ChevronLeftIcon sx={{ color: "white" }} />
          </IconButton>
          <List>
            {
              menuLinks.map((link, index) => (
                <ListItem key={index}>
                    <Link 
                      className='flex items-center w-full text-base text-white' 
                      href={`/${link}`}
                      onClick={props.handleCloseNavMenu}
                    >
                        {link}
                    </Link>
                </ListItem>
              ))
            }
          </List>
        </nav>
      </Drawer>
    </div>
  );
};

export default SideMenu;
