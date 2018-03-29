import React from 'react'
import {Link,History} from 'react-router';

import './card.scss'

export default class CardComponent extends React.Component{
    render(){
        return(
            <div className="card">
                <div className="d_header">
                    <div className="d_header_l">
                    <button><Link to="/"><i className="iconfont icon-xiangzuo"></i></Link></button>
                    </div>
                    <div className="d_header_r">
                        <h1>我的卡卷</h1>
                    </div>
                </div>
                <div className="body">
                    <div>亲爱的</div>
                    <div>您好像</div>
                    <div>一张卡都没有</div>
                    <div>哦</div>
                </div>
            </div>
        )
    }
}