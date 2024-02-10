import styled from 'styled-components';
import Blog from './Blog';
import { Link } from 'react-router-dom';
import blogImage from '../../../../../public/images/blog1.png';


const BlogRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const BlogItem = styled.div`
  flex: 0 0 calc(33.33% - 20px);
  margin: 0 10px;
  margin-bottom: 20px; 
`;

const ViewMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const ViewMoreButton = styled(Link)`
  background-color: #4D72D0;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
  text-decoration: none;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 500;
    margin-bottom: 20px;
`;

const BlogLayout = () => {
  return (
    <>
      <Title>Recent Blogs And Articles</Title> {/* Title added */}
      <BlogRow>
        <BlogItem>
          <Blog
            key="1"
            id="1"
            imageSrc={blogImage}
            title="Blog Title"
            date="January 1, 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero..."
          />
        </BlogItem>
        <BlogItem>
          <Blog
             key="2"
             id="2"
            imageSrc={blogImage}
            title="Blog Title"
            date="January 1, 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero..."
          />
        </BlogItem>
        <BlogItem>
          <Blog
             key="3"
             id="3"
            imageSrc={blogImage}
            title="Blog Title"
            date="January 1, 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero..."
          />
        </BlogItem>
      </BlogRow>
      <ViewMoreContainer>
        <ViewMoreButton to="/blog">View More</ViewMoreButton>
      </ViewMoreContainer>
    </>
  );
};

export default BlogLayout;
