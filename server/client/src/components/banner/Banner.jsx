
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://i.pinimg.com/564x/87/ef/f6/87eff66cbc6ec6852c508891372ec29a.jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    font-weight:bold;
    color: black;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    color: white;
    font-weight:bold;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>Press Pulse</Heading>
            <SubHeading>Your News,Your Voice</SubHeading>
        </Image>
    )
}

export default Banner;