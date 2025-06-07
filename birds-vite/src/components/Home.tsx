import { useState } from "react"
//import BirdsList from "./BirdsList"
import SearchBar from "./SearchBar"
import Header from "./Header"

const Home = () => {
    const [searchBird, setSearchBird] = useState('')

    return (
        <div className="home-container">
            <aside className="sidebar">
                <div>
                    <h1>The Birds App</h1>
                    <p>By Copilot</p>
                </div>
                <div className="sidebar-link">
                    <a href="/">Home</a>
                </div>
            </aside>
            <main className="main">
                <div className="main-header">
                    <Header birdName={""}></Header>
                </div>
                <div className="main-search-bar">
                    <SearchBar searchBird={searchBird} setSearchBird={setSearchBird}></SearchBar>
                </div>
                {/* <BirdsList searchBird={searchBird}></BirdsList> */}
            </main>
        </div>
    )
}

export default Home