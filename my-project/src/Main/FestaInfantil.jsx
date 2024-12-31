import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function FestaInfantil(){
    return(
        <section id="festaInfantil" className="bg-[url('/bg-FestaInfantil.png')] bg-cover bg-center p-6">
            <h1 className="w-11/12 Mobile:w-full m-auto border-l-2 border-black p-2 mb-3 text-xl font-aboreto">Festas infantis</h1>
            <div className="w-11/12 m-auto max-w-6xl bg-gray-300 Mobile:w-full">
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable:true,
                }}
                navigation={true}
                modules={[Pagination,Navigation]}
                className='mySwiper'
                >
                    <SwiperSlide><img className="shadow-lg w-full" src="ImgFestasInfantis1.jpg" alt="Imagens de fotos de festas Infantis"/></SwiperSlide>
                    <SwiperSlide><img className="shadow-lg w-full" src="ImgFestasInfantis2.jpg" alt="Imagens de fotos de festas Infantis"/></SwiperSlide>
                    <SwiperSlide><img className="shadow-lg w-full" src="ImgFestasInfantis3.jpg" alt="Imagens de fotos de festas Infantis"/></SwiperSlide>
                    <SwiperSlide><img className="shadow-lg w-full" src="ImgFestasInfantis4.jpg" alt="Imagens de fotos de festas Infantis"/></SwiperSlide>
                    <SwiperSlide><img className="shadow-lg w-full" src="ImgFestasInfantis5.jpg" alt="Imagens de fotos de festas Infantis"/></SwiperSlide>
                    <SwiperSlide><img className="shadow-lg w-full" src="ImgFestasInfantis6.jpg" alt="Imagens de fotos de festas Infantis"/></SwiperSlide>
                    <SwiperSlide><img className="shadow-lg w-full" src="ImgFestasInfantis7.jpg" alt="Imagens de fotos de festas Infantis"/></SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}