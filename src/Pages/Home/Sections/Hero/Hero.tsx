import { Box, Container, Grid, Typography, styled} from "@mui/material"
import Avatar from "../../../../assets/images/Eu.jpg"
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../Components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../Components/AnimatedBackground/AnimatedBackground";


const Hero = () =>{
  
    const StyledHero = styled("div") (({theme}) => ({

        backgroundColor: theme.palette.background.default,        
        height: "100vh",
        display: "flex",
        alignItems: "center",
         [theme.breakpoints.up("xs")]: {  //mobile
            padding: theme.spacing(2),

        
        },
        
        [theme.breakpoints.up("md")]: {  //desktop
            padding: theme.spacing(4),
        },

    }))

    const StyledImg = styled("img") (() => ({

        width: "75%",
        borderRadius: "60%",    
        border: "1px solid white",
            
        }))

    return (
      <>
      <StyledHero>
        
        <Container maxWidth="lg">

                <Grid container spacing={2}>
                
                    <Grid item xs={12} md={4} >
                        <Box position="relative" >
                                <Box position="absolute" width={"150%"} top={-100} right={0} textAlign= "center" >
                                <AnimatedBackground/>         
                                </Box>
                        </Box>
                            <Box position="relative" textAlign= "center">
                            <StyledImg src={Avatar}  />     
                            </Box>                  
                    </Grid>

                    <Grid item xs={12} md={8} >

                        <Typography variant="h1" textAlign="center" pb={2} > Ana Luiza </Typography> 
                        <Typography variant="h2" textAlign="center"> I'am Computer Scientist </Typography>

                    
                        <Grid container display={"Flex"} justifyContent="center" spacing={3} pt={4}> 

                            <Grid item xs={12} md={4} display={"Flex"} justifyContent="center" >
                            <StyledButton onClick={console.log }>
                                <EmailIcon/> 
                                <Typography> Contact me </Typography>
                            </StyledButton>
                            </Grid>

                            <Grid item xs={12} md={4} display={"Flex"} justifyContent="center"> 
                                    <StyledButton onClick={console.log }> 
                                        <FileDownloadIcon/>
                                        <Typography> Download CV </Typography>
                                        </StyledButton>
                            </Grid>
                        </Grid>
                        
                    </Grid>       
                
                </Grid>

        </Container>
      </StyledHero>
      </>
    )
    }   
  
  export default Hero
  