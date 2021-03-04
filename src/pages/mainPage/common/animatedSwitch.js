// AnimatedSwitch.js
 
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, Switch } from 'react-router-dom';
import './index.css';
 
const AnimatedSwitch = props => {
    console.info(props, 888)
    const { children, show } = props
    return (
        <Route
            render={({ location }) => (
                <TransitionGroup>
                    <CSSTransition
                        key={location.key}
                        in={show}
                        classNames={'fade'} 
                        timeout={props.duration || 1300}
                        unmountOnExit={true}
                    >
                        <Switch location={location}>{children}</Switch>
                    </CSSTransition>
                </TransitionGroup>
            )}
        />
    )
}
 
export default AnimatedSwitch
