import styled from 'styled-components';

const ServiceContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Logo = styled.img`
    width: 50px; /* Adjust size as needed */
    height: auto;
    margin-right: 10px; /* Adjust spacing as needed */
`;

const ServiceText = styled.p`
    font-size: 20px; /* Adjust font size as needed */
`;

const Service = ({ logoSrc, text }) => {
    return (
        <ServiceContainer>
            <Logo src={logoSrc} alt="Service Logo" />
            <ServiceText>{text}</ServiceText>
        </ServiceContainer>
    );
};

export default Service