const Header = ({ 
    birdName, 
} : { 
    birdName: string,
}) => {
    return (
        <>  
            <h1>Birds {birdName}</h1>
        </>
    )
}

export default Header