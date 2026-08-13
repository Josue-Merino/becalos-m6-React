
function FilterProductsInput({ search, setSearch }) {
    return (
        <>
            <label htmlFor="filter">Buscar producto:</label>
            <input
                type="text"
                id="filter"
                placeholder="Ej. Laptop"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />
        </>
        
    );
}

export default FilterProductsInput 