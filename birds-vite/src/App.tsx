import { gql } from '@apollo/client';
import { useEffect } from 'react';

import { client } from './lib/apollo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BirdCard from './components/BirdCard';
import Home from './components/Home';

const App = () => {
	
	useEffect(() => {
		client
		.query({
			query: gql`
			query Birds {
				birds {
					id
					english_name
					notes{
						id
						comment
						timestamp
					}
					}
					}
					`,
				})
				.then((result) => console.log(result.data));
			}, []);

	return (
		<div className='container'>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/bird/:id" element={<BirdCard />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
