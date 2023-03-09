import styled from 'styled-components';

const StyledCardItem = styled.div`
	display: flex;

	align-items: center;
	flex-direction: column;
	height: 216px;
	width: 100%;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: rgba(241, 243, 250, 1);
`;

const StyledSocialMediaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: 100%;
`;

const StyledFollowersNumbers = styled.div`
	font-size: 3rem;
	font-weight: 500;
`;

export { StyledCardItem, StyledSocialMediaContainer, StyledFollowersNumbers };
