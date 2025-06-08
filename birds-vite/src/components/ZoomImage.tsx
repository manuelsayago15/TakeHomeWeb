import { useState } from "react"

const ZoomImage = ({
    birdImage,
    alt
}: {
    birdImage: string,
    alt: string
}) => {

    const [isZoomed, setIsZoomed] = useState(false)

    const handleZoom = () => {
        setIsZoomed(!isZoomed)
    }

    return (
        <div className="zoom-image" onClick={handleZoom}>
            <img src={birdImage} alt={alt} className="zoom-hover"/>
        </div>
    )
}

export default ZoomImage