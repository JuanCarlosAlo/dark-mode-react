import { StyledInput, StyledLabel, StyledSwitch } from "./styles"

const Toggle =()=>{
    return(
        <>
        <StyledSwitch>
            <StyledInput id="toggle" type="checkbox"/>
            <StyledLabel htmlFor="toggle"></StyledLabel>
        </StyledSwitch>
            
        </>
    )
}

export default Toggle