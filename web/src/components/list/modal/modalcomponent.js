import React, {Component} from 'react'

import Datagrid from '../../datagrid/datagridcomponent.js'

import './modal.scss'

class ModalComponent extends Component{
    render(){
            let html = (
            <div className="Marco-modal">
                <div className="Marco-modalBody">
                    <div className="Marco-modalMain">
                       <Datagrid id={this.props.id} getId={this.props.getId} hidden={this.props.hidden} showup={this.props.showup}/> 
                    </div>
                </div>
                <div className="Marco-modalShade"></div>
            </div>
        )
        return this.props.show ? html : null;
    }
}

export default ModalComponent;