import { StyledCounterContainer } from "./Styles"

const Counter=({imgArrow,counterText,color})=>{
    return(
        <>  <StyledCounterContainer color ={color}>

        
            <img src={`/public/images/${imgArrow}`} alt="" />
            <div>{counterText}</div>

            </StyledCounterContainer>
        </>
    )
}

export default Counter