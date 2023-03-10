import styled from 'styled-components';

const StyledTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export { StyledTopContainer };
