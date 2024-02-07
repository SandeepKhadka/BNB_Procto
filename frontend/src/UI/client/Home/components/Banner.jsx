import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    position: relative;
    box-sizing: border-box;
`;

const TitleWrapper = styled.div.attrs({ className: 'titleWrapper' })`
    padding: 0 5% 0 10%;
    width: 50%;
`;

const ImageWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;

const TitleH3 = styled.p`
    margin: 20% 0 5% 0;
    font-weight: lighter;
    font-size: 20px;
    color: #2C2E31;
`;

const TitleH1 = styled.h1`
    margin-bottom: 10%;
    font-size: 55px;
`;

const TitleP = styled.p`
    margin-bottom: 20px;
    width: 80%;
    line-height: 35px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const StyledButton = styled.button`
    && {
        border-radius: 30px;
        border: 3px solid ${props => props.color || '#4D72D0'};
        text-transform: none;
        background: ${props => props.background || '#4D72D0'};
        color: white;
        padding: 10px 20px;
        margin-right: 10px;
        cursor: pointer;
    }

    &.make-appointment {
        padding: 20px 40px;
        font-size: 18px;
    }
`;

const CustomCarousel = styled(Carousel)`
    .carousel-slider .control-arrow {
        background-color: transparent; // Set background color to transparent by default
        transition: background-color 0.3s ease; // Add transition effect
    }

    .carousel-slider .control-arrow:hover {
        background-color: white; // Change background color to white on hover
    }
`;

const Banner = () => {
    const carouselImages = [
        {
            src: './images/carauselImage1.png',
            alt: 'Carousel Image 1',
            titleH3: 'We are here for you',
            titleH1: 'What Makes Us Better, Makes You Better.',
            titleP: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos ipsum dolor sit amet.',
        },
        {
            src: './images/carauselImage2.png',
            alt: 'Carousel Image 2',
            titleH3: 'Title H3 for Image 2',
            titleH1: 'Title H1 for Image 2',
            titleP: 'Title P for Image 2',
        },
        {
            src: './images/carauselImage3.png',
            alt: 'Carousel Image 3',
            titleH3: 'Title H3 for Image 3',
            titleH1: 'Title H1 for Image 3',
            titleP: 'Title P for Image 3',
        },
    ];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = index => {
        setActiveSlideIndex(index);
    };

    return (
        <Wrapper>
            <TitleWrapper>
                <TitleH3>{carouselImages[activeSlideIndex].titleH3}</TitleH3>
                <TitleH1>{carouselImages[activeSlideIndex].titleH1}</TitleH1>
                <TitleP>{carouselImages[activeSlideIndex].titleP}</TitleP>
                <ButtonWrapper>
                    <StyledButton className='make-appointment' color="#4D72D0" background="" variant="outlined">Make Appointment</StyledButton>
                    <StyledButton color="#5BC198" background="#5BC198" variant="outlined">
                        <PlayArrowIcon />
                    </StyledButton>
                </ButtonWrapper>
            </TitleWrapper>
            <ImageWrapper>
                <CustomCarousel
                    showThumbs={false}
                    showStatus={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                    swipeable={true}
                    autoPlay={true}
                    interval={5000}
                    onChange={handleSlideChange}
                >
                    {carouselImages.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </CustomCarousel>
            </ImageWrapper>
        </Wrapper>
    );
};

export default Banner;
