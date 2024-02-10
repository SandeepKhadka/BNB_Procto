import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Blog from '../Home/components/Blog';

const blogsData = [
  {
      id: 1,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 2,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 3,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 4,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 5,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 6,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 7,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 8,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
      id: 9,
      imageSrc: './images/blog1.png',
      title: 'Blog Title 1',
      date: 'January 1, 2024',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
];

const BlogListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 20px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

const LoadingIndicator = styled.img`
  display: block;
  margin: 20px auto;
`;

const BlogPage = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [loading, setLoading] = useState(true); // Set loading initially to true
  const loadMoreRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLoading(true);
        setTimeout(() => {
          setVisibleBlogs(prevVisibleBlogs => prevVisibleBlogs + 3);
          setLoading(false);
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulating initial loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust the delay time as needed
  }, []);

  return (
    <>
      {loading ? (
        <LoadingIndicator src="./images/loading.gif" alt="Loading..." />
      ) : (
        <>
          <BlogListContainer>
            {blogsData.slice(0, visibleBlogs).map(blog => (
              <Blog
                key={blog.id}
                id={blog.id}
                imageSrc={blog.imageSrc}
                title={blog.title}
                date={blog.date}
                description={blog.description}
              />
            ))}
          </BlogListContainer>
          <div ref={loadMoreRef}></div>
        </>
      )}
    </>
  );
};

export default BlogPage;
