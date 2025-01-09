export default function SearchBar({ handleFormSubmit, searchData, setSearchData }) {
    return (
        <>
            {/* search bar */}
            <form className="d-flex pt-3" role="search" onSubmit={handleFormSubmit}>
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search a film..."
                    aria-label="Search"
                    value={searchData}
                    onChange={(e) => setSearchData(e.target.value)}
                />
                <button className="btn btn-primary" type="submit">
                    <i className="bi bi-search"></i>
                </button>
            </form>
        </>
    );
};