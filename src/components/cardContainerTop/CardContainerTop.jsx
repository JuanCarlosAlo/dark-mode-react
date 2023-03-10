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
        counterText: '12 Today',
        color: 'rgba(30, 181, 137, 1)'
    },
    {
        id: v4(),
        socialImg: 'icon-facebook.svg',
        socialName: '@nathanf',
        followersNumber: '1044',
        followersText: 'FOLLOWERS',
        imgArrow: 'icon-up.svg',
        counterText: '99 Today',
        color: 'rgba(30, 181, 137, 1)'
    },
    {
        id: v4(),
        socialImg: 'icon-instagram.svg',
        socialName: '@realnathanf',
        followersNumber: '11K',
        followersText: 'FOLLOWERS',
        imgArrow: 'icon-up.svg',
        counterText: '1099 Today',
        color: 'rgba(30, 181, 137, 1)'
    },
    {
        id: v4(),
        socialImg: 'icon-youtube.svg',
        socialName: 'Nathan F.',
        followersNumber: '8239',
        followersText: 'FOLLOWERS',
        imgArrow: 'icon-down.svg',
        counterText: '144 Today',
        color: 'rgba(220, 65, 76, 1)'
    },
]




const CardContainerTop=({dark})=>{
    return(
        <>  <StyledTopContainer>
               {cardObj.map(info=>{
                    return(
                    <CardItem
                        {...info}
                        key={info.id}
                        dark={dark}
                       
                    />

                    )
                })
            }
           </StyledTopContainer>
          
        
        
        </>
    )
}

export default CardContainerTop