import styled from 'styled-components';

export const LastNewsContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 215px;
  padding: 24px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  background-color: #161009;
  text-decoration: none;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${props => props.lastNewsBanner});
`;

export const LastNewsSpace = styled.div`
  background-color: #ffffff;
`;

export const LastNewsTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  color: #fff;
`;

export const LastNewsAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export const LastNewsAuthorImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const LastNewsBottomWrapper = styled.div`
  margin-left: 16px;
`;

export const LastNewAuthorName = styled.h3`
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
`;

export const LastNewsDate = styled.time`
  font-size: 14px;
  line-height: 19px;
  color: rgba(255, 255, 255, 0.5);
`;
