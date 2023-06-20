import { Box, useMediaQuery } from "@mui/material"

export default function Container({children}: {children?: React.ReactNode}) {
    // const isTablet = useMediaQuery("(min-width: 780px)");
    return (
        <Box sx={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 15px 20px',
            // border: '1px solid white'
        }}>
            {children}
        </Box>
    )
}