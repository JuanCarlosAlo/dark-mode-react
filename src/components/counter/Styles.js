import styled from 'styled-components';

const StyledCounterContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 100px;
	color: ${({ color }) => color};
`;

export { StyledCounterContainer };
