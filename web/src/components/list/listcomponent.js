import React from 'react'

import HeaderComponent from '../header/headercomponent'
import './list.scss'

export default class ListComponent extends React.Component{
    render(){
        return (
            <div className="list">
                <HeaderComponent></HeaderComponent>
                <div className="list_body">
                    <div className="list_banner"></div>
                    <div className="list_main">
                        
                    </div>
                </div>
            </div>
        )
    }
}