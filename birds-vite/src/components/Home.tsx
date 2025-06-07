import { useState } from "react"
//import BirdsList from "./BirdsList"
import SearchBar from "./SearchBar"
import Header from "./Header"

const Home = () => {
    const [searchBird, setSearchBird] = useState('')

    return (
        <div className="home-container">
            <aside className="sidebar">
                <h1>The Birds App</h1>
                <p>By Copilot</p>
                <a href="#">Home</a>
            </aside>
            <main className="main">
                <Header birdName={""} birdId={0}></Header>
                <SearchBar searchBird={searchBird} setSearchBird={setSearchBird}></SearchBar>
                {/* <BirdsList searchBird={searchBird}></BirdsList> */}
            </main>
        </div>
    )
}

export default Home