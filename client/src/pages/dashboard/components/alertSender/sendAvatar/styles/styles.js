import styled, { keyframes } from "styled-components";

const scaleInAvatar = keyframes`
  0% { transform: scale(0.3) }
 100% { transform: scale(1.0) }
`;

const SendAvatarImage = styled.img`
  animation-name: ${scaleInAvatar};
  animation-duration: 700ms;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 10rem;
  margin-left: 0.3rem;
  box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.48);
  -webkit-box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.48);
  -moz-box-shadow: 10px 10px 10px -8px rgba(0, 0, 0, 0.48);
  &:first-child {
    margin-left: 0;
  }
`;

export default SendAvatarImage;
