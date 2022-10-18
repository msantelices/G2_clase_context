import { useContext } from 'react'
import Context from '../context/context.js'

const Componente2 = ()=> {
    const { count, setCount } = useContext(Context)

    return (
        <button onClick={()=> setCount(count + 1)}>Aumentar</button>
    )
}

export default Componente2