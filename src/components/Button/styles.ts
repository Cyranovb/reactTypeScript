import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface StyledButtonProps {
    disabled: boolean
}

export const ButtonComponent = styled.button `
width: 150px;
height: 32px;
background-color: #2392FC;
color: white;
border-radius: 16px;
border-width: 0;
font-size: 12pt;
box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 3px 3px 0 rgba(0, 0, 0, 0.24);
&:hover {
    background-color: #2261FF;
};
&:active {
    box-shadow: 0 5px #666;
    transform: translateY(2px);
}
&:disabled {
    color: black;
    background-color: #D3D3D3;
}
`