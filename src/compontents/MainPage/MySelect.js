import { Select, Popover, Tag } from 'antd';
import React, { Component } from 'react';
import styles from './index.less';

const { Option } = Select;
export default class MySelect extends Component {
    constructor(props){
        super();
        console.info('props:', props);
        this.state = {
            checkedData: props.value || [],
        }
    }

    // componentDidUpdate(nextProps){
    //     if(JSON.stringify(this.state.checkedData) !== JSON.stringify(nextProps.value)){
    //         this.state = {
    //             checkedData: nextProps.value,
    //         }
    //     }
    // }
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
            <Popover overlayClassName={styles.mPopover} content={content} onMouseDown={e => e.stopPropagation()} getPopupContainer={() => document.getElementById('mspan')} trigger="hover">
                <span>+{omittedValues.length}...</span>
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
        const { onChange } = this.props;
        if(onChange){
            onChange(value);
        }
        this.setState({
            checkedData: value,
        })
    }
    render() {
        const children = [];
        // for (let i = 10; i < 36; i++) {
        //     children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        // }

        const { width = '100%', dataSource = [], keyName  = '', valueName = '' } = this.props;
        dataSource.forEach(element => {
            children.push(<Option key={element[keyName]} >{element[valueName]}</Option>);
        });
        return (
            <div id='mspan' style={{ width: '500px', margin: '5rem auto', height: '5rem', background: '#eded' }}>
                 <Select mode="multiple" value={this.state.checkedData} style={{ width: width }} maxTagCount={3} maxTagPlaceholder={(omittedValues) => this.maxTagPlaceholder(omittedValues)} onChange={this.handleChange} tokenSeparators={[',']}>
                    {children}
                </Select>
            </div>
        )
    }
}
