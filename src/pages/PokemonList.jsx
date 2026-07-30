import usePokemonAPI from '../services/PokeApiService';
const PokemonList = ()=>{
    const {pokemonsLoaded, offset, limit, status, setOffsetAndLimit} = usePokemonAPI();
    return (
        <section>
            <h2>Pokemon List from API</h2>
            {(status == "loading") && (
                <div> Cargando Pokemon List</div>
            )}
            {(status == "error") && (
                <div> Error al Carga Pokemon List</div>
            )}
            {(status == "idle") && pokemonsLoaded && (
                <pre>{JSON.stringify(pokemonsLoaded , null, 2)}</pre>
            )}
        </section>
    )
}

export default PokemonList;