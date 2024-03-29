import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Box,
    Link,
    useMediaQuery,
} from "@mui/material";
import Container from "../../Layout/Container/Container";
import SectionHeading from "../../common/SectionHeading/SectionHeading";
import { PROJECTS } from "../../utils/constants";
import {
    CARD_BORDER,
    CARD_SHADOW,
    DARK_GREY_BG,
    LIGHTGREY,
    LIGHT_GREY_BG,
    YELLOW,
} from "../../utils/styles";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import { ColoredButton } from "../../common/ColoredButton/ColoredButton";

interface IProjectCard {
    isMobile: boolean;
    name: string;
    description: string;
    technologies: string[];
    link: string;
    image?: string;
}

function ProjectCard({
    isMobile,
    name,
    description,
    technologies,
    link,
    image,
}: IProjectCard) {
    return (
        <Card
            sx={{
                minWidth: 300,
                backgroundColor: LIGHT_GREY_BG,
                boxShadow: CARD_SHADOW,
                border: CARD_BORDER,
                flex: "1 1 30%",
                color: LIGHTGREY,
            }}
        >
            <CardActionArea
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                }}
            >
                {image ? (
                    <Box sx={{ height: '220px', width: '100%', overflow: 'hidden'}}>
                        <CardMedia
                            component="img"
                            
                            image={image}
                            alt="project-pic"
                            sx={{ 
                                height: '100%',
                                width: '100%',
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.8)"
                                }
                            }}
                        />
                    </Box>
                    
                ) : (
                    <Box
                        sx={{
                            height: "200px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <InsertPhotoOutlinedIcon
                            sx={{ color: DARK_GREY_BG, fontSize: "50px" }}
                        />
                    </Box>
                )}

                <CardContent>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "10px",
                            marginBottom: "10px",
                        }}
                    >
                        {technologies.map((tech, i) => {
                            return (
                                <Typography
                                    key={i}
                                    component="span"
                                    sx={{ fontSize: "12px", color: YELLOW }}
                                >{`${tech}`}</Typography>
                            );
                        })}
                    </Box>
                    <Typography
                        variant="h5"
                        component="div"
                        fontWeight={600}
                        sx={{ marginBottom: "16px" }}
                    >
                        {name}
                    </Typography>
                    <Typography variant="body2" gutterBottom>{description}</Typography>
                </CardContent>
                <CardActions
                    sx={{
                        paddingBottom: "10px",
                        marginTop: "auto",
                    }}
                >
                    <Link
                        href={link}
                        target="_blank"
                        sx={{ 
                            color: "inherit", 
                            textDecoration: "none", 
                        }}
                    >
                        <ColoredButton
                            size="medium"
                            variant="outlined"
                            fullWidth={isMobile ? true : false}
                        >
                            View
                        </ColoredButton>
                    </Link>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}

export default function Projects() {
    const isMobile = useMediaQuery("(max-width:990px)");
    const isSmallMobile = useMediaQuery("(max-width:665px)");

    return (
        <Container data-section id='projects'>
            <SectionHeading title="Projects" />
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                    gap: '30px'
                }}
            >
                {PROJECTS.map(
                    ({ id, name, description, technologies, link, image }) => {
                        return (
                            <ProjectCard
                                key={id}
                                isMobile={isSmallMobile}
                                name={name}
                                description={description}
                                technologies={technologies}
                                link={link}
                                image={image}
                            />
                        );
                    }
                )}
            </Box>
        </Container>
    );
}
