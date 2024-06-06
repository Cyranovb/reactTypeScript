import styled from '@emotion/styled'

export const FactComponent = styled.div `
display:flex;
flex-direction:column;
padding: 20px;
background-color: #595959;
text-align: center;
color: white;
border-radius:30px;
font-size: 14pt;
animation-name: example;
animation-duration: 70ms;

@keyframes example {
    0% { transform: translateY(-20px); }
    5% { transform: translateY(-19px); }
    10% { transform: translateY(-18px); }
    15% { transform: translateY(-17px); }
    20% { transform: translateY(-16px); }
    25% { transform: translateY(-15px); }
    30% { transform: translateY(-14px); }
    35% { transform: translateY(-13px); }
    40% { transform: translateY(-12px); }
    45% { transform: translateY(-11px); }
    50% { transform: translateY(-10px); }
    55% { transform: translateY(-9px); }
    60% { transform: translateY(-8px); }
    65% { transform: translateY(-7px); }
    70% { transform: translateY(-6px); }
    75% { transform: translateY(-5px); }
    85% { transform: translateY(-4px); }
    90% { transform: translateY(-3px); }
    95% { transform: translateY(-2px); }
    100% { transform: translateY(0px); }
}
`