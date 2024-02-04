import styled from 'styled-components';
import Service from '../Service'
import AboutUs from './AboutUs'

const AboutWrapper = styled.div.attrs({ className: 'aboutUs' })`
    position: absolute;
    top: 95%;
    left: 10%;
`;

const ServiceWrapper = styled.div.attrs({ className: 'aboutUs' })`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100px;
   width: 80%;
   margin-left: 5%;
   margin-bottom: 2%;
`;

const About_Layout = () => {
    return (
        <AboutWrapper>
            <ServiceWrapper>
                <Service logoSrc="./images/service1.png" text="Specialized Service" />
                <Service logoSrc="./images/service2.png" text="24/7 Available" />
                <Service logoSrc="./images/service3.png" text="Get Online Results" />
            </ServiceWrapper>
            <AboutUs />
        </AboutWrapper>
    )
}

export default About_Layout
