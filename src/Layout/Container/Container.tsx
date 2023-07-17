import { Box } from "@mui/material"

export default function Container({children, id}: {children?: React.ReactNode, id?: string }) {
    // const isTablet = useMediaQuery("(min-width: 780px)");
    return (
        <Box id={id} sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px 30px',
            position: 'relative', 
            zIndex: 1000,
        }}>
            {children}
        </Box>
    )
}