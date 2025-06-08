import { useState } from "react"
import BirdsList from "./BirdsList"
import SearchBar from "./SearchBar"
import SideBar from "./SiderBar"

const Home = () => {
    const [searchBird, setSearchBird] = useState('')

    return (
        <div className="layout-container">
            <SideBar></SideBar>
            <main className="layout-right">
                <div className="main-header">
                    <h1>Birds</h1>
                </div>
                <div className="main-search-bar">
                    <SearchBar searchBird={searchBird} setSearchBird={setSearchBird}></SearchBar>
                </div>
                <BirdsList searchBird={searchBird}></BirdsList>
            </main>
        </div>
    )
}

export default Home