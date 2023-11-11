import React, { useRef, useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
const Index = () => {

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block" }}
                onClick={onClick}
            />
        );
    }


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        slickNext: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const imagesStyle = {
        maxWidth: '100%',
        maxHeight: '800px',
        display: 'block',
        margin: '0 auto',
    }

    return (
        <>
            <div style={{
                width: '100%',
                background: "rgba(0, 0, 0, 0.7)",
                position: "relative",

            }} >
                <Box sx={{
                    color: "#fff",
                    position: "absolute",
                    top: "40%",
                    width: "-webkit-fill-available"
                }}>
                    <Typography sx={{
                        fontSize: "60px",
                        textAlign: "center",
                        margin: "0px"
                    }} >Well come</Typography>
                </Box>


                <Slider {...settings}>
                    <div>
                        <img src={"/images/callouts/camera.jpeg "} style={imagesStyle} alt="Image 1" />
                    </div>
                    <div>
                        <img src={"/images/callouts/camera.jpeg "} style={imagesStyle} alt="Image 2" />
                    </div>
                    <div>
                        <img src={"/images/callouts/camera.jpeg "} style={imagesStyle} alt="Image 3" />
                    </div>
                    <div>
                        <img src={"/images/callouts/camera.jpeg "} style={imagesStyle} alt="Image 3" />
                    </div>
                    <div>
                        <img src={"/images/callouts/camera.jpeg "} style={imagesStyle} alt="Image 3" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Index