import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
// import 'swiper/css/swiper.css';
// import 'swiper/swiper.less';
import './test.css';
// import mstyles from './index.less';
import 'swiper/swiper-bundle.min.css';

export default class sixthPage extends Component {
    render() {
        const params = {
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            },
            // navigation: {
            //   nextEl: `${mstyles.swiperNext}`,
            //   prevEl: `${mstyles.swiperPrev}`
            // },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30,
            renderNextButton: () => <RightOutlined style={{ fontSize: '2rem', color: 'blue', cursor: 'pointer' }} />,
            renderPrevButton: () => <LeftOutlined style={{ fontSize: '2rem', color: 'blue', cursor: 'pointer'}} />
        }
        const styles = {
            width: '500px',
            height: '300px',
            background: '#aaa',
            border: '1px solid gold',
            color: 'gold',
        }
        return (
          <div style={{ width: '800px', position: 'absolute'}}>
            <Swiper {...params}>
                <div key='1' style={{...styles}}>Slide 1</div>
                <div key='2' style={{...styles}}>Slide 2</div>
                <div key='3' style={{...styles}}>Slide 3</div>
                <div key='4' style={{...styles}}>Slide 4</div>
                <div key='5' style={{...styles}}>Slide 5</div>
            </Swiper>
          </div>
            
        )
    }
}
