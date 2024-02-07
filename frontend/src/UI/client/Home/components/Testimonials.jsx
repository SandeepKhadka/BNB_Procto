import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../../../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css';
import SingleTestimonial from './SingleTestimonial';
import styled from 'styled-components';

const TestimonialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3% 0;
`;

const SubTitle = styled.p`
    text-align: center;
    font-size: 16px;
    color: #4D72D0;
`;

const TitleH1 = styled.h1`
    text-align: center;
    font-weight: 500;
    margin-bottom: 20px;
`;

const TestimonialsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const TestimonialCarousel = styled(Carousel)`
    width: 100%;

    .control-arrow {
        background-color: transparent;
        color: #d4d2d2;
        border: none;
        border-radius: 50%;
        padding: 10px;
        margin-top: 20px;
        cursor: pointer;
        transition: background-color 0.3s ease;
        font-size: 28px;

        &:hover {
            background-color: rgba(77, 114, 208, 0.1);
        }

        &:disabled {
            color: #ccc;
            cursor: pointer;
        }
    }
`;

const Testimonials = () => {
    const testimonials = [
        <SingleTestimonial key={1} />,
        <SingleTestimonial key={2} />,
        <SingleTestimonial key={3} />,
        <SingleTestimonial key={4} />,
        <SingleTestimonial key={5} />,
    ];

    return (
        <TestimonialWrapper>
            <SubTitle>----Testimonials----</SubTitle>
            <TitleH1>What Our Clients Say</TitleH1>
            <TestimonialsRow>
                <TestimonialCarousel
                    showThumbs={false}
                    showStatus={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                    swipeable={true}
                    autoPlay={true}
                    interval={5000}
                    transitionTime={500}
                    showArrows={false}
                    centerMode={true}
                    centerSlidePercentage={33.33}
                >
                    {testimonials}
                </TestimonialCarousel>
            </TestimonialsRow>
        </TestimonialWrapper>
    );
}

export default Testimonials;