import React, {useEffect} from 'react';
import MainBannerSliderItem from 'fitness/components/Elements/MainBannerSliderItem';
import slider1 from '@/public/images/banner/slider1.jpg';
import slider2 from '@/public/images/banner/slider2.jpg';
import slider3 from '@/public/images/banner/slider3.jpg';

function loadScriptSequentially(scripts, index = 0) {
    if (index >= scripts.length) return;
  
    const src = scripts[index];
    const alreadyAdded = Array.from(document.scripts).some(script => script.src.includes(src));
    if (alreadyAdded) {
      loadScriptSequentially(scripts, index + 1);
    } else {
      const script = document.createElement('script');
      script.src = `/js/${src}`;
      script.type = "text/javascript";
      script.onload = () => loadScriptSequentially(scripts, index + 1);
  
      document.body.appendChild(script);
    }
}
const MainBanner = () => {
    useEffect(() => {
        const scripts = [
          "jquery.min.js",
          "jquery.themepunch.tools.min.js",
          "jquery.themepunch.revolution.min.js",
          "extensions/revolution.extension.slideanims.min.js",
          "extensions/revolution.extension.layeranimation.min.js",
          "extensions/revolution.extension.navigation.min.js",
          "extensions/revolution.extension.parallax.min.js",
          "jquery.revolution.js"
        ];

        loadScriptSequentially(scripts);
    }, []);

    return (
        <div className="main-banner banner_up">
            <div id="rev_slider_34_1_wrapper" className="rev_slider_wrapper" data-alias="news-gallery34">
                <div id="rev_slider_34_1" className="rev_slider" data-version="5.0.7">
                    <ul>
                        <MainBannerSliderItem
                            sliderImageSrc={slider1.src}
                            subText={"Add new workout to your <br/>enrollment with"}
                            title={"TRNHRD"}
                        />
                        <MainBannerSliderItem
                            sliderImageSrc={slider2.src}
                            subText={"we are here to help you"}
                            title={"Professional Fitness Services Provider"}
                        />
                        <MainBannerSliderItem
                            sliderImageSrc={slider3.src}
                            subText={"we are here to help you"}
                            title={"We Are Fitness Manager Always at Your Service."}
                        />
                    </ul>
                    <div className="tp-bannertimer tp-bottom"></div>
                </div>
            </div>
        </div>
    );
};

export default MainBanner;