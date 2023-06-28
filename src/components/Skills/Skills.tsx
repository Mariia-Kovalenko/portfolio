import { Box, Typography, useMediaQuery } from "@mui/material";
import Container from "../../Layout/Container/Container";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import LinearProgress from "@mui/material/LinearProgress";
import { LIGHT_GREY_BG, PINK, WHITE } from "../../utils/styles";
import { SKILLS, circleBaseStyles, polygonBaseStyles } from "../../utils/constants";

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
        <Box sx={{ background: LIGHT_GREY_BG, padding: '10px 0 20px' }}>
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
        </Box>
    );
}
