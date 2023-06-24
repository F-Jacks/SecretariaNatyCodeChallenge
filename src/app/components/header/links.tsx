import Box from '@mui/material/Box';
import Link from "next/link";

interface Props {
    pages: string[],
    handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void,
}


const Links = (props: Props) => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {props.pages.map((page) => (
            <Link
                key={page}
                onClick={props.handleCloseNavMenu}
                href={`/${page}`}
                className='text-base text-white mx-2' 
            >
                {page}
            </Link>
            ))}
        </Box>
    );
};


export default Links;