import Counter from "../counter/Counter"
import SocialMedia from "../socialMedia/SocialMedia"
import { StyledCardItem, StyledFollowersNumbers, StyledSocialMediaContainer } from "./styles"

const CardItem=({socialImg,socialName,followersNumber,followersText,imgArrow,counterText})=>{
    console.log(socialImg)
    return(
        <>
            <StyledCardItem>
                <StyledSocialMediaContainer>
                    <SocialMedia socialImg={socialImg}/>

                    <p>{socialName}</p>
                </StyledSocialMediaContainer>
                <StyledFollowersNumbers>{followersNumber}</StyledFollowersNumbers>
                <p>{followersText}</p>
                <div>
                   <Counter imgArrow={imgArrow} counterText={counterText}/>
                </div>
            </StyledCardItem>
        </>
    )
}

export default CardItem