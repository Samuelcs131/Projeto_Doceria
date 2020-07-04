import React from 'react'



export default class Produtos extends React.Component{
    render(){
        return(
            <div className="produtos">
                 <h2>As Melhores Trufas</h2>
                 
                <div className="recheios">
                <h3>Recheios</h3>
                    <table>
                 
                <tr>
                 <td>Chocolate</td>   
                 <td>Maracujá</td>
                 <td>Limão</td>
                </tr>
                <tr>
                <td>Morango</td>
                 <td>Chocolate Branco</td>
                 <td>Amendoim</td>
                </tr>  
                <tr>
                <td>Ninho</td>
                <td>Beijinho</td>
                </tr> 
                
                 </table>
                 </div>

                 <div className="casquinhas">
                <h3>Casquinhas</h3>

                <table>
                <tr>
                 <td>Chocolate Preto</td>
                 <td>Chocolate Branco</td>
                 </tr>
                 </table>
                 </div>

                 <div className="precos">
                 <h3>Preços</h3>
                 <table>
                 <tr>    
                 <td>Unidade</td>
                 <td>Promoção</td>
                 <td>Frete</td>
                 </tr>
                 <tr>
                 <td>R$2,00</td>
                 <td>A partir de 10 unidades <br/>
                     cada uma sai por R$1,50</td>
                 <td>R$3,00</td>
                 </tr>
                 </table>
                 </div>

            </div>
            
        )
    }
}