import React, { useState } from 'react';
import styled from 'styled-components';

const BlogContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const BlogImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

const BlogTitle = styled.h2`
  margin-top: 20px;
  font-size: 24px;
`;

const BlogDate = styled.p`
  margin-top: 10px;
  color: #666;
`;

const BlogDescription = styled.p`
  margin-top: 20px;
  line-height: 1.6;
`;

const ReadMoreText = styled.p`
  color: #4D72D0;
  cursor: pointer;
  margin-top: 10px;
`;

const Blog = ({ imageSrc, title, date, description }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <BlogContainer>
      <BlogImage src={imageSrc} alt="Blog" />
      <BlogTitle>{title}</BlogTitle>
      <BlogDate>Published on: {date}</BlogDate>
      <BlogDescription>
        {showFullDescription ? description : `${description.slice(0, 100)}...`}
      </BlogDescription>
      {!showFullDescription && (
        <ReadMoreText onClick={toggleDescription}>Read More</ReadMoreText>
      )}
    </BlogContainer>
  );
};

export default Blog;
