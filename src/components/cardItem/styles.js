import styled from 'styled-components';

const StyledCardItem = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	height: 216px;
	width: 100%;
	padding: 0.5rem;
	border-radius: 1rem;
	background-color: ${({ dark }) => (dark ? '#F7F9FF' : '#252B42')};
	color: ${({ dark }) => (dark ? '#252B42' : '#F7F9FF')};
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
	font-weight: 600;
`;

export { StyledCardItem, StyledSocialMediaContainer, StyledFollowersNumbers };
