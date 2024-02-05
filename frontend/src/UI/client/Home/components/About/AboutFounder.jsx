import styled from 'styled-components';

const AboutFounderWrapper = styled.div.attrs({ className: 'aboutFounder' })`
    display: flex;
    justify-content: space-between;
    padding: 0 10% 0 10%;
    align-items: center;
`;

const ImageContainer = styled.div.attrs({ className: 'imageContainer' })`
   width: 80%;
   max-width: 40%;
`;

const Image = styled.img`
    width: 100%; 
    height: auto; 
`;

const Details = styled.div.attrs({ className: 'details' })`
    flex-grow: 1; 
    margin-left: 20px; 
    max-width: 50%;
`;

const Heading = styled.h1`
margin-bottom: 10px;
    font-weight: 500;
`;

const SubHeading = styled.p`
    margin: 10% 0 1% 0;
    color: #4D72D0;
    font-size: 16px;
`;


const Paragraph = styled.p`
    margin-bottom: 10px;
    font-weight: 400;
    color: #2C2E31;
    line-height: 35px;
    text-align: justify;
    font-size: 18px;
`;

const AboutFounder = () => {
    return (
        <AboutFounderWrapper className='aboutFounder'>
            <ImageContainer className='imageContainer'>
                <Image src="./images/founderImage.png" alt="" style={{}} />
            </ImageContainer>
            <Details className="details">
                <SubHeading>---- Story Of Founder ----</SubHeading>
                <Heading>Dr. Bishowdeep Timilsina</Heading>
                <Paragraph>
                    General Surgeon (MBBS, MS)<br />
                    Consultant Laparoscopic & Laser Surgeon<br />
                    NMC No. 8476
                </Paragraph>
                <Paragraph>
                    Dr. Bishowdeep Timilsina, the visionary behind BNB Procto Laser Clinic, is an experienced laparoscopic and laser surgeon. In September 2017, he introduced laser surgery for piles, fissures, and fistulas. With a track record of over 10,000 successful laser treatments, Dr. Timilsina prioritizes the well-being of his patients. His specialty includes doing colonoscopy on patients aged 60 and up before they have laser procedures. He specializes in colorectal surgery and is skilled in performing Laparoscopic Anterior Resection (LAR) and Abdominoperineal Resection (APR). Dr. Timilsina's sympathetic character is reflected in his vast influence, as patients seek his treatments from all 77 districts of Nepal, as well as from Nepalese populations living overseas. His kind and friendly nature make him a well-known and trusted healthcare provider.
                </Paragraph>
            </Details>
        </AboutFounderWrapper>
    )
}

export default AboutFounder;
