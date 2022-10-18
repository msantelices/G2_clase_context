import { useState, useContext, useEffect } from "react"
import ContextAPI from "../context/contextAPI.js"

const Listado = ()=> {
    const { data } = useContext(ContextAPI)

    const [listado, setListado] = useState([])
    const [filtro, setFiltro] = useState('')

    const handleClick = ()=> {
        const filtrado = data.filter((pkmn)=> pkmn.name === filtro)
        
        console.log(filtrado)
        setListado(filtrado)

        console.log(data)
    }

    const handleReset = ()=> {
        setListado(data)
    }

    useEffect(()=> {
        setListado(data)
    }, [data])

    return (
        <div>
            <input type="text" placeholder="Buscar" onChange={(e)=> setFiltro(e.target.value)} />
            <button onClick={()=> handleClick()}>Buscar</button>
            <button onClick={()=> handleReset()}>Reset</button>

            <ul>
                {
                    listado.map((pkmn, i)=> {
                        return (
                            <li key={i}>{pkmn.name}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Listado