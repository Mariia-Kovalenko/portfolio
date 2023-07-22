import { Box } from "@mui/material"

export default function Container({children, id}: {children?: React.ReactNode, id?: string }) {
    // const isTablet = useMediaQuery("(min-width: 780px)");
    return (
        <Box data-section id={id} sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '20px 15px 50px',
            position: 'relative', 
            zIndex: 1000,
        }}>
            {children}
        </Box>
    )
}