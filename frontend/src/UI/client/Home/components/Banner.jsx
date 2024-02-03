import styled from 'styled-components';
import "../styles/Banner.css"
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Wrapper = styled.div.attrs({ className: 'wrapper' })`
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    align-items:center;
    width: 100%; 
    height: 100px;
    position: relative;
    /* padding: 5%; */
    
`;

const TitleWrapper = styled.div.attrs({ className: 'titleWrapper' })`
    margin-top: 30%;
    padding: 0 5% 0 10%;
    width: 40%; 
    overflow: hidden;

`;

const ImageWrapper = styled.div.attrs({ className: 'imageWrapper' })`
    position: absolute;
    top: 5%;
    left: 50%;
    width: 50%; 
`;

const TitleH3 = styled.h3`
    margin-bottom: 5%; 
    font-weight: 400;
`;

const TitleH1 = styled.h1`
    margin-bottom: 5%;
    font-size: 50px;
    line-height: 80px;
`;

const TitleP = styled.p`
    margin-bottom: 5%; 
    width: 80%;
    line-height: 40px;
    font-size: 16px;
`;


const Banner = () => {
    return (
        <Wrapper className="wrapper">
            <TitleWrapper className='titleWrapper'>
                <TitleH3>We are here for you</TitleH3>
                <TitleH1>What Makes Us Better, Makes
                    You Better.</TitleH1>
                <TitleP>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus eu lacus ex. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos ipsum dolor sit amet.</TitleP>
                <div>
                    <Button variant="outlined" style={{ borderRadius: '20px', border: '3px solid #4D72D0', textTransform: 'none', background: '#4D72D0', color: 'white', padding: '1% 2% 1% 2%', marginRight: '1%'}}>Make Appointment</Button>
                    <Button variant="outlined" style={{ borderRadius: '20px', border: '3px solid #5BC198', textTransform: 'none', background: '#5BC198', color: 'white', }}><PlayArrowIcon /></Button>
                </div>
            </TitleWrapper>
            <ImageWrapper className='imageWrapper'>
                <img src="./images/carauselImage1.png" alt="" style={{ width: '70%', marginTop: 15 }} />
            </ImageWrapper>

        </Wrapper>
    )
}

export default Banner
