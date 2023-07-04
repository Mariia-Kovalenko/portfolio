import styled from "@emotion/styled";
import { PINK } from "../../utils/styles";
import { Button } from "@mui/material";

export const ColoredButton = styled(Button)({
    border: `1.5px solid ${PINK}`,
    color: PINK,
    backgroundColor: 'transparent',
    transition: '0.3',
    boxShadow: 'none',
    "&:hover": {
        backgroundColor: '#FFBACB',
        border: `1.5px solid ${PINK}`,
        boxShadow: "none",
        background: 'rgba(255, 135, 164, 0.3)',
    },
});