import Toggle from '../toggle/Toggle';
import {
	StyledDarkModeContainer,
	StyledDarkModeText,
	StyledHeader,
	StyledTitle,
	StyledTotal
} from './styles';

const Header = ({ dark, setDark }) => {
	return (
		<>
			<StyledHeader dark={dark}>
				<div>
					<StyledTitle dark={dark}>Social Media Dashboard</StyledTitle>
					<StyledTotal dark={dark}>Total Followers 23,004</StyledTotal>
				</div>

				<StyledDarkModeContainer>
					<StyledDarkModeText dark={dark}>
						{dark ? 'Dark Mode' : 'Lignt Mode'}
					</StyledDarkModeText>
					<Toggle dark={dark} setDark={setDark} />
				</StyledDarkModeContainer>
			</StyledHeader>
		</>
	);
};

export default Header;
