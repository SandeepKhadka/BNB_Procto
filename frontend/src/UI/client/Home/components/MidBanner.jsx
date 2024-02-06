import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MidBannerWrapper = styled.div`
    display: flex;
    justify-content: flex-end; 
    align-items: center;
    width: 100%; 
    margin: 3% 0;
    position: relative; 
`;

const ImageContainer = styled.div`
    flex: 1;
    background-image: url('/images/background-section.png');
    background-size: cover;
    background-position: center;
    height: 300px;
    padding: 5%;

`;

const Detail = styled.div`
    position: absolute;
    top: 50%; 
    right: 20%;
    transform: translateY(-50%); 
    display: flex;
    flex-direction: column;
    width: 20%;
    color: white;
    padding: 5%;
`;

const TitleH1 = styled.h1`
    font-weight: 500;
    margin-bottom: 10px;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
`;

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 20px;
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
    }
`;

const MidBanner = () => {
    return (
        <MidBannerWrapper>
            <ImageContainer />
            <Detail>
                <TitleH1>We Believe in a Healthier You</TitleH1>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. <br />Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </Description>
                <ButtonWrapper>
                    <StyledButton className='make-appointment' color="" background="#5BC198" variant="outlined">Make Appointment</StyledButton>
                    <StyledButton color="" background="#3C3F42" variant="outlined">
                        <PlayArrowIcon />
                    </StyledButton>
                </ButtonWrapper>
            </Detail>
        </MidBannerWrapper>
    )
}

export default MidBanner;
