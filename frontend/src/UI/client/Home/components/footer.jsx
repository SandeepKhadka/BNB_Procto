import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  background-color: #3C3F42;
  color: white;
  padding: 20px;
`;

const LeftSide = styled.div`
  flex: 1;
  font-size: 18px;
`;

const RightSide = styled.div`
  display: flex;
  gap: 20px;
`;

const SocialIcon = styled.div`
  font-size: 16px;
  cursor: pointer;

  & svg {
    font-size: 24px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftSide>&copy; 2024 BNB Procoto Laser CLinic P. Ltd</LeftSide>
      <RightSide>
        <SocialIcon>
          <FacebookIcon />
        </SocialIcon>
        <SocialIcon>
          <InstagramIcon />
        </SocialIcon>
        <SocialIcon>
          <TwitterIcon />
        </SocialIcon>
        <SocialIcon>
          <YouTubeIcon />
        </SocialIcon>
      </RightSide>
    </FooterWrapper>
  );
};

export default Footer;
