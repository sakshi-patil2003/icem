import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from '../../assets/images/sas-min.avif';
import logo2 from '../../assets/images/avalara-min.avif';
import logo3 from '../../assets/images/capgi-min.avif';
import logo4 from '../../assets/images/dataaxle-min.avif';
import logo5 from '../../assets/images/e-zest-min.avif';
import logo6 from '../../assets/images/fis-min.avif';
import logo7 from '../../assets/images/gslab-min.avif';
import logo8 from '../../assets/images/infosys-min.avif';
import logo9 from '../../assets/images/jaspay-min.avif';
import logo10 from '../../assets/images/kpit-min.avif';
import logo11 from '../../assets/images/kpmg-min.avif';
import logo12 from '../../assets/images/l&T-min.avif';
import logo13 from '../../assets/images/nttdata-min.avif';
import logo14 from '../../assets/images/palo-min.avif';
import logo15 from '../../assets/images/Persistent-min.avif';
import logo16 from '../../assets/images/philips-min.avif';
import logo17 from '../../assets/images/pubmatic-min.avif';
import logo18 from '../../assets/images/sigma-min.avif';
import logo19 from '../../assets/images/Tcs-min.avif';
import logo20 from '../../assets/images/tibco-min.avif';
import logo21 from '../../assets/images/veritas-min.avif';
import logo22 from '../../assets/images/wipro-min.avif';
import logo23 from '../../assets/images/yash-min.avif';
import logo24 from '../../assets/images/zs-min.avif';

const sponsorsData = [
  {
    title: "PARTICIPATING DELEGATES",
    logos: [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12],
  },
  {
    title: "PARTICIPATING DELEGATES",
    logos: [ logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24],
  },
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col justify-center items-center py-6 md:py-12 bg-white px-4 md:px-16 font-poppins overflow-hidden " >
      <div className="text-3xl md:text-4xl md:text-3xl font-semibold text-gray-800 mb-6">
        Our Recruiters
      </div>

      <Slider {...settings} className="w-full">
        {sponsorsData.map((slide, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full">
              <div
                className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center px-4"
                style={{ gridTemplateRows: "repeat(2, auto)" }}
              >
                {slide.logos.map((logo, idx) => (
                  <div key={idx} className="flex justify-center">
                    <img
                      src={logo}
                      alt={`Logo ${idx + 1}`}
                      className="rounded-none shadow-none w-full max-h-24 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default App;
