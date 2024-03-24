import { AppBar, MenuItem, Toolbar, styled} from "@mui/material"



const NavBar = () =>{
  
  const StyledToolbar = styled(Toolbar) (({theme}) => ({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    color: "white",
  }))


    return (
      <>
        <AppBar position="absolute">
          <StyledToolbar>
          <MenuItem>About</MenuItem>
          <MenuItem>Skills</MenuItem>
          <MenuItem>Projects</MenuItem>
          </StyledToolbar>
        </AppBar>      
      </>
    )
  }
  
  export default NavBar
 