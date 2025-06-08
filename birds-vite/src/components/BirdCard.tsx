import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { useState } from "react";
import { GET_BIRD_BY_ID } from "../graphql/queries"
import BirdModal from "./BirdModal";
import SideBar from "./SiderBar";
import ZoomImage from "./ZoomImage";


const BirdCard = () => {
    const { id } = useParams();

    const [showModal, setShowModal] = useState(false)

    const { data, loading, error } = useQuery(GET_BIRD_BY_ID, {
        variables: { id },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const bird = data.bird;

    if (!bird) return <p>Couldn't find the bird.</p>;

    return (
        <>
            {bird && (
                <div className="layout-container">
                    <SideBar></SideBar>
                    <section className="layout-right">
                        <div className="bird-card-header">
                            <h1>
                                <span>Birds /</span> {`${bird.english_name}`}
                            </h1>
                            <button className="add-note-button" onClick={() => setShowModal(true)}>Add Note</button>
                        </div>
                        <div className="bird-card-image">
                            <ZoomImage birdImage={bird.image_url} alt={bird.english_name}></ZoomImage>
                        </div>
                        <div className="bird-card-notes">
                            <h2>Notes</h2>
                            <ul>
                                {bird.notes.map((note: { id: string; comment: string; timestamp: number }) => (
                                    <li key={note.id}>
                                        <div>
                                            <img src={bird.thumb_url} alt={bird.english_name}/>
                                            <div>
                                                <h3>{new Date(note.timestamp * 1000).toLocaleString()}</h3>
                                                <p>{note.comment}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bird-card-languages-container">
                            <div className="bird-card-languages-title">
                                <h2>In Other Languages</h2>
                            </div>
                            <div className="bird-card-languages">
                                <div>
                                    <h3>English</h3>
                                    <p>{bird.english_name}</p>
                                </div>
                                <div>
                                    <h3>Latin</h3>
                                    <p>{bird.latin_name}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    { showModal && <BirdModal showModal={showModal} setShowModal={setShowModal} birdId={bird.id}></BirdModal>}
                </div>
            )}
        </>
    )
}

export default BirdCard