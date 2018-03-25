import React from 'react'

import HeaderComponent from '../header/headercomponent'
import './home.scss'

export default class HomeComponent extends React.Component{
    render(){
        return (
            <div className="home">
                <HeaderComponent></HeaderComponent>
                <div className="home_body"></div>
                <div className="home_footer"></div>
            </div>
        )
    }
}