import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useMediaQuery } from "@mui/material";
import Header from "../Header/Header";
import { DARK_GREY_BG, LIGHT_GREY_BG, WHITE } from "../../utils/styles";
import { MENU_ITEMS } from "../../utils/constants";
import { useEffect } from "react";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: 0,
    marginRight: -drawerWidth,
    ...(open && {
        marginRight: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
    position: "absolute",
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
}));

export default function PageLayout({
    children,
}: {
    children?: React.ReactNode;
}) {
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery("(max-width:780px)");

    useEffect(() => {
        if (!isMobile && open) {
            setOpen(false);
        }
    }, [isMobile]);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: "flex", position: "relative", overflowX: "hidden" }}>
            <AppBar
                position="fixed"
                open={open}
                sx={{ background: "none", color: WHITE, boxShadow: "none" }}
            >
                <Header
                    isMobile={isMobile}
                    open={open}
                    handleDrawerOpen={handleDrawerOpen}
                ></Header>
            </AppBar>
            <Main open={open}>{children}</Main>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                    },
                    position: open ? "absolute" : "relative",
                }}
                PaperProps={{
                    sx: {
                        background: DARK_GREY_BG,
                        color: WHITE,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton
                        onClick={handleDrawerClose}
                        sx={{ color: WHITE }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DrawerHeader>
                <List>
                    {MENU_ITEMS.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                <Typography
                                    variant="h6"
                                    textTransform={"uppercase"}
                                    fontFamily={"Source Code Pro"}
                                >
                                    {item}
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
