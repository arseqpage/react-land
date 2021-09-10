import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 200px;
  min-width: 100px;
  padding: ${({ big }) => (big ? '16px 40px' : '14px 24px')};

  color: ${({ primary }) => (primary ? '#fff' : '#000d1a')};
  font-size: ${({ big }) => (big ? '20px' : '14px')};
  text-decoration: none;

  background: ${({ primary }) => (primary ? '#000d1a' : '#000d1a')};

  white-space: normal;
  outline: none;
  border: nonde;
  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
`;
