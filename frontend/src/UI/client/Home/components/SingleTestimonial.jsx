import styled from 'styled-components';

const AllTestimonials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TestimonialCard = styled.div`
    position: relative;
    border: 10px solid #FBF1FB; 
    padding: 20px;
    margin-top: 20px;
    width: 80%;
    max-width: 600px;
`;

const ClientImage = styled.img`
    width: 100px;
    height: 100px; 
    border-radius: 50%; 
    position: absolute; 
    top: -50px; 
    left: 50%; 
    transform: translateX(-50%);
`;

const Content = styled.div`
    text-align: center;
    padding-top: 50px;
`;

const Rating = styled.div`
    margin-bottom: 10px;
    font-size: 16px;
`;

const Comment = styled.div`
    margin-bottom: 10px;
    font-style: italic; 
    line-height: 30px;
`;

const Name = styled.div`
    font-size: 16px;
    color: #4D72D0;
`;

const SingleTestimonial = () => {
    return (
        <AllTestimonials>
            <TestimonialCard>
                <ClientImage src="/images/client1.png" alt="Client" />
                <Content>
                    <Rating>⭐⭐⭐⭐⭐</Rating>
                    <Comment>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel gravida lectus. Vestibulum convallis sapien eget sem sodales, ut lobortis purus sagittis. Proin quis bibendum odio.</Comment>
                    <Name>John Doe</Name>
                </Content>
            </TestimonialCard>
        </AllTestimonials>
    )
}

export default SingleTestimonial;
