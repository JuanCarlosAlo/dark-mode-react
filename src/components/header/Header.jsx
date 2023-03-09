import Toggle from "../toggle/Toggle"
import { StyledDarkModeContainer, StyledHeader } from "./styles"

const Header =()=>{
    return(
        <>  
        <StyledHeader>
        <div>
                <h1>Social Media Dashboard</h1>
                <p>Total Followers 23,004</p>
             </div>

             <StyledDarkModeContainer>
                <p>Dark Mode</p>
                <Toggle/>
             </StyledDarkModeContainer>
             </StyledHeader>
        </>
    )
}

export default Header