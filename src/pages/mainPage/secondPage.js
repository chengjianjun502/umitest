import React, { Component } from 'react';
import QRCode  from 'qrcode.react';
import img from '../../images/007.png';


export default class secondPage extends Component {
    state={
        qrUrl:'https://u.wechat.com/EFK2Ho3ImTsHGZv6yaMfm28',
    }
    render() {
        return (
            <div style={{height: '50rem', lineHeight: '20rem', color: 'gold', background: '#555', textAlign: 'center', fontSize: '5rem', fontWeight: 'bold'}}>
                Hello World!
                <div>
                    <QRCode
                        value={this.state.qrUrl || ''}  //value参数为生成二维码的链接
                        size={200} //二维码的宽高尺寸
                        fgColor="#000000"  //二维码的颜色
                        // imageSettings={{
                        //     src: img,
                        //     width: 50,
                        //     height: 50,
                        // }}
                        style={{border: '1rem solid #ededed'}}
                    />
                </div>
            </div>
        )
    }
}
