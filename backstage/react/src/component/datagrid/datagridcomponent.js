import React,{Component} from 'react'
import Data from '../data/data.js'

export default class Dtatgrid extends Component{

    render(){
        return (
            <div>
                 <Data config={this.props.router.params.name}></Data>
            </div>
            )
           
    }
}