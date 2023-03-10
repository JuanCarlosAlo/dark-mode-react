import CardItem from '../cardItem/CardItem';
import { v4 } from 'uuid';
import {
	StyledBottomCounter,
	StyledCardBottom,
	StyledCardBottomResults,
	StyledTopContainer
} from './styles';
import { StyledCounterContainer } from '../counter/Styles';
import SocialMedia from '../socialMedia/SocialMedia';
import Counter from '../counter/Counter';

const cardObj = [
	{
		id: v4(),
		socialImg: 'icon-facebook.svg',
		resultsText: 'Page Views',
		resultssNumber: '87',
		imgArrow: 'icon-up.svg',
		counterText: '303%',
		color: 'rgba(30, 181, 137, 1)'
	},
	{
		id: v4(),
		socialImg: 'icon-facebook.svg',
		resultsText: 'Likes',
		resultssNumber: '52',
		imgArrow: 'icon-down.svg',
		counterText: '2%',
		color: 'rgba(220, 65, 76, 1)'
	},
	{
		id: v4(),
		socialImg: 'icon-instagram.svg',
		resultsText: 'Likes',
		resultssNumber: '5462',
		imgArrow: 'icon-up.svg',
		counterText: '2257%',
		color: 'rgba(30, 181, 137, 1)'
	},
	{
		id: v4(),
		socialImg: 'icon-instagram.svg',
		resultsText: 'Page Views',
		resultssNumber: '52K',
		imgArrow: 'icon-up.svg',
		counterText: '1375%',
		color: 'rgba(30, 181, 137, 1)'
	},
	{
		id: v4(),
		socialImg: 'icon-twitter.svg',
		resultsText: 'Retweets',
		resultssNumber: '117',
		imgArrow: 'icon-up.svg',
		counterText: '303%',
		color: 'rgba(30, 181, 137, 1)'
	},
	{
		id: v4(),
		socialImg: 'icon-twitter.svg',
		resultsText: 'Likes',
		resultssNumber: '507',
		imgArrow: 'icon-up.svg',
		counterText: '553%',
		color: 'rgba(30, 181, 137, 1)'
	},
	{
		id: v4(),
		socialImg: 'icon-youtube.svg',
		resultsText: 'Likes',
		resultssNumber: '107',
		imgArrow: 'icon-down.svg',
		counterText: '10%',
		color: 'rgba(220, 65, 76, 1)'
	},
	{
		id: v4(),
		socialImg: 'icon-youtube.svg',
		resultsText: 'Total Views',
		resultssNumber: '1407',
		imgArrow: 'icon-down.svg',
		counterText: '12%',
		color: 'rgba(220, 65, 76, 1)'
	}
];

const CardContainerBottom = ({ dark }) => {
	return (
		<>
			{' '}
			<StyledTopContainer>
				{cardObj.map(info => {
					return (
						<StyledCardBottom dark={dark} key={info.id}>
							<StyledCardBottomResults>
								<div>{info.resultsText}</div>
								<div>{info.resultssNumber}</div>
							</StyledCardBottomResults>
							<StyledBottomCounter>
								<SocialMedia socialImg={info.socialImg} />
								<Counter
									imgArrow={info.imgArrow}
									counterText={info.counterText}
									color={info.color}
								/>
							</StyledBottomCounter>
						</StyledCardBottom>
					);
				})}
			</StyledTopContainer>
		</>
	);
};

export default CardContainerBottom;
