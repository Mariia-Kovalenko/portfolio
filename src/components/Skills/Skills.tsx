import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "../../Layout/Container/Container";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import LinearProgress from "@mui/material/LinearProgress";
import {
    LIGHT_GREY_BG,
    PINK,
    POLYGON_BG,
    POLYGON_SHADOW,
    WHITE,
} from "../../utils/styles";
import {
    SKILLS,
    circleBaseStyles,
    polygonBaseStyles,
} from "../../utils/constants";

const gridStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: "50px",
    rowGap: "25px",
};

const smallMobileStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
};

const mobileStyles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    columnGap: "50px",
    rowGap: "25px",
};

export default function Skills() {
    const isSmallMobile = useMediaQuery("(max-width:540px)");
    const isMobile = useMediaQuery("(max-width:780px)");

    return (
        <Box
            id='skills'
            sx={{
                background: LIGHT_GREY_BG,
                padding: "10px 0 20px",
                position: "relative",
            }}
        >
            <Container>
                <SectionHeading title="Skills" />
                <Box
                    sx={
                        isSmallMobile
                            ? smallMobileStyles
                            : isMobile
                            ? mobileStyles
                            : gridStyles
                    }
                >
                    {SKILLS.map(({ id, name, value }) => {
                        return (
                            <Box
                                key={id}
                                sx={{ color: PINK, minWidth: "200px" }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    sx={{ color: WHITE }}
                                >
                                    {name}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={value}
                                    color="inherit"
                                />
                            </Box>
                        );
                    })}
                </Box>
            </Container>

            {/* polygons */}
            <Box
                sx={{
                    display: isMobile? "none" : "block",
                    zIndex: 0,
                }}
            >
                <Box
                    sx={{
                        ...polygonBaseStyles,
                        height: 30,
                        width: 30,
                        ...circleBaseStyles,
                        bottom: "30%",
                        left: "23%",
                    }}
                />
                <Box
                    sx={{
                        ...polygonBaseStyles,
                        height: 50,
                        width: 50,
                        ...circleBaseStyles,
                        top: "15%",
                        right: "15%",
                    }}
                />
                <Box
                    sx={{
                        ...polygonBaseStyles,
                        bottom: "15%",
                        left: "3%",
                        transform: "rotate(20deg)",
                    }}
                >
                    <img src="/curves.svg" alt="" />
                </Box>
                <Box
                    sx={{
                        ...polygonBaseStyles,
                        right: "8%",
                        bottom: "10%",
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
                        right: "30%",
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
                        top: "20%",
                        left: "5%",
                        transform: "rotate(-20deg)",
                    }}
                />
            </Box>
        </Box>
    );
}
