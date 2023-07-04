import { Typography } from "@mui/material";
import { CODE_FONT } from "../../utils/styles";

export default function SectionHeading({ title }: { title: string }) {
    return (
        <Typography
            variant="h4"
            fontFamily={CODE_FONT}
            fontWeight='600'
            sx={{ margin: "30px 0" }}
        >
            {`<${title}/>`}
        </Typography>
    );
}
