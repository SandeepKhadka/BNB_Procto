import styled from 'styled-components';

const ServiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Logo = styled.img`
    width: ${props => props.logoWidth || '50px'}; /* Use the passed logoWidth prop or default to 50px */
    height: auto;
    margin-right: 10px; /* Adjust spacing as needed */
`;
const ServiceText = styled.p`
    font-size: 20px; /* Adjust font size as needed */
`;

const Service = ({ logoSrc, text, logoWidth }) => {
    return (
        <ServiceContainer>
            <Logo src={logoSrc} alt="Service Logo"  logoWidth={logoWidth}/>
            <ServiceText>{text}</ServiceText>
        </ServiceContainer>
    );
};

export default Service