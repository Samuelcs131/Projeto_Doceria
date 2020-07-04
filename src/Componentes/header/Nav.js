import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Nav extends React.Component{
    render(){
        return(
            <div className="nav" id="home">
                <AnchorLink href='#home' offset='10'>Home</AnchorLink>
                <AnchorLink href='#information'>Informações</AnchorLink>
                <AnchorLink href='#photo'>Fotos</AnchorLink>
                <AnchorLink href='#contato'>Contato</AnchorLink>
            </div>
        )
    }
}