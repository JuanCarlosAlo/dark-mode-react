import styled from 'styled-components';

const StyledTopContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	flex-direction: column;
	gap: 2rem;
	width: 100%;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

const StyledCardBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	height: 125px;
	width: 100%;
	padding: 1rem;
	border-radius: 1rem;
	background-color: ${({ dark }) => (dark ? '#F7F9FF' : '#252B42')};
	color: ${({ dark }) => (dark ? '#252B42' : '#F7F9FF')};
`;

const StyledCardBottomResults = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const StyledBottomCounter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 2rem;
`;

export {
	StyledTopContainer,
	StyledCardBottom,
	StyledCardBottomResults,
	StyledBottomCounter
};
