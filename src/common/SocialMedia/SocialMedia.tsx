import { Link, Avatar } from "@mui/material";

interface ISocialMediaProps {
    id: string | number;
    href: string;
    name: string;
    image: string;
}
const avatarSize = { height: "30px", width: "30px" };

export default function SocialMedia({ id, href, image, name }: ISocialMediaProps) {
    return (
        <Link key={id} href={href} target="_blank">
            <Avatar sx={avatarSize} src={image} alt={name} />
        </Link>
    );
}
