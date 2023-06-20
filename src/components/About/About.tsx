import { Box, Container, Typography, Link, useMediaQuery } from "@mui/material";
import { CODE_FONT, LIGHTGREY, PINK, WHITE } from "../../utils/styles";
import LinkIcon from "@mui/icons-material/Link";
import { CERTIFICATES, EDUCATION } from "../../utils/constants";
import { spanStyle } from "../Home/Home";
import SectionHeading from "../../common/SectionHeading/SectionHeading";

const Title = ({ title }: { title: string }) => {
    return (
        <Box>
            <Typography variant="h6">{title}</Typography>
            <Box
                sx={{
                    height: "2px",
                    width: "50%",
                    minWidth: "150px",
                    background: PINK,
                    marginBottom: "15px",
                }}
            />
        </Box>
    );
};

function AboutSection({
    isMobile,
    children,
}: {
    isMobile: boolean;
    children?: React.ReactNode;
}) {
    return (
        <Box sx={{ flex: `1 1 ${isMobile ? "50%" : "30%"}`, COLOR: 'inherit' }}>{children}</Box>
    );
}

function Education({
    degree,
    faculty,
    university,
    years,
}: {
    degree: string;
    faculty: string;
    university: string;
    years: string;
}) {
    return (
        <Box>
            <Typography variant="body1" fontWeight={600} gutterBottom>
                {degree}
            </Typography>
            <Typography variant="body2" fontStyle="italic" gutterBottom>
                {faculty}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    gap: "15px",
                    marginBottom: "25px",
                }}
            >
                <Typography>{university}</Typography>
                <Typography>{years}</Typography>
            </Box>
        </Box>
    );
}

function Certificate({
    link,
    title,
    date,
}: {
    link: string;
    title: string;
    date: string;
}) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "7px",
                }}
            >
                <LinkIcon sx={{ transform: "rotate(-45deg)" }} />
                <Link
                    underline="none"
                    sx={{
                        color: "lightgrey",
                        textDecoration: "underline",
                        cursor: "pointer",
                    }}
                    href={link}
                    target="_blank"
                >
                    {title}
                </Link>
            </Box>
            <Typography variant="body1" fontStyle="italic">
                {date}
            </Typography>
        </>
    );
}

export default function About() {
    const isSmallMobile = useMediaQuery("(max-width:540px)");
    const isMobile = useMediaQuery("(max-width:780px)");

    return (
        <Container>
            <SectionHeading title='About' />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: isSmallMobile ? "column" : "row",
                    justifyContent: "space-between",
                    gap: "50px",
                    color: LIGHTGREY,
                }}
            >
                <AboutSection isMobile={isMobile}>
                    <Title title="Bio" />
                    <Typography
                        variant="body1"
                        lineHeight={"180%"}
                        gutterBottom
                    >
                        I am a Frontend Developer from Kyiv, Ukraine. I have
                        implemented a few projects using{" "}
                        <span style={spanStyle}>React</span>,{" "}
                        <span style={spanStyle}> Angular</span> and
                        <span style={spanStyle}> NodeJS</span>.
                    </Typography>
                    <Typography variant="body1" lineHeight={"180%"}>
                        I am <span style={spanStyle}> persistant</span>,
                        <span style={spanStyle}> determined</span>,
                        <span style={spanStyle}> confident</span>,
                        <span style={spanStyle}> adaptive </span>
                        and <span style={spanStyle}> sociable</span>.
                    </Typography>
                </AboutSection>
                <AboutSection isMobile={isMobile}>
                    <Title title="Education" />
                    {EDUCATION.map(
                        ({ id, degree, faculty, university, years }) => {
                            return (
                                <Education
                                    key={id}
                                    degree={degree}
                                    faculty={faculty}
                                    university={university}
                                    years={years}
                                />
                            );
                        }
                    )}
                </AboutSection>
                <AboutSection isMobile={isMobile}>
                    <Title title="Certificates" />
                    {CERTIFICATES.map(({id, link, title, date}) => {
                        return (
                            <Certificate key={id} link={link} title={title} date={date} /> 
                        );
                    })}
                </AboutSection>
            </Box>
        </Container>
    );
}
