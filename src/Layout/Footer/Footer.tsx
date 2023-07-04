import { Box, Divider, Link, Typography, useMediaQuery } from "@mui/material";
import Container from "../Container/Container";
import { GREY, LIGHTGREY, LIGHT_GREY_BG, PINK } from "../../utils/styles";
import Logo from "../../common/Logo/Logo";
import { EMAIL, SMALL_MOBILE_BREAKPOINT, SOCIAL_MEDIA } from "../../utils/constants";
import SocialMedia from "../../common/SocialMedia/SocialMedia";

export default function Footer() {
    const isSmallMobile = useMediaQuery(SMALL_MOBILE_BREAKPOINT);

    return (
        <Box sx={{ background: LIGHT_GREY_BG, padding: "30px 0 0" }}>
            <Container>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: isSmallMobile ? 'column' : 'row',
                        justifyContent: "space-between",
                        gap: '20px',
                        alignItems: isSmallMobile ? 'flex-start' : "center",
                    }}
                >
                    <Box>
                        <Logo />
                        <Typography sx={{ color: GREY, marginTop: "15px" }}>
                        © {new Date().getFullYear()} Mariia Tanchuk
                        </Typography>
                    </Box>
                    <Divider orientation='vertical' sx={{background: GREY}} />
                    <Box>
                        <Box
                            sx={{
                                display: "flex",
                                gap: "25px",
                                marginBottom: "20px",
                            }}
                        >
                            {SOCIAL_MEDIA.map(({ id, name, image, href }) => {
                                return (
                                    <SocialMedia
                                        id={id}
                                        name={name}
                                        href={href}
                                        image={image}
                                    />
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
                </Box>
            </Container>
        </Box>
    );
}
