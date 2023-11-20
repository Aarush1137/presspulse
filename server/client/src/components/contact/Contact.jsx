
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email, WhatsApp } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://i.pinimg.com/564x/29/53/da/2953da67745837caf8c99c09ccd35a2f.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px top -100px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;


const Contact = () => {
    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Get In Touch!<br />We value your feedback, inquiries, and collaboration opportunities. Please use the contact details to get in touch with us.</Typography>    
                <Text variant="h5">
                    
                    <Link href="https://instagram.com/anshika7_19?igshid=YTQwZjQ0NmI0OA==" color="inherit" target="_blank" margin-right="10%">
                        <Instagram/>
                    </Link>
                    
                    <Link href="mailto:jaiswalanshika50@gmail.com?Subject=This is a subject" target="_blank" color="inherit" margin-right="2%">
                        <Email />
                    </Link>
                    <Link href="Wa.me/+917722890254" target="_blank" color="inherit" margin-right="2%">
                        <WhatsApp />
                    </Link>
                    <br />
                    Phone No: 8975942603 , 7722890254

                </Text>
            </Wrapper>
        </Box>
    );
}

export default Contact;