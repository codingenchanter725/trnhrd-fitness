import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});
import TestimonialSliderItem from 'fitness/components/Elements/TestimonialSliderItem';
import Image from 'next/image';
import first from '@/public/images/testimonial/1.jpg';
import second from '@/public/images/testimonial/2.jpg';
import third from '@/public/images/testimonial/3.jpg';
import colon from '@/public/images/colon.png';
const Testimonial = () => {
    const options = {
        loop: false,
        margin: 30,
        nav: true,
        dots: false,
        center: false,
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
        },
        navText: [
          "<i class='fas fa-arrow-left'></i>",
          "<i class='fas fa-arrow-right'></i>",
        ],
    };

    return (
        <section className="padding ptb-xs-40 testimonial_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-sm-5 col-xs-12">
                        <div className="section_tit">
                            <h2>Real members. Real Results.</h2>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-7 col-xs-12">
                        <OwlCarousel className="say_testimonial dots_style owl-carousel" {...options}>
                            <TestimonialSliderItem
                                sliderImage={first}
                                name={"Vanessa Adams"}
                                bio={"Age 35"}
                                description={"\
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\
                                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\
                                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a\
                                    Lorem Ipsum passage,\
                                "}
                            />
                            <TestimonialSliderItem
                                sliderImage={second}
                                name={"Vanessa Adams"}
                                bio={"Age 35"}
                                description={"\
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\
                                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\
                                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a\
                                    Lorem Ipsum passage,\
                                "}
                            />
                            <TestimonialSliderItem
                                sliderImage={third}
                                name={"Vanessa Adams"}
                                bio={"CEO"}
                                description={"\
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\
                                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\
                                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a\
                                    Lorem Ipsum passage,\
                                "}
                            />
                            <TestimonialSliderItem
                                sliderImage={first}
                                name={"Vanessa Adams"}
                                bio={"Age 35"}
                                description={"\
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\
                                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\
                                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a\
                                    Lorem Ipsum passage,\
                                "}
                            />
                            <TestimonialSliderItem
                                sliderImage={second}
                                name={"Vanessa Adams"}
                                bio={"Age 35"}
                                description={"\
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\
                                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\
                                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a\
                                    Lorem Ipsum passage,\
                                "}
                            />
                            <TestimonialSliderItem
                                sliderImage={third}
                                name={"Vanessa Adams"}
                                bio={"CEO"}
                                description={"\
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical\
                                    Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at\
                                    Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a\
                                    Lorem Ipsum passage,\
                                "}
                            />
                        </OwlCarousel>
                        <img className="testimonial_colon" src={colon.src} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;