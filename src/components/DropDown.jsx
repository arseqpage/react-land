import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

import { menuData } from '../data/MenuData';
import { Button } from './Button';

const DropdownContainer = styled.div`
  display: grid;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  left: 0;
  z-index: 11;

  transition: 0.3s ease-in-out;

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};

  background: #cd853f;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;

  background: transparent;

  font-size: 2rem;

  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);

  margin-bottom: 4rem;

  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  color: #fff;

  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const DropDown = ({ toggle, isOpen }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </DropdownMenu>

        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            Contact us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default DropDown;
