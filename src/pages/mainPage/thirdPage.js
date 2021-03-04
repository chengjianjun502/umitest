import { Button, Input, Table, message } from 'antd'
import React, { Component } from 'react';
import './test.css';

const data = [
    { name: 'Tom1', age: '3', address: '1234'},
    { name: 'Tom2', age: '3', address: '1234'},
    { name: 'Tom3', age: '3', address: '1234'},
    { name: 'Tom4', age: '3', address: '1234'},
]
export default class thirdPage extends Component {
    state={
        data: [],
        loading: true,
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                data,
                loading: false,
            })
        }, 1000)
    }
    componentWillUnmount(){
        clearTimeout(this.timer);
    }

    handleCopy = (id) => {
        let input = document.querySelector(`#${id}_copy`);
        input.select(); // 选中文本域中的内容
        if (document.execCommand('copy')) {
        document.execCommand('copy');
        message.success('复制成功');
        }
    }
    render() {
        const columns = [
            {dataIndex: 'name', title: 'name', key: 'name' },
            {dataIndex: 'age', title: 'age', key: 'age' },
            {dataIndex: 'address', title: 'address', key: 'address' },
            {dataIndex: 'btn', title: 'copy', key: 'address',
                render: (_, record) => {
                    return (
                        < >
                        <Button type='primary' onClick={() => this.handleCopy(record.name)} >copy</Button>
                        <Input id={`${record.name}_copy`} value={`${record.name}/${record.address}/${record.age}`} style={{ opacity: '0', position: 'absolute', width:'auto' }} />
                        </>
                    )
                } 
            },
        ]
        const style = {
            width: '1px',
            height: '36px',
            background: 'linear-gradient(244deg,rgba(3,3,3,0) 0%,rgba(3,3,3,1) 50%,rgba(3,3,3,0) 100%)',
        }
        return (
            <div>
                <div style={{...style}}></div>
                <Table loading={this.state.loading} columns={columns} dataSource={this.state.data} />
            </div>
        )
    }
}
