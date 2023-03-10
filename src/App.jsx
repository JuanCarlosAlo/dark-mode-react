import { useState } from 'react';
import CardContainer from './components/cardContainer/CardContainer';

import Header from './components/header/Header';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	const [dark, setDark] = useState(false);

	return (
		<>
			<GlobalStyle dark={dark} />
			<Header dark={dark} setDark={setDark} />
			<CardContainer dark={dark} />
		</>
	);
};

export default App;
