// src/App2/index.js
import React from 'react';
import './fitStyles.css';
import { Button } from 'antd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


export default class App2 extends React.Component {


    state = {show: true};
  
    onToggle = () => this.setState({show: !this.state.show});
  
    render() {
      const {show} = this.state;
      return (
        <div className={'container'}>
          <div className={'square-wrapper'}>
            <CSSTransition
              in={show}
              timeout={500}
              classNames={'fade'}
              unmountOnExit={true}
            >
              <div className={'square'} />
            </CSSTransition>
          </div>
          <Button onClick={this.onToggle}>toggle</Button>
        </div>
      );
    }
  }