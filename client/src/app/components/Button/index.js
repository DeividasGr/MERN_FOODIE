import styled from 'styled-components';

const handleColorType = (color) => {
  switch (color) {
    case 'primary':
      return '#fff';
    case 'hero':
      return 'rgba(12, 12, 12, 0.911)';
    case 'danger':
      return '#e21313';
    default:
      return '#E38B06';
  }
};

const Button = styled.button`
  border-radius: ${({ bigRadius }) => (bigRadius ? '20px' : '10px')};
  background-color: ${({ color }) => handleColorType(color)};
  color: ${({ font }) => (font ? '#000' : '#fff')};
  padding: ${({ big }) => (big ? '14px 26px' : '10px 22px')};
  font-size: ${({ bigFont }) => (bigFont ? '18px' : '14px')};
  outline: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.5);
  transition: all 0.5s ease;
  width: ${({ small }) => (small ? '30%' : '100%')};
  margin-top: 10px;

  &:hover {
    background-color: ${({ hoverColor }) => (hoverColor ? '#eb4141' : '#fff')};
    transition: all 0.5s ease;
    color: #000;
  }
`;

export default Button;
