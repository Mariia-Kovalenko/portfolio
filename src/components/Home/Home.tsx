import { Avatar, Box, Link, Typography } from "@mui/material";
import {
    CODE_FONT,
    LIGHT_GREY_BG,
    PINK,
    POLYGON_BG,
    POLYGON_SHADOW,
    WHITE,
} from "../../utils/styles";
import Container from "../../Layout/Container/Container";
import { useMediaQuery } from "@mui/material";

const homeStyle = {
    background: LIGHT_GREY_BG,
    color: WHITE,
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
};

const circleStyle = {
    width: "800px",
    height: "800px",
    borderRadius: "50%",
    background: POLYGON_BG,
    boxShadow: POLYGON_SHADOW,
    position: "absolute",
    zIndex: 1,
    top: "20%",
    left: "50%",
    transform: "translateX(-50%)",
};

const polygonBaseStyles = {
    position: "absolute",
    zIndex: 0,
};
const circleBaseStyles = {
    borderRadius: "50%",
    background: POLYGON_BG,
    boxShadow: POLYGON_SHADOW,
};

const spanStyle = {
    color: PINK,
};

const avatarSize = { height: "30px", width: "30px" };

const sideContainer = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: 3,
};

function Home() {
    const isMobile = useMediaQuery("(max-width:780px)");
    return (
        <Box sx={homeStyle}>
            <Container>
                <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                    <Box sx={sideContainer}>
                        <Typography variant='h5' sx={{ color: PINK }} gutterBottom>
                            Hello, I am
                        </Typography>
                        <Typography
                            variant='h1'
                            sx={{
                                fontWeight: "500",
                                letterSpacing: "0.05em",
                                lineHeight: "112%",
                                maxWidth: "50%",
                                marginBottom: "25px",
                            }}
                        >
                            Mariia Tanchuk.
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                gap: "30px",
                                marginBottom: "20px",
                            }}
                        >
                            <Avatar
                                sx={avatarSize}
                                src="/github.svg"
                                alt="github"
                            />
                            <Avatar
                                sx={avatarSize}
                                src="/gitlab.svg"
                                alt="gitlab"
                            />
                            <Avatar
                                sx={avatarSize}
                                src="/linkedin.svg"
                                alt="linkedin"
                            />
                        </Box>

                        <Link
                            href="#"
                            variant="body1"
                            underline="hover"
                            sx={{ color: PINK }}
                        >
                            mariya.kovalenko.2000@gmail.com
                        </Link>
                    </Box>

                    <Box sx={sideContainer}>
                        <Typography variant="h5" fontWeight="500">
                            Frontend Developer
                        </Typography>

                        <Box
                            sx={{
                                width: 140,
                                height: 2,
                                background: PINK,
                                margin: "10px 0",
                            }}
                        />
                        <Typography
                            variant="body1"
                            sx={{ maxWidth: "400px", marginBottom: "15px" }}
                        >
                            Based in Ukraine, I am a Frontend Developer, eager
                            to jump start my career to apply my skills in coding
                            and problems troubleshooting.
                        </Typography>
                        <Typography variant="body1" sx={{ maxWidth: "400px" }}>
                            Having a great desire to develop and learn, I am
                            ready to face new challenges. I consider
                            <span style={spanStyle}> persistence</span>,{" "}
                            <span style={spanStyle}>responsibility</span> and{" "}
                            <span style={spanStyle}>sociability</span> to be my
                            best traits.
                        </Typography>
                    </Box>
                </Box>

                <Box sx={circleStyle}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "-50px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: isMobile ? 'none' : 'block'
                        }}
                    >
                        <img src="/avatar.png" alt="avatar" />
                    </Box>
                </Box>
            </Container>

            <Box
                sx={{
                    ...polygonBaseStyles,
                    height: 30,
                    width: 30,
                    ...circleBaseStyles,
                    top: "15%",
                    left: "23%",
                }}
            />
            <Box
                sx={{
                    ...polygonBaseStyles,
                    height: 50,
                    width: 50,
                    ...circleBaseStyles,
                    top: "35%",
                    right: "10%",
                }}
            />
            <Box
                sx={{
                    ...polygonBaseStyles,
                    bottom: "15%",
                    left: "3%",
                }}
            >
                <img src="/curves.svg" alt="" />
            </Box>
            <Box
                sx={{
                    ...polygonBaseStyles,
                    right: "15%",
                    top: "10%",
                }}
            >
                <img src="/curves.svg" alt="" />
            </Box>
            <Box
                sx={{
                    ...polygonBaseStyles,
                    boxShadow: POLYGON_SHADOW,
                    background: POLYGON_BG,
                    clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
                    width: "100px",
                    height: "100px",
                    bottom: "20%",
                    right: "8%",
                    transform: "rotate(20deg)",
                }}
            />

            <Box
                sx={{
                    ...polygonBaseStyles,
                    boxShadow: POLYGON_SHADOW,
                    background: POLYGON_BG,
                    clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
                    width: "100px",
                    height: "100px",
                    top: "33%",
                    left: "2%",
                    transform: "rotate(-20deg)",
                }}
            />
        </Box>
    );
}

export default Home;
