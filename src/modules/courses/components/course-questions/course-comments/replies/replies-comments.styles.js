import styled from "styled-components";

export const RepliesContainer = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  padding-left: ${props => (props.depth * 55) + 'px'};
`

export const RepliesFiledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

export const RepliesUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;
`