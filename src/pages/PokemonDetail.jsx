import { useParams } from "react-router"
const PokemonDetail = ()=>{
    const {id} = useParams();
    return (
        <section>
            <h2>Mostrando datos para Pokemon Id: {id} </h2>
        </section>
    )
}

export default PokemonDetail;