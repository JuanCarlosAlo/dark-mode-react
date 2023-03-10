import { StyledInput, StyledLabel, StyledSwitch } from "./styles"

const Toggle =({dark,setDark})=>{
    
    return(
        <>
        <StyledSwitch>
            <StyledInput id="toggle" type="checkbox"/>
            <StyledLabel htmlFor="toggle" onClick={()=>{
                setDark(!dark)
            }}></StyledLabel>
        </StyledSwitch>
            
        </>
    )
}

export default Toggle