import styled from 'styled-components';

const StyledTopContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	padding-top: 2rem;
	padding-left: 2rem;
	padding-right: 2rem;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding-left: 10rem;
		padding-right: 10rem;
	}
`;

export { StyledTopContainer };
