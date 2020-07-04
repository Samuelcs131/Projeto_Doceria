import React from 'react'
import Slides from './main/Slides'
import Contract from './main/Contact'
import Map from './main/Map'
import Information from './main/Information'
import Produtos from './main/Produtos'



export default class Main extends React.Component{
    render(){
        return(
            <div className="Main">
                <Slides/>
                <Produtos />
                <Contract/>
                <Map/>
                <Information/>
            </div>
        )
    }
}