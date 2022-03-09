
/**
 * 
 * @param {*} param0 recive coin y key del componente index de table
 * @returns las columnas de la tabla con la informacion de la api
 */
export default function Columns({coin, key}) {

    /**
     * 
     * @param {number} number  recibe un numero para darle formato
     * @returns el numero recivido con el formato 
     */
    function formatNumber(number){
        return new Intl.NumberFormat( 'en-US',  {
        
        }    ).format(number)
      }

    return (
        <tr key={key}>
            <td>{coin.rank}</td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>${formatNumber(coin.price_usd)}</td>
            <td className={coin.percent_change_24h > 0 ? 'green':'red'}>
                {coin.percent_change_24h}%  
            </td>
        </tr>
    )
}