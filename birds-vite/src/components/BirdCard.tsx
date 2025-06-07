import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_BIRD_BY_ID } from "../graphql/queries"
import Header from "./Header";


const BirdCard = () => {
    const { id } = useParams();

    //const { id } = useParams<{ id: string }>();

    const { data, loading, error } = useQuery(GET_BIRD_BY_ID, {
        variables: { id },
    });

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const bird = data.bird;

    return (
        <div>
            <Header birdName={`/ ${bird.english_name}`} birdId={bird.id}></Header>
            <h1>{bird.english_name}</h1>
            <img src={bird.image_url} alt={bird.english_name} />
            <h2><i>{bird.latin_name}</i></h2>

            <h3>Notes</h3>
            <ul>
                {bird.notes.map((note: { id: string; comment: string; timestamp: number }) => (
                <li key={note.id}>
                    <p>{note.comment}</p>
                    <small>{new Date(note.timestamp).toLocaleString()}</small>
                </li>
                ))}
            </ul>
            
        </div>
    )
}

export default BirdCard