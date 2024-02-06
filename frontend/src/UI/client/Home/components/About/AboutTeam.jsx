import styled from 'styled-components';

const AboutTeamWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3% 0;
`;

const SubTitle = styled.p`
    text-align: center;
    font-size: 16px;
    color: #4D72D0;
`;

const TitleH1 = styled.h1`
    text-align: center;
    font-weight: 500;
`;

const Detail = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;

const SinglePersonDetail = styled.div`
    display: flex;
    /* align-items: center; */
    margin: 10px; /* Increased margin */
    padding: 20px;
    border: 1px solid #ccc;
    width: 40%;
`;

const ImageContainer = styled.div`
    flex: 1;
    margin-right: 20px;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    align-self: center;
`;

const AboutPerson = styled.div`
    flex: 2;
    padding-left: 20px; 
`;

const Name = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Degree = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
`;

const NMCNo = styled.p`
    font-size: 16px;
    margin-bottom: 20px;
`;

const Description = styled.p`
    font-size: 16px;
    line-height: 1.6;
    text-align: justify;
`;


const AboutTeam = () => {
    return (
        <AboutTeamWrapper>
            <SubTitle>----Our Team----</SubTitle>
            <TitleH1>Our Dedicated Doctors</TitleH1>
            <Detail>
                <SinglePersonDetail style={{background: "#F5F1EB"}}>
                    <ImageContainer>
                        <Image src="/images/doctor1.png" alt="Doctor" />
                    </ImageContainer>
                    <AboutPerson>
                        <Name>Dr. Sushil Mishra</Name>
                        <Degree>MS, General Surgery</Degree>
                        <NMCNo>NMC No. 18586</NMCNo>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </Description>
                    </AboutPerson>
                </SinglePersonDetail>
                <SinglePersonDetail style={{background: "#E3E9F6"}}>
                    <ImageContainer>
                        <Image src="/images/doctor2.png" alt="Doctor" />
                    </ImageContainer>
                    <AboutPerson>
                        <Name>Dr. Basanta Koirala</Name>
                        <Degree>MD, Anesthesiology</Degree>
                        <NMCNo>NMC No. 6821</NMCNo>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                        </Description>
                    </AboutPerson>
                </SinglePersonDetail>
            </Detail>
        </AboutTeamWrapper>
    );
}

export default AboutTeam;
