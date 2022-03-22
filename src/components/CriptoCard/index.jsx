import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import './Criptocard.scss';

const cookies = new Cookies()



export default function CriptoCard () {
    const [globals, setGolbals] = useState([])

    const user = cookies.get('username');

    const getGlobals = async () => {
        const res = await axios.get('https://api.coinlore.net/api/global/')
        
        setGolbals([res.data][0])

        console.log(globals)

    }
    
    useEffect(() => {
        getGlobals()
        // eslint-disable-next-line
    },[])



    return (
        <div className="container-criptocard">
        <section className ="criptocard">
            <h2>Bienvenido {user}</h2>
            <h3>Informacion general</h3>
            <p>Mercados activos</p>
            {
                globals.map((global)=> (
                    <span>{global.active_markets}</span>
                ))
            }
            <p>Numero de criptomonedas</p>
            {
                globals.map((global)=> (
                    <span>{global.coins_count}</span>
                ))
            }
        </section>
        </div>
    )
}