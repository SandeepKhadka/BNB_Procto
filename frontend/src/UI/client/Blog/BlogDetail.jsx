import React from 'react';
import styled from 'styled-components';

const BlogDetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px;
`;

const BlogImage = styled.img`
  width: 40%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BlogContent = styled.div`
  width: 60%;
  margin-left: 20px;
`;

const BlogTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PublishedDate = styled.p`
  font-size: 14px;
  color: #666;
`;

const Description = styled.p`
  margin-top: 20px;
  line-height: 1.6;
`;

const ShareIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const ShareIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const BlogDetail = ({ imageSrc, date, title, description }) => {
  return (
    <div>
      {console.log(imageSrc)}
      <BlogDetailContainer>
        <BlogImage src={imageSrc} alt="Blog Image" />
        <BlogContent>
          <PublishedDate>{date}</PublishedDate>
          {/* {titles.map((title, index) => ( */}
          <BlogTitle>{title}</BlogTitle>
          {/* ))} */}
          <Description>{description}</Description>
          <ShareIcons>
            <ShareIcon src="./path/to/facebook-icon" alt="Facebook" />
            <ShareIcon src="./path/to/instagram-icon" alt="Instagram" />
            <ShareIcon src="./path/to/twitter-icon" alt="Twitter" />
          </ShareIcons>
        </BlogContent>
      </BlogDetailContainer>
    </div>
  );
};

export default BlogDetail;
