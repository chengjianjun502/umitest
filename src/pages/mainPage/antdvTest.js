import React from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';
import AntdvDome from '../../compontents/MainPage/AntdvDome';
import styles from './antv.less';

const { Content } = Layout

export default function antdvTest(props) {

  const { experimentId = '1' } = props

    return (
        <Layout className={styles.layout}>
        <Content className={styles.content}>
            <div className={classNames(styles.experiment)}>
                <div className={styles.editPanel}>
                <AntdvDome
                    experimentId={experimentId}
                    className={styles.dagCanvas}
                />
                </div>
            </div>
        </Content>
    </Layout>
    )
}
