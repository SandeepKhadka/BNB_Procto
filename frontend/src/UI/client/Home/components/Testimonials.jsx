import React, { useState } from 'react';
import styled from 'styled-components';
import SingleTestimonial from './SingleTestimonial';

const TestimonialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3%;
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
    overflow: hidden;
    width: 100%;
`;

const TestimonialCarousel = styled.div`
    display: flex;
    transition: transform 0.5s ease;
`;

const CarouselButton = styled.button`
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
`;

const Testimonials = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handlePrev = () => {
        setStartIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };
    const handleNext = () => {
        setStartIndex(Math.min(testimonials.length - 3, startIndex + 1));
    };

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
                <CarouselButton onClick={handlePrev} disabled={startIndex === 0}>{"<"}</CarouselButton>
                <TestimonialCarousel style={{ transform: `translateX(-${startIndex * (100 / 3)}%)` }}>
                    {testimonials.slice(startIndex, startIndex + 3)}
                </TestimonialCarousel>
                <CarouselButton onClick={handleNext} disabled={startIndex === testimonials.length - 3}>{">"}</CarouselButton>
            </TestimonialsRow>
        </TestimonialWrapper>
    );
}

export default Testimonials;