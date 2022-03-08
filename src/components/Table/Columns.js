export default function Columns({coin, key}) {


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