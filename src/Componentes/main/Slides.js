import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Slides.css';




export default class Slides extends React.Component{
    render(){


        return(
 
                <div className="slidespers" id="photo">
                <AwesomeSlider>
                 
                  <div className="aws-btn" data-src="https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?cs=srgb&dl=agradavel-alimento-assados-bala-1191639.jpg&fm=jpg"/>
                  <div className="aws-btn" data-src="https://images.pexels.com/photos/3604656/pexels-photo-3604656.jpeg?cs=srgb&dl=comida-alimento-refeicao-festa-3604656.jpg&fm=jpg" />
                  <div className="aws-btn" data-src="https://images.pexels.com/photos/585581/pexels-photo-585581.jpeg?cs=srgb&dl=cake-cupcake-cupcakes-delicious-585581.jpg&fm=jpg" />
                 
                </AwesomeSlider>
                </div>
            
           
        )
    }
}
