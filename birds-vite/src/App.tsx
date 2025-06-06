import { gql } from '@apollo/client';
import { useEffect } from 'react';

import { client } from './lib/apollo';

import Main from './components/Main';

const App = () => {
	
	useEffect(() => {
		client
		.query({
			query: gql`
			query Birds {
				birds {
					id
					english_name
					}
					}
					`,
				})
				.then((result) => console.log(result.data));
			}, []);
			
	
	console.log('Token desde Vite:', import.meta.env.VITE_ACCESS_TOKEN);

	return (
		<>
			<Main></Main>
		</>
	);
};

export default App;
