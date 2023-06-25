import { menuLinks } from '@/mocks/header';
import Box from '@mui/material/Box';
import Link from "next/link";

interface Props {
    handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
}


const Links = (props: Props) => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuLinks.map((link, index) => (
                <Link
                    key={index}
                    onClick={props.handleCloseNavMenu}
                    href={`/${link}`}
                    className='text-base text-white mx-2' 
                >
                    {link}
                </Link>
            ))}
        </Box>
    );
};


export default Links;