import React, { useRef, useEffect } from 'react';
import styles from './index.less';
import classNames from 'classnames';


export default function CanvasContent(props) {
  const { experimentId, className } = props;
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

   // 渲染画布
   useEffect(() => {
    expGraph.renderGraph(containerRef.current, canvasRef.current)
  }, [expGraph])


    return (
        <div
            ref={(elem) => {
                containerRef.current = elem
                // dropRef(elem)
            }}
            className={classNames(className, styles.canvasContent)}
            >
            {/* 图容器 */}
            <div ref={canvasRef} />
        </div>
    )
}
