import { Box } from "@mui/material"

export default function Container({children}: {children?: React.ReactNode }) {
    // const isTablet = useMediaQuery("(min-width: 780px)");
    return (
        <Box sx={{
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