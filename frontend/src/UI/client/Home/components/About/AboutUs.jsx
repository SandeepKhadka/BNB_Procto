import styled from 'styled-components';
import { Button } from '@mui/material'

const AboutContainer = styled.div.attrs({ className: 'aboutUs' })`
    display: flex;
    justify-content: space-between;
    background: #f3f3f3;
    padding: 0 5% 0 5%;
    margin: 0 1% 0 1%;

`;

const ImageContainer = styled.div.attrs({ className: 'imageContainer' })`
   width: 80%;
`;

const Details = styled.div.attrs({ className: 'details' })`
    margin-left: 5%;
`;

const TitleH1 = styled.h2`
    margin-top: 5%;
    margin-bottom: 2%;
    font-size: 40px;
    line-height: 60px;
    width: 50%;
    font-weight: 500;
`;

const TitleP = styled.p`
    margin-bottom: 2%; 
    /* width: 80%; */
    line-height: 40px;
    font-size: 16px;
    width: 60%;
`;

const AboutUs = () => {
    return (
        <AboutContainer className='aboutUs'>
            <ImageContainer className='imageContainer'>
                <img src="./images/reception.png" alt="" style={{  }} />
            </ImageContainer>
            <Details className="details">
                <TitleH1>Short Story About
                    Mededin Clinic.
                </TitleH1>
                <TitleP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos ipsum dolor sit amet.
                    orem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos ipsum dolor sit amet.
                </TitleP>
            </Details>
        </AboutContainer>
    )
}

export default AboutUs
