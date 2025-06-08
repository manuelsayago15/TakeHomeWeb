import { useMutation } from "@apollo/client"
import { ADD_NOTE } from "../graphql/queries"

import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

const BirdModal = ({ 
    showModal,
    setShowModal, 
    birdId,
} : { 
    showModal: boolean,
    setShowModal: (value: boolean) => void 
    birdId: number
}) => {
    const [comment, setComment] = useState("")
    const [location, setLocation] = useState("")
    const [addNote, { loading, error }] = useMutation(ADD_NOTE)
    if (!showModal) return null;

    const handleAddNote = async () => {
        try {
            await addNote({
                variables: {
                    birdId,
                    comment: comment.trim(),
                    //location: location.trim(),
                    timestamp: Math.floor(Date.now() / 1000),
                },
            });
            setComment("");
            //setLocation("")
            setShowModal(false);
        } catch (err) {
            console.error("Error adding note:", err);
        }
    };

    return (
        <>
            {showModal && (
                <div className="modal-backdrop">
                    <div className="modal">
                        <div className="modal-header">
                            <h2>Add a Note</h2>
                            <button onClick={() => setShowModal(false)}>
                                <FontAwesomeIcon icon={faXmark} size="lg" style={{color: "#000000",}} />
                            </button>
                        </div>
                        <div className="modal-location-container">
                            <label htmlFor="note-location">Location</label>
                            <input 
                                type="text"
                                id="note-location"
                                placeholder="Where did you spot it?"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="modal-note-container">
                            <label htmlFor="note-comment">Note</label>
                            <textarea
                                id="note-comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Enter your notes here"
                            />
                        </div>
                        {error && <p style={{ color: "red" }}>Error adding note.</p>}
                        <div className="modal-actions">
                            <button className="modal-actions-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                            <button className="modal-actions-add-note" onClick={handleAddNote} disabled={loading || comment.trim() === ""}>{loading ? "Adding..." : "Add Note"}</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BirdModal