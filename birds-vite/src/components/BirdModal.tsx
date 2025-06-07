import { useMutation } from "@apollo/client"
import { ADD_NOTE } from "../graphql/queries"

import { useState } from "react"

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
                    <h2>Add a Note</h2>
                    <input 
                        type="text"
                        placeholder="Where did you spot it?"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Enter your notes here"
                    />
                    {error && <p style={{ color: "red" }}>Error adding note.</p>}
                    <div className="modal-actions">
                        <button onClick={() => setShowModal(false)}>Cancel</button>
                        <button onClick={handleAddNote} disabled={loading || comment.trim() === ""}>{loading ? "Adding..." : "Add Note"}</button>
                    </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default BirdModal