
import Columns from "./Columns"
import './Table.scss' 

const titles = ['Rank', 'Nombre', 'Simbolo', 'Precio en dolares', 'porsentaje de cambio en 24 horas']


export default function Table ({coins,search}) {

    const filerCoins = coins.filter((coin)=> 
    coin.name.toLowerCase().includes(search.toLowerCase()) | 
    coin.symbol.toLowerCase().includes(search.toLowerCase()))

    
    
    return (
        <div className="container-table">
        
        <table id="customers">
            <thead>
                <tr>
                    {
                       titles.map(title =>(
                           <th>{title}</th> 
                        )) 
                           
                   }
                </tr>
            </thead>
            <tbody> 
                
                 {filerCoins.map (coin => (
                    <Columns coin={coin} key={coin.id}/>
                ))}
            </tbody> 
        </table>
        </div>
    )
}