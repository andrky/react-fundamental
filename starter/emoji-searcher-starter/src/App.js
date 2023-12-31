import { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Container from './components/Container';
import Empty from './components/Empty';
import Emojis from './components/Emojis';

function App() {
	const [emojisData, SetEmojisData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchEmojis() {
			setLoading(true);
			try {
				const res = await axios.get('https://run.mocky.io/v3/5a982f64-218d-45d7-a380-ebe924d55631');

				SetEmojisData(res.data);
				setLoading(false);
			} catch (error) {
				console.log(error);

				setError(true);
				setLoading(false);
			}
		}
		fetchEmojis();
	}, []);

	return (
		<>
			<Navbar />
			<Container>

				{loading && <Empty text="Loading"/>}
				{error && <Empty text="Not Found"/> }
				{emojisData.length > 0 && <Emojis emojisData={emojisData}/>}
			</Container>
		</>
	);
}

export default App;
