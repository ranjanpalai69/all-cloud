import React, { useState } from 'react';
import Slider from 'react-slick';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Row } from 'react-bootstrap';

const ImageCarousel = () => {
    const [settings] = useState({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    });

    const logos = [
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/65434ca784785c5eb37d051b_LOGO%201.png",
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/6544c49fe8cd6d61148c983c_image%20168-p-500.png",
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/65435f44173fec30f5ffc64e_nxi6yfeppdlwsdnahtfh.webp",
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/65434ca446c8fbf84a5d24db_Moneyboxx%20image%201-p-500.png",
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/65434ca5c728519c1f3c36de_OTO%201.png",
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/65434ca2443d4523d0f1358b_image%20158-p-500.png",
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/65434ca3c43d3c36cc6455bd_MSFincap.png",
        "https://assets-global.website-files.com/63b435b50cf3c54c440003c3/65434ca544bc11c2b7615212_Group%2038070.png"
      ];
      

    return (
        
           <div style={{width:"90%",margin:"auto"}}>
             <Slider {...settings} className='text-center d-flex gap-3' >
                {logos.map((logo, index) => (
                    <div key={index} >
                        <img src={logo} alt='logo' className='flow-img'/>
                    </div>
                ))}
            </Slider>
           </div>

    )
}

export default ImageCarousel