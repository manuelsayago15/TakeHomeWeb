
const SearchBar = ({
    searchBird,
    setSearchBird,
}: {
    searchBird: string;
    setSearchBird: (value: string) => void;
}) => {
    
    return (
        <>
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