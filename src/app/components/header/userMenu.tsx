import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';

interface Props {
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
    anchorElUser: HTMLElement | null,
    handleCloseUserMenu: (event: React.MouseEvent<HTMLElement>) => void,
    settings: string[],
}


const UserMenu = (props: Props) => {
    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
    );
};


export default UserMenu;