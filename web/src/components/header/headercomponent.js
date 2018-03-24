import React from 'react'

import './header.scss'

export default class HeaderComponent extends React.Component{
    render(){
        return (
            <header>
                <div className="header_l">
                    <i className="iconfont icon-caidan"></i>
                </div>
                <div className="header_c"></div>
                <div className="header_r">
                    <a href="javascript:void(0);">我的卡卷</a>
                </div>
            </header>
        )
    }
}