import { useQuery } from "@apollo/client";
import GET_BIRDS from "../graphql/queries";

const BirdsList = ({ searchBird } : { searchBird: string }) => {
    /*type Bird = {
        id: string;
        english_name: string;
    }*/


    const { loading, error, data } = useQuery(GET_BIRDS);
	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

    const filteredBirds = data.birds.filter((bird: { english_name: string }) => 
        bird.english_name.toLowerCase().includes(searchBird.toLowerCase())
    )

    return (
        <ul>
			{filteredBirds.map((bird: { 
                id: string; 
                english_name: string; 
                latin_name: string;
                thumb_url: string;
                image_url: string;
            }) => (
                console.log("id:", bird.latin_name + ' ' + bird.english_name),
				<li key={bird.id}>
                    <img src={bird.thumb_url} alt={bird.english_name} />
                    <h3>{bird.english_name}</h3>
                    <p>{bird.latin_name}</p>

                </li>
			))}
		</ul>
    )
}

export default BirdsList