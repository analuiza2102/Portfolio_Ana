import { styled } from '@mui/system';

interface StyledButtonProps {
    children: React.ReactNode;
    onClick?: () => void;

}


const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) =>{
  
    const StyledButton = styled("button") (({ theme}) => ({
        backgroundColor: "transparent",
        border: '1px solid white',
        borderRadius: "3px",
        padding: "5px 10px" ,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1rem",
        width: "100%",
        color: "white", 
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            cursor: "pointer",
        },

        }))
    return (
      <>
        <StyledButton onClick={onClick} >{children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  