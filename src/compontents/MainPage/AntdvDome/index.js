import React from 'react';
import classNames from 'classnames';
import styles from './index.less';
import CanvasContent from './CanvasContent';

export default function index(props) {
  const { experimentId, className } = props

    return (
        <div className={classNames(styles.dagContainer, className)}>
        <CanvasContent
            experimentId={experimentId}
            className={styles.canvasContent}
        />
    </div>
    )
}
 