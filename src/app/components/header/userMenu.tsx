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
import { useEffect, useLayoutEffect } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
import { userLinks } from '@/mocks/header';
import headerLoadedAtom from '@/states/header';
import { driverIconSrc, loginIconSrc, riderIconSrc } from '@/mocks/user';


interface Props {
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
    anchorElUser: HTMLElement | null,
    handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
}


const UserMenu = (props: Props) => {
    const [user, setUser] = useRecoilState(userAtom);
    const [cookies, setCookie, removeCookie] = useCookies(['user']);
    const [headerLoaded, setHeaderLoaded] =  useRecoilState(headerLoadedAtom);

    let avatar = {
        alt: user ? user.type : 'user',
        src: user ? 
            user.type === "driver" ? 
                driverIconSrc.src : 
                riderIconSrc.src
            :
            loginIconSrc.src
    }

    useEffect(() => {
        if (!headerLoaded) return;

        if (user) {
            setCookie('user', user);
        } else {
            setCookie('user', null);
        }
    }, [user]);

    useLayoutEffect(() => {
        if ('user' in cookies && cookies.user !== 'null') {
            setUser(cookies.user);
            setHeaderLoaded(true);
        } else {
            setCookie('user', null);
            setHeaderLoaded(true);
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
                    <Avatar
                        alt={`${avatar.alt} interface`}
                        src={avatar.src}
                        sx={{ bgcolor: 'white' }}
                        className='cursor-pointer'
                    />
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
                {userLinks[user ? 'full' : 'empty'].map((link, index) => (
                    <MenuItem
                        key={index} 
                        onClick={props.handleCloseUserMenu}
                        color='white'
                    >
                    <Link href={`/${link}`} className='text-white hover:bg-[rgba(255,255,255,.3)] w-full p-1'>
                        {link}
                    </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
        </CookiesProvider>
    );
};


export default UserMenu;