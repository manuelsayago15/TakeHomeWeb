
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
                placeholder="Searc for birds"
                value={searchBird}
                onChange={(e) => setSearchBird(e.target.value)}
            />
        </>
    )
}


export default SearchBar