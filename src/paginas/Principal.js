
import axios from "axios";
import { useEffect, useState } from "react";
import CriptoCard from "../components/CriptoCard";
import Header from "../components/Header";
import Table from "../components/Table";






export default function Principal() {

    const [search, setSearch] = useState('')
    const [coins, setCoins] = useState([])

    /**
     * esta peticion trae las 100 primeras criptomonedas de la api se puede usar start and limit para definir la cantidad de datos
     */ 
    const getData = async () => {
        const res = await axios.get('https://api.coinlore.net/api/tickers/?start=0&limit=100')
        
        setCoins([res.data.data][0])
        
    }
    
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    },[])

    

     

    return (
        <>
            <Header />
            <CriptoCard />
            <div className="container-form">
                <input className="form-control" type="text" placeholder='Busacar moneda' onChange={e=> setSearch(e.target.value)}/>
            </div>
            <Table coins={coins} search={search}/>
        </>
    )
}