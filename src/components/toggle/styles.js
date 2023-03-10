import styled from 'styled-components';

const StyledSwitch = styled.div`
	position: relative;
	width: 80px;
	height: 40px;
	border: 2px solid black;
	border-radius: 4rem;
`;

const StyledLabel = styled.label`
	position: absolute;
	bottom: 0;
	left: 0;
	cursor: pointer;
	background-color: #ccc;
	transition: 0.4s;
	border-radius: 4rem;
	&::before {
		position: absolute;
		content: '';
		height: 32px;
		width: 32px;
		left: 2px;
		bottom: 2px;
		background-color: gray;
		transition: 0.4s;
		border-radius: 50%;
	}
`;

const StyledInput = styled.input`
	opacity: 0;
	&:checked + ${StyledLabel}::before {
		transform: translateX(40px);
	}
`;

export { StyledSwitch, StyledInput, StyledLabel };
