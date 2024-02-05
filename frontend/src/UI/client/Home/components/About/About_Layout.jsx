import styled from 'styled-components';
import Service from '../Service';
import AboutUs from './AboutUs';
import AboutFounder from './AboutFounder';

const AboutWrapper = styled.div.attrs({ className: 'aboutUs' })`

`;

const ServiceWrapper = styled.div.attrs({ className: 'serviceWrapper' })`
   display: flex;
   justify-content: space-between;
   align-items: center;
   height: 100px;
   width: 80%;
   margin-left: 5%;
   margin: 2% 0 2% 0;
   padding: 0 5% 0 10%;
`;

const NewServiceWrapper = styled.div.attrs({ className: 'newServiceWrapper' })`
   display: flex;
   justify-content: space-between; 
   align-items: center;
   height: 100px;
   margin-top: 2%;
   background: #5BC198;
   padding: 0 10%;
   color: #fff;
   font-weight: 600;
`;

const About_Layout = () => {
    return (
        <AboutWrapper>
            <ServiceWrapper className='serviceWrapper'>
                <Service logoSrc="./images/service1.png" text="Specialized Service" />
                <Service logoSrc="./images/service2.png" text="24/7 Available" />
                <Service logoSrc="./images/service3.png" text="Get Online Results" />
            </ServiceWrapper>
            <AboutUs />
            <NewServiceWrapper className='newServiceWrapper'>
                <Service logoSrc="./images/tick.png" text="Advanced Care" logoWidth="30px" />
                <Service logoSrc="./images/tick.png" text="Medical & Surgery" logoWidth="30px" />
                <Service logoSrc="./images/tick.png" text="Online Medicine" logoWidth="30px" />
                <Service logoSrc="./images/tick.png" text="Lab Tests" logoWidth="30px" />
            </NewServiceWrapper>
            <AboutFounder />
        </AboutWrapper>
    );
}

export default About_Layout;
