import { useState } from "react"
import BirdModal from "./BirdModal"

const Header = ({ 
    birdName,
    birdId, 
} : { 
    birdName: string,
    birdId: number 
}) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <h1>Birds {birdName}</h1>
            <button onClick={() => setShowModal(true)}>Add Note</button>
            <BirdModal showModal={showModal} setShowModal={setShowModal} birdId={birdId}></BirdModal>
        </>
    )
}

export default Header