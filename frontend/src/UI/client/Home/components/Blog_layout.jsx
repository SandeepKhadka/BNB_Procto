import styled from 'styled-components';
import Blog from './Blog';

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

const ViewMoreButton = styled.button`
  background-color: #4D72D0;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 600;
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 500;
    margin-bottom: 20px;
`;

const BlogLayout = () => {
  return (
    <>
      <Title>Blogs And Articles</Title> {/* Title added */}
      <BlogRow>
        <BlogItem>
          <Blog
            imageSrc="./images/blog1.png"
            title="Blog Title"
            date="January 1, 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero..."
          />
        </BlogItem>
        <BlogItem>
          <Blog
            imageSrc="./images/blog1.png"
            title="Blog Title"
            date="January 1, 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero..."
          />
        </BlogItem>
        <BlogItem>
          <Blog
            imageSrc="./images/blog1.png"
            title="Blog Title"
            date="January 1, 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero..."
          />
        </BlogItem>
      </BlogRow>
      <ViewMoreContainer>
        <ViewMoreButton>View More</ViewMoreButton>
      </ViewMoreContainer>
    </>
  );
};

export default BlogLayout;
