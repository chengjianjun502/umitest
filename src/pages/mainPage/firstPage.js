import React, { Component } from 'react';
import { Button, Table } from 'antd';

export default class firstPage extends Component {
    state={
        num: 0,
    }
    handleClick =(name) =>{
        let { num = 0 } = this.state;
        if(num < 2){
            num += 1;
            name = `${name}_${num}`;
        } else {
            num = 0;
            name = `${name}_${num}`;
        }
        this.setState({
            num,
        })
        console.info(name, num)
    }
    render() {
        const {num = 0} = this.state;
        const columns = [
            {title: '姓名', dataIndex: 'xm'},
            {title: '年龄', dataIndex: 'nl'},
            {title: '住址', dataIndex: 'zz'},
        ]
        const data = [
            {xm: '张三', nl: 14, zz: '武汉'},
            {xm: '张国强', nl: 18, zz: '武汉'},
            {xm: '李四', nl: 16, zz: '武汉'},
        ]
        return (
            <div style={{ margin: '5rem auto' }}>
                <div onClick={() => this.handleClick('id_1')}>
                    {num === 0 && (<span style={{color:'red'}}>beautiful_{num}</span>)}
                    {num === 1 && (<span style={{color:'green'}}>beautiful_{num}</span>)}
                    {num === 2 && (<span style={{color:'blue'}}>beautiful_{num}</span>)}
                </div>
                {/* <Button onClick={() => this.handleClick('id_1')}>Click me!</Button> */}
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
