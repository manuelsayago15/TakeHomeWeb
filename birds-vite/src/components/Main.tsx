import { useState } from "react"
import BirdsList from "./BirdsList"
import SearchBar from "./SearchBar"

const Main = () => {
    const [searchBird, setSearchBird] = useState('')

    return (
        <>
            <SearchBar searchBird={searchBird} setSearchBird={setSearchBird}></SearchBar>
            <BirdsList searchBird={searchBird}></BirdsList>
        </>
    )
}

export default Main