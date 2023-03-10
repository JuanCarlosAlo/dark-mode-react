import CardContainerBottom from '../cardContainerBottom/CardContainerBottom';
import CardContainerTop from '../cardContainerTop/CardContainerTop';
import { StyledCardContainer } from './styles';

const CardContainer = ({ dark }) => {
	return (
		<>
			<StyledCardContainer>
				<CardContainerTop dark={dark} />
				<CardContainerBottom dark={dark} />
			</StyledCardContainer>
		</>
	);
};

export default CardContainer;
