const SearchBar = ({handleChangeSearchBar, handleChangeCheckbox}) => {
    
    return (
        <div className="search-bar">
            
            <label htmlFor="stock-search-bar">Search</label>
            <input onChange={handleChangeSearchBar} id="stock-search-bar" type="text" placeholder="Search..." />
            
            <label htmlFor="stock-checkbox">
                <input onChange={handleChangeCheckbox} id="stock-checkbox" type="checkbox" />
                Only show products in stock
            </label>

        </div>
    );
};

export default SearchBar;