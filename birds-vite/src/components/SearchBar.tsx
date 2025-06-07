import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const SearchBar = ({
    searchBird,
    setSearchBird,
}: {
    searchBird: string;
    setSearchBird: (value: string) => void;
}) => {
    
    return (
        <>  
            <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} size="sm" style={{ color: "#4f7a96" }} />
            <input
                type="text"
                id="search"
                placeholder="Search for birds"
                value={searchBird}
                onChange={(e) => setSearchBird(e.target.value)}
            />
        </>
    )
}


export default SearchBar