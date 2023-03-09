import { StyledCounterContainer } from "./Styles"

const Counter=({imgArrow,counterText})=>{
    return(
        <>  <StyledCounterContainer>

        
            <img src={`/public/images/${imgArrow}`} alt="" />
            <div>{counterText}</div>

            </StyledCounterContainer>
        </>
    )
}

export default Counter