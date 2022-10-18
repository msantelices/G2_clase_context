import { useContext } from 'react'
import Context from '../context/context.js'

const Componente1 = ()=> {
    const { count, title } = useContext(Context)

    return (
        <h1>{ title }: { count }</h1>
    )
}

export default Componente1