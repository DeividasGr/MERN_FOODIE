import styled from 'styled-components';

const handleColorType = (color) => {
  switch (color) {
    case 'teal':
      return '#92d4e4';
    case 'purple':
      return '#3d1d94';
    case 'pink':
      return '#c62bcb';
    default:
      return '#E38B06';
  }
};

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin-bottom: 35px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  min-height: 375px;
  margin-left: 10px;
`;

export const CardTag = styled.p`
  background-color: ${({ color }) => handleColorType(color)};
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  display: inline-block;
`;

export const CardUser = styled.div`
  display: flex;
  margin-top: auto;
  position: relative;
`;

export const CardUserLogo = styled.span`
  position: absolute;
  border: 1px solid transparent;
  padding: 2px 10px;
  border-radius: 50%;
  background-color: ${({ color }) => handleColorType(color)};
`;

export const CardActions = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardActionBtn = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
