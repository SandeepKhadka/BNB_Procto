import React from 'react';
import styled from 'styled-components';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: 50vh; 
`;

const ContactDetails = styled.div`
    width: 50%;
    margin: 8% auto;
`;

const ContactContainer = styled.div`
  flex: 0 0 calc(50% - 30px);
  background-image: url('./images/contact-section.png');
  padding: 20px;
  overflow-x: hidden;
`;


const EmergencyContainer = styled.div`
  flex: 0 0 calc(50% - 50px);
  background-image: url('./images/emergency-section.png');
  background-size: cover;
  padding: 20px;
  overflow-x: hidden;

`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #fff; 
`;

const Description = styled.p`
  margin: 10px 0;
  color: #fff; 
  line-height: 35px;
  font-size: 13px;
  width: 80%;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff; 
  margin-bottom: 20px;
`;

const Icon = styled.div`
margin-right: 20px;
`;

const Phone = styled.div`
  font-weight: bold;
`;

const Mail = styled.p`
  font-weight: bold;
`;


const Contact = () => {
    return (
        <Container>
            <ContactContainer>
                <ContactDetails>
                    <div>
                        <Title>Contact Us</Title>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Description>
                    </div>
                    <ContactInfo>
                        <Icon><CallIcon style={{ fontSize: '24px' }} /></Icon>
                        <Phone>061-577283</Phone>
                    </ContactInfo>
                    <ContactInfo>
                        <Icon><EmailIcon style={{ fontSize: '24px' }} /></Icon>
                        <Mail href="mailto:info@medenin.com">info@medenin.com</Mail>
                    </ContactInfo>
                </ContactDetails>

            </ContactContainer>
            <EmergencyContainer>
                <ContactDetails>
                    <div>
                        <Title>Emergency? Contact Us.</Title>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Description>
                    </div>
                    <ContactInfo>
                        <Icon><CallIcon style={{ fontSize: '24px' }} /></Icon>
                        <Phone>+977 9856038171</Phone>
                    </ContactInfo>
                    <ContactInfo>
                        <Icon><EmailIcon style={{ fontSize: '24px' }} /></Icon>
                        <Mail href="mailto:emergency@medenin.com">emergency@medenin.com</Mail>
                    </ContactInfo>
                </ContactDetails>


            </EmergencyContainer>
        </Container>
    );
};

export default Contact;
