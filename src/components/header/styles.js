import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	height: 400px;
	padding-top: 2rem;
	padding-left: 2rem;
	padding-right: 2rem;
	background-color: lightgray;

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: space-between;
		padding-left: 10rem;
		padding-right: 10rem;
	}
`;

const StyledDarkModeContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media screen and (min-width: 768px) {
		flex-direction: row;
		width: 200px;
	}
`;

export { StyledHeader, StyledDarkModeContainer };
