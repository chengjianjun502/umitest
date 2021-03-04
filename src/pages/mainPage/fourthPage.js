import { Select, Popover, Tag, Form, Button } from 'antd';
import React, { Component } from 'react';
import styles from '../index.less';
import MySelect from '../../compontents/MainPage/MySelect';


const { Option } = Select;
export default class fourthPage extends Component {
    state={
        checkedData: [],
    }
    maxTagPlaceholder=(omittedValues)=> {
        // const labels = omittedValues.map(i => i.label);
        // const labelsToStr = labels.join('；');
        const content = (
            <div onMouseDown={e => e.stopPropagation()}>
                {
                    omittedValues.map(i => {
                        return (
                            <Tag style={{ margin: '8px' }} closable onClose={() => this.handleTagClose(i.label)} key={i.label} >{i.label} </Tag>
                        )
                    })
                }
            </div>
        )
        return (
            <Popover overlayClassName={styles.mPopover} content={content} onMouseDown={e => e.stopPropagation()} getPopupContainer={() => document.getElementById('mspan')} trigger="click">
                <span>...</span>
            </Popover>
        )
    }

    handleTagClose = (key) => {
        const mData = JSON.parse(JSON.stringify(this.state.checkedData));
        const newData = mData.filter(i => i !== key);
        console.info('newData:', newData);
        this.setState({
            checkedData: newData,
        })
    }
    handleChange = (value) => {
        console.info('value:', value);
        this.setState({
            checkedData: value,
        })
    }

    handleSubmit = (values) => {
        console.info(values, 888)
    }
    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }
        console.info(this.props, 444)
        return (
            <React.Fragment>
                <div>
                    <div id='mspan' style={{ width: '500px', margin: '5rem auto', height: '5rem', background: '#eded' }}>
                        <h1>简单封装</h1>
                        <Select mode="multiple" value={this.state.checkedData} style={{ width: '100%' }} maxTagCount={2} maxTagPlaceholder={(omittedValues) => this.maxTagPlaceholder(omittedValues)} onChange={this.handleChange} tokenSeparators={[',']}>
                            {children}
                        </Select>
                    </div>
                    <div id='mspan' style={{ width: '500px', margin: '5rem auto', height: '5rem', background: '#eded', textAlign: 'center' }}>
                        <h1>支持form的简单封装</h1>
                        <Form
                            initialValues={{
                                select: ['a10'],
                            }}
                            onFinish={this.handleSubmit}
                        >
                            <Form.Item name='select' >
                                <MySelect width='100%' />
                            </Form.Item>
                            <Form.Item >
                                <Button type='primary' htmlType='submit' >提交</Button>
                            </Form.Item>
                        </Form>

                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}