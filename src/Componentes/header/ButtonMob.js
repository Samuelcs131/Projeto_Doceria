import React from 'react'

export default class ButtonMob extends React.Component{

    /* Fara a funcao de toggle*/
    constructor(){
        super();
        this.state={
            visNav:'flex'
        }
    }
    
    clickMe(){
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            })
        }else {
            this.setState({
                visNav:'flex'
            })
        }
        document.querySelector(".nav").style.display=this.state.visNav
    }


    render(){
        return(
            <div className="buttonMob"  onClick={this.clickMe.bind(this)}>
                <img src="/img/sharp_menu_black_48dp.png" alt="Botão Mobile" width="40px"></img>
            </div>
        )
    }
}
