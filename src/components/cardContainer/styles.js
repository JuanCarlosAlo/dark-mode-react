import styled from 'styled-components';

const StyledCardContainer = styled.div`
	position: absolute;
	top: 15rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	width: 80%;
	padding-top: 2rem;
	padding-left: 2rem;
	padding-right: 2rem;
	@media screen and (min-width: 768px) {
		left: 9rem;
	}
`;

export { StyledCardContainer };
