import {
    IconButton,
    List,
    ListItem,
    Toolbar,
    Typography,
    ListItemButton,
    ListItemText,
    Box,
    Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MENU_ITEMS } from "../../utils/constants";
import { WHITE, PINK } from "../../utils/styles";

export default function Header({
    isMobile,
    open,
    handleDrawerOpen,
}: {
    isMobile: boolean;
    open: boolean;
    handleDrawerOpen: () => void;
}) {
    return (
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link href="#">
                <img src="logo.svg" alt="logo" height="30px" />
            </Link>
            {isMobile ? (
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: "none" }) }}
                >
                    <MenuIcon />
                </IconButton>
            ) : (
                <List sx={{ display: "flex" }}>
                    {MENU_ITEMS.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton>
                                {/* <ListItemText
                                    primary={item}
                                    sx={{
                                        fontFamily: "Source Code Pro",
                                    }}
                                /> */}
                                <Typography
                                    variant="body1"
                                    fontFamily={"Source Code Pro"}
                                    sx={{
                                        color: index === 0 ? PINK : WHITE,
                                    }}
                                >
                                    <Link
                                        sx={{
                                            textDecoration: 'none',
                                            font: 'inherit'
                                        }}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            let i =
                                                document.getElementById(item.toLowerCase());
                                            e.preventDefault(); // Stop Page Reloading
                                            i && i.scrollIntoView({ behavior: "smooth", block: "center" });
                                        }}
                                    >
                                        {item}
                                    </Link>
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            )}
        </Toolbar>
    );
}
