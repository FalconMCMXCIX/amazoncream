import React from 'react';
import css from './Testimoanials.module.css';
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../data/testimonials';
import { SwiperSlide, Swiper } from 'swiper/react';


const Testimonials = () => {
  return (
    <div className={css.testimonials}>
        <div className={css.wrapper}>
            <div className={css.container}>
                <span>Top rated</span>
                <span>Seedily say has suitable disposal and boy. Exerxise joy man children rejoiced.</span>
            </div>
            <img src={Hero} alt="hero"/>
            <div className={css.container}>
                <span>100k</span>
                <span>Happy Customers with us</span>
            </div>
        </div>
        <div className={css.reviews}>Reviews</div>
        <div className={css.carousel}>
            <Swiper 
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={20}
            className={css.tCarousel}
            breakpoints={{
                856: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                }
            }}
            >
                {
                    TestimonialsData.map((testimonial) => (
                        <SwiperSlide>
                            <div className={css.testimonial}>
                                <img src={testimonial.image} alt="testimonial" />
                                <span>{testimonial.comment}</span>
                                <hr/>
                                <span>{testimonial.name}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials