import React from 'react'
import { Link , History} from 'react-router';

import './footer.scss'

export default class Footer extends React.Component{
    render(){
            let html = (
                <div id="footer">
                    <div className="footergoods"></div>
                    <div className="footerall">
                        <div className="footerLeft">
                            <i className="iconfont icon-hezi101"></i>
                        </div>
                        <div className="footerline">
                            <div className="total">
                                <span>￥47.50元</span>
                                <p>含0.0元外送费</p>
                            </div>
                        </div>
                        <div className="footerRight"><Link to='/jiesuan'>选好了</Link></div>
                    </div>
                </div>
            )
        return this.props.show ? html : null
    }
}