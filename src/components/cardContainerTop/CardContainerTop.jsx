import CardItem from "../cardItem/CardItem"
import { v4 } from "uuid"
import { StyledTopContainer } from "./styles"

const cardObj =[
    {
        id: v4(),
        socialImg: 'icon-facebook.svg',
        socialName: '@nathanf',
        followersNumber: '1987',
        followersText: 'FOLLOWERS',
        imgArrow: 'icon-up.svg',
        counterText: '12 Today'
    },
    {
        id: v4(),
        socialImg: 'icon-facebook.svg',
        socialName: '@nathanf',
        followersNumber: '1044',
        followersText: 'FOLLOWERS',
        imgArrow: 'icon-up.svg',
        counterText: '99 Today'
    },
    {
        id: v4(),
        socialImg: 'icon-instagram.svg',
        socialName: '@realnathanf',
        followersNumber: '11K',
        followersText: 'FOLLOWERS',
        imgArrow: 'icon-up.svg',
        counterText: '1099 Today'
    },
    {
        id: v4(),
        socialImg: 'icon-youtube.svg',
        socialName: 'Nathan F.',
        followersNumber: '8239',
        followersText: 'FOLLOWERS',
        imgArrow: 'icon-down.svg',
        counterText: '144 Today'
    },
]




const CardContainerTop=()=>{
    return(
        <>  <StyledTopContainer>
               {cardObj.map(info=>{
                    return(
                    <CardItem
                        {...info}
                        key={info.id}
                    />

                    )
                })
            }
           </StyledTopContainer>
          
        
        
        </>
    )
}

export default CardContainerTop