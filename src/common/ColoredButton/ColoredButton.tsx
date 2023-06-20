import styled from "@emotion/styled";
import { PINK } from "../../utils/styles";
import { Button } from "@mui/material";

export const ColoredButton = styled(Button)({
    color: PINK,
    border: `1px solid ${PINK}`,
    "&:hover": {
        backgroundColor: "rgba(249, 77, 118, 0.1)",
        borderColor: PINK,
        boxShadow: "none",
    },
});