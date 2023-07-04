import { Avatar, Box, Link, Typography } from "@mui/material";
import {
    LIGHT_GREY_BG,
    PINK,
    POLYGON_BG,
    POLYGON_SHADOW,
    WHITE,
} from "../../utils/styles";
import Container from "../../Layout/Container/Container";
import { useMediaQuery } from "@mui/material";
import { ColoredButton } from "../../common/ColoredButton/ColoredButton";
import {
    EMAIL,
    MOBILE_BREAKPOINT,
    SMALL_DESKTOP_BREAKPOINT,
    SMALL_MOBILE_BREAKPOINT,
    SOCIAL_MEDIA,
    circleBaseStyles,
    circleStyle,
    polygonBaseStyles,
    spanStyle,
} from "../../utils/constants";
import SocialMedia from "../../common/SocialMedia/SocialMedia";

const homeStyle = {
    background: LIGHT_GREY_BG,
    color: WHITE,
    position: "relative",
    overflow: "hidden",
    paddingBottom: "20px",
};

const sideContainer = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
    zIndex: 3,
    paddingTop: "64px",
};

function Home() {
    const isSmallMobile = useMediaQuery(SMALL_MOBILE_BREAKPOINT);
    const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
    const isSmallDesktop = useMediaQuery(SMALL_DESKTOP_BREAKPOINT);

    return (
        <Box sx={{ ...homeStyle, height: isMobile ? "fit-content" : "100vh" }}>
            <Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            ...sideContainer,
                            paddingTop: isMobile ? "100px" : "0",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ color: PINK }}
                            gutterBottom
                        >
                            Hello, I am
                        </Typography>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: isSmallMobile
                                    ? "60px"
                                    : isMobile
                                    ? "75px"
                                    : "100px",
                                fontWeight: "500",
                                letterSpacing: "0.05em",
                                lineHeight: "112%",
                                maxWidth: isMobile ? "100%" : "50%",
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
                            {SOCIAL_MEDIA.map(({ id, name, image, href }) => {
                                return (
                                    <SocialMedia id={id} name={name} href={href} image={image} />
                                );
                            })}
                        </Box>

                        <Link
                            href={`mailto:${EMAIL}`}
                            variant="body1"
                            underline="hover"
                            sx={{ color: PINK }}
                        >
                            {EMAIL}
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            ...sideContainer,
                            height: isMobile
                                ? "fit-content"
                                : "calc(100vh - 64px)",
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight="500"
                            sx={{ marginBottom: "20px" }}
                        >
                            Frontend Developer
                        </Typography>
                        <Box
                            sx={{
                                maxWidth: isMobile ? "100%" : "350px",
                                color: "lightgrey",
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{ marginBottom: "15px" }}
                            >
                                Based in Ukraine, I am eager to jump start my
                                career to apply my skills in coding.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ marginBottom: "20px" }}
                            >
                                Having a great desire to develop and learn, I am
                                ready to face new challenges. I consider
                                <span style={spanStyle}>
                                    {" "}
                                    persistence
                                </span>,{" "}
                                <span style={spanStyle}>
                                    responsibility
                                </span>{" "}
                                and <span style={spanStyle}>sociability</span>{" "}
                                to be my best traits.
                            </Typography>
                            <ColoredButton
                                variant="contained"
                                size="large"
                                fullWidth={isSmallMobile ? true : false}
                                sx={{ minWidth: "200px" }}
                            >
                                <Link
                                    href="https://drive.google.com/file/d/1W6YUEIjykLQECOP5FlQR7uec0jDboLui/view?usp=sharing"
                                    target="_blank"
                                    sx={{
                                        color: "inherit",
                                        width: "100%",
                                        textDecoration: "none",
                                    }}
                                >
                                    View CV
                                </Link>
                            </ColoredButton>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        ...circleStyle,
                        display: isMobile ? "none" : "block",
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "-50px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            height: "120%",
                        }}
                    >
                        <img
                            style={{ height: "100%", objectFit: "cover" }}
                            src="/avatar.png"
                            alt="avatar"
                        />
                    </Box>
                </Box>
            </Container>

            {/* polygons */}
            <Box
                sx={{
                    display: isSmallDesktop ? "none" : "block",
                }}
            >
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
        </Box>
    );
}

export default Home;
