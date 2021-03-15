import styled from 'styled-components';
import hero from '../../assets/images/hero.jpg';

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      to top right,
      rgba(11, 10, 10, 0.38),
      rgba(11, 10, 10, 0.19)
    ),
    url(${hero});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 74vh;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1.3;
  text-align: center;
  color: #fff;
`;

export const HeroSearch = styled.input`
  width: 500px;
  padding: 15px;
  margin-top: 10px;
  outline: none;
  margin-bottom: 20px;
`;
