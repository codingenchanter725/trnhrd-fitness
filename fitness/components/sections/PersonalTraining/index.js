import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});
import PersonalTrainingSliderItem from 'fitness/components/Elements/PersonalTrainingSliderItem';
import first from '@/public/images/explanation/first.png';
import one_on_one from '@/public/images/explanation/one-on-one.png';
import constant from '@/public/images/explanation/constant.png';
import custom_traning from '@/public/images/explanation/custom_traning.png';

const PersonalTraining = () => {
    const options = {
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        center: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
        navClass: ['d-none', 'd-none']
    };
    
    return (
        <section className="padding ptb-xs-40 explanation">
            <div className="row" style={{ margin: 0 }}>
                <div className="col-md-3 col-sm-12">
                    <img className="first_fitness" src={first.src} alt="first" />
                </div>
                <div className="col-md-9 col-sm-12 traning_part">
                    <h2>PERSONAL TRAINING AND EXPERT</h2>
                    <OwlCarousel className="slider_cours_home fitness_h2_paragraph" {...options}>
                        <PersonalTrainingSliderItem
                            sliderImageSrc={one_on_one.src}
                            subText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quos aperiam ipsam modi dolor suscipit asperiores perspiciatis."}
                            title={"One-on-one coaching"}
                        />

                        <PersonalTrainingSliderItem
                            sliderImageSrc={constant.src}
                            subText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quos aperiam ipsam modi dolor suscipit asperiores perspiciatis."}
                            title={"Constant contact"}
                        />

                        <PersonalTrainingSliderItem
                            sliderImageSrc={custom_traning.src}
                            subText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quos aperiam ipsam modi dolor suscipit asperiores perspiciatis."}
                            title={"Your custom training plan"}
                        />
                    </OwlCarousel>
                </div>
            </div>
        </section>
    );
};

export default PersonalTraining;