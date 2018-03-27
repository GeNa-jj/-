import React from 'react'

import './loginerror.scss'

export default class LoginErrorComponent extends React.Component{
    render(){
        let html = (
            <div className="error">
                {this.props.content}
            </div>
        )
        return this.props.show ? html : null;
    }
}