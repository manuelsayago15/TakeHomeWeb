import { useQuery } from "@apollo/client";
import { GET_BIRDS } from "../graphql/queries";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BirdsList = ({ searchBird } : { searchBird: string }) => {
    /*type Bird = {
        id: string;
        english_name: string;
    }*/

    const { loading, error, data } = useQuery(GET_BIRDS);
    const [visibleCount, setVisibleCount] = useState(12);


    useEffect(() => {
        let isScrolled = false;

        const handleScroll = () => {
            if (
                !isScrolled && window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
            ) {
                setVisibleCount((prev) => prev + 12)
                isScrolled = true

                setTimeout(() => {
                    isScrolled = false
                }, 2000)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

	
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

    const filteredBirds = data.birds.filter((bird: { english_name: string }) => 
        bird.english_name.toLowerCase().includes(searchBird.toLowerCase())
    );

    const loadedBirds = filteredBirds.slice(0, visibleCount)

    return (
        <ul className="birds-list">
			{loadedBirds.map((bird: { 
                id: string; 
                english_name: string; 
                latin_name: string;
                thumb_url: string;
                image_url: string;
            }) => (

                //console.log("id:", bird.latin_name + ' ' + bird.english_name),
                <li key={bird.id}>
                    <Link to={`/bird/${bird.id}`}>
                        <img src={bird.thumb_url} alt={bird.english_name} />
                        <h3>{bird.english_name}</h3>
                        <p>{bird.latin_name}</p>
                    </Link>
                </li>
			))}
		</ul>
    )
}

export default BirdsList