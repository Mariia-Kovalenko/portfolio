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
import { useState, useRef } from "react";

export default function Header({
    isMobile,
    open,
    handleDrawerOpen,
}: {
    isMobile: boolean;
    open: boolean;
    handleDrawerOpen: () => void;
}) {
    // const [activeSection, setActiveSection] = useState<any>(null);
    // const observer = useRef<any>(null);

    // useEffect(() => {
    //     setActiveSection('home');
    //     //create new instance and pass a callback function
    //     observer.current = new IntersectionObserver((entries) => {
    //         const visibleSection = entries.find(
    //             (entry) => { console.log(entry.intersectionRatio); return entry.isIntersecting }
    //             // (entry) => 
    //             // { 
    //             //     console.log(entry)
    //             //     if (entry.intersectionRatio) return entry.intersectionRatio 
    //             // }
    //         )?.target;
    //         //Update state with the visible section ID
    //         console.log(visibleSection)
    //         if (visibleSection) {
    //             setActiveSection(visibleSection.id);
    //         }
    //     });

    //     //Get custom attribute data-section from all sections
    //     const sections = document.querySelectorAll("[data-section]");

    //     sections.forEach((section) => {
    //         observer.current.observe(section);
    //     });
    //     return () => {
    //         sections.forEach((section) => {
    //             observer.current.unobserve(section);
    //         });
    //     };
    // }, []);
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
                                <Typography
                                    variant="body1"
                                    fontFamily={"Source Code Pro"}
                                >
                                    <Link
                                        sx={{
                                            textDecoration: "none",
                                            font: "inherit",
                                            color: WHITE
                                            // color: activeSection === item.toLowerCase() ? PINK : WHITE,
                                        }}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => {
                                            let i = document.getElementById(
                                                item.toLowerCase()
                                            );
                                            e.preventDefault(); // Stop Page Reloading
                                            i &&
                                                i.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start",
                                                });
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
