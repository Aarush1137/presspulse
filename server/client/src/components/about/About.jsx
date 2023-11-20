
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://i.pinimg.com/564x/b5/f6/6e/b5f66e3b47bb7af3ec29fcb1834913a9.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
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

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Who Are We?</Typography>
                <Text variant="h5">Welcome to PressPulse, where voices converge to shape the narrative. We are a dynamic community of passionate writers, journalists, and storytellers. Our platform is a melting pot of diverse perspectives, fostering dialogue and understanding<br /><br />
                Join us in the pursuit of insightful news, compelling stories, and a shared commitment to informing and inspiring. Together, we redefine the power of words in shaping the world around us.   
                </Text>
                <Text variant="h5">
                    Need something to submit or simply want to know what the world's been upto?<br /> Reach out to us.<br />
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://instagram.com/anshika7_19?igshid=YTQwZjQ0NmI0OA==" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send us an Email 
                        <Link href="mailto:jaiswalanshika50@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;