import React, { useRef } from 'react'
// import clsx from 'clsx'
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { slides } from '../../API/slides'
import styles from './slide.module.css'

function Slide() {

    const sliderRef = useRef(null);

    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    return (
        <div className={styles.slider}>
            <div className={styles.btnPrev} onClick={() => sliderRef.current.slickPrev()}>
                <ArrowBack className={styles.btnItem} />
            </div>
            <Slider ref={sliderRef} {...settings}>
                {
                    slides.map(slide => (
                        <div className={styles.slide} key={slide.id}>
                            <div className={styles.slideImg}>
                                <img src={slide.img} alt="" className={styles.image} />
                            </div>
                        </div>
                    ))
                }
            </Slider>
            <div className={styles.btnNext} onClick={() => sliderRef.current.slickNext()}>
                <ArrowForward className={styles.btnItem} />
            </div>
        </div>
    )
}

export default Slide