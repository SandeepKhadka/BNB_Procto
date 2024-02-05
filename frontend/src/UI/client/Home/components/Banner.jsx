import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
    height: auto;
    position: relative;
    /* padding: 20px; */
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
    }
`;

const Banner = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <TitleH3>We are here for you</TitleH3>
                <TitleH1>What Makes Us Better, Makes You Better.</TitleH1>
                <TitleP>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos ipsum dolor sit amet.
                </TitleP>
                <ButtonWrapper>
                    <StyledButton color="#4D72D0" background="" variant="outlined">Make Appointment</StyledButton>
                    <StyledButton color="#5BC198" background="#5BC198" variant="outlined">
                        <PlayArrowIcon />
                    </StyledButton>
                </ButtonWrapper>
            </TitleWrapper>
            <ImageWrapper>
                <img src="./images/carauselImage1.png" alt="" style={{ width: '100%' }} />
            </ImageWrapper>
        </Wrapper>
    );
}

export default Banner;
