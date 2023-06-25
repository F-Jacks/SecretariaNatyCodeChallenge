"use client"

import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import userAtom from '@/states/user';
import { useRecoilState } from 'recoil';

import riderIcon from '/public/imgs/riderIcon.png';
import driverIcon from '/public/imgs/driverIcon.png';
import { useEffect, useLayoutEffect } from 'react';

import { CookiesProvider, useCookies } from 'react-cookie';


interface Props {
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
    anchorElUser: HTMLElement | null,
    handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
    settings: string[],
}


const UserMenu = (props: Props) => {
    const [user, setUser] = useRecoilState(userAtom);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);

    useEffect(() => {
        if (user) {
            setCookie('user', user);
        } else {
            removeCookie('user');
        }
    }, [user]);

    useLayoutEffect(() => {        
        if (cookies.user) {
            setUser(cookies.user);
        }
    }, []);

    return (
        <CookiesProvider>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton 
                    onClick={props.handleOpenUserMenu} 
                    sx={{ p: 0}}
                >
                    {user ? (
                        <Avatar
                            alt={user.type}
                            src={user.type === "driver" ? driverIcon.src : riderIcon.src}
                            sx={{ bgcolor: 'white' }}
                        />
                    ) : (
                        <></>
                    )}
                </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={props.anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(props.anchorElUser)}
                    onClose={props.handleCloseUserMenu}
                    slotProps={{
                        paper: {
                            sx: {
                                backgroundColor: 'black',
                            },
                        },
                    }}
                >
                {props.settings.map((setting) => (
                    <MenuItem 
                    key={setting} 
                    onClick={props.handleCloseUserMenu}
                    color='white'
                    >
                    <Link href={`/${setting}`} className='text-white hover:bg-[rgba(255,255,255,.3)] w-full p-1'>
                        {setting}
                    </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
        </CookiesProvider>
    );
};


export default UserMenu;